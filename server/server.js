import express from 'express';
import { createServer } from 'http';
import { appendFileSync } from 'fs';
import { networkInterfaces } from 'os';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { makeDeployApproval, respondToCard } from '../shared/actionCard.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const PORT = process.env.PORT || 3000;
const DEBUG_LOG_PATH = join(root, '.cursor/debug-4c9034.log');

/** @type {import('../shared/actionCard.js').ActionCard | null} */
let currentCard = null;

/** @type {import('http').ServerResponse[]} */
const sseClients = [];

const app = express();
app.use(express.json());

app.use('/shared', express.static(join(root, 'shared')));
app.use('/desktop', express.static(join(root, 'desktop')));
app.use('/mobile', express.static(join(root, 'mobile')));


app.get('/', (_req, res) => {
  res.redirect('/desktop/');
});

function broadcastCard() {
  const payload = JSON.stringify({ card: currentCard });
  for (const client of sseClients) {
    client.write(`data: ${payload}\n\n`);
  }
}

function setCurrentCard(card) {
  currentCard = card;
  broadcastCard();
}

app.post('/__agent_debug_log', (req, res) => {
  const entry = {
    sessionId: '4c9034',
    timestamp: Date.now(),
    ...req.body,
  };
  appendFileSync(DEBUG_LOG_PATH, `${JSON.stringify(entry)}\n`);
  res.json({ ok: true });
});

app.get('/state', (_req, res) => {
  res.json({ card: currentCard });
});

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  sseClients.push(res);
  res.write(`data: ${JSON.stringify({ card: currentCard })}\n\n`);

  req.on('close', () => {
    const index = sseClients.indexOf(res);
    if (index >= 0) sseClients.splice(index, 1);
  });
});

app.post('/emit', (_req, res) => {
  setCurrentCard(makeDeployApproval());
  res.json({ ok: true, card: currentCard });
});

app.post('/reset', (_req, res) => {
  setCurrentCard(makeDeployApproval());
  res.json({ ok: true, card: currentCard });
});

app.post('/respond', (req, res) => {
  if (!currentCard) {
    res.status(404).json({ ok: false, error: 'No active card' });
    return;
  }

  const { actionId, note, respondedBy } = req.body ?? {};
  if (!actionId) {
    res.status(400).json({ ok: false, error: 'actionId required' });
    return;
  }

  currentCard = respondToCard(currentCard, { actionId, note, respondedBy });
  broadcastCard();
  res.json({ ok: true, card: currentCard });
});

function getLanAddress() {
  try {
    const nets = networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name] ?? []) {
        if (net.family === 'IPv4' && !net.internal) {
          return net.address;
        }
      }
    }
  } catch {
    // Some environments block networkInterfaces(); localhost still works.
  }
  return 'localhost';
}

createServer(app).listen(PORT, () => {
  const lan = getLanAddress();
  console.log(`pocketTrae running on http://localhost:${PORT}`);
  console.log(`Desktop: http://localhost:${PORT}/desktop/`);
  console.log(`Mobile:  http://localhost:${PORT}/mobile/`);
  console.log(`Phone (LAN): http://${lan}:${PORT}/mobile/`);
});
