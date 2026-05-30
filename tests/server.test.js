import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// We'll import the Express app setup from server.js
// But since server.js starts the server immediately, we'll need to test differently
// For now, we'll use the running server on port 3000 or start a test server

describe('server', () => {
  const TEST_PORT = 3001;
  let server;
  let baseUrl;

  before(async () => {
    // Dynamically import the server module to get the app
    const serverModule = await import(join(root, 'server', 'server.js'));
    // The server starts immediately in the module, so we'll test against the running instance
    // For isolated tests, we'd need to refactor server.js to export app without starting
    baseUrl = 'http://localhost:3000';
  });

  after(() => {
    // Cleanup if needed
  });

  describe('POST /reset', () => {
    it('returns 200 and resets state to pending DeployApproval', async () => {
      const response = await fetch(`${baseUrl}/reset`, { method: 'POST' });
      assert.equal(response.status, 200);
      
      const data = await response.json();
      assert.equal(data.ok, true);
      assert.ok(data.card);
      assert.equal(data.card.status, 'pending');
      assert.equal(data.card.type, 'DeployApproval');
    });

    it('after reset, GET /state returns a fresh pending card', async () => {
      // First reset
      await fetch(`${baseUrl}/reset`, { method: 'POST' });
      
      // Then get state
      const response = await fetch(`${baseUrl}/state`);
      const data = await response.json();
      
      assert.ok(data.card);
      assert.equal(data.card.status, 'pending');
      assert.equal(data.card.type, 'DeployApproval');
      assert.equal(data.card.id, 'deploy-hotfix-v241');
    });

    it('after reset, card.note is undefined', async () => {
      await fetch(`${baseUrl}/reset`, { method: 'POST' });
      
      const response = await fetch(`${baseUrl}/state`);
      const data = await response.json();
      
      assert.equal(data.card.note, undefined);
    });

    it('two consecutive resets return cards with fresh state', async () => {
      const reset1 = await fetch(`${baseUrl}/reset`, { method: 'POST' });
      const data1 = await reset1.json();
      
      const reset2 = await fetch(`${baseUrl}/reset`, { method: 'POST' });
      const data2 = await reset2.json();
      
      // Both should be pending
      assert.equal(data1.card.status, 'pending');
      assert.equal(data2.card.status, 'pending');
      // Same ID since we use fixed ID for DeployApproval
      assert.equal(data1.card.id, data2.card.id);
    });
  });

  describe('POST /respond with note', () => {
    it('stores note on card when provided', async () => {
      // First reset to get a pending card
      await fetch(`${baseUrl}/reset`, { method: 'POST' });
      
      // Respond with note
      const respondResponse = await fetch(`${baseUrl}/respond`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          actionId: 'approve', 
          note: 'Ship it', 
          respondedBy: 'mobile-web' 
        }),
      });
      
      assert.equal(respondResponse.status, 200);
      const respondData = await respondResponse.json();
      assert.equal(respondData.card.note, 'Ship it');
      
      // Verify via GET /state
      const stateResponse = await fetch(`${baseUrl}/state`);
      const stateData = await stateResponse.json();
      assert.equal(stateData.card.note, 'Ship it');
    });

    it('trims whitespace-only note to undefined', async () => {
      // Reset
      await fetch(`${baseUrl}/reset`, { method: 'POST' });
      
      // Respond with whitespace note
      await fetch(`${baseUrl}/respond`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          actionId: 'approve', 
          note: '   ', 
          respondedBy: 'mobile-web' 
        }),
      });
      
      // Verify note is undefined/trimmed
      const stateResponse = await fetch(`${baseUrl}/state`);
      const stateData = await stateResponse.json();
      assert.ok(stateData.card.note === undefined || stateData.card.note === '');
    });
  });

  describe('Desktop status line after approval', () => {
    it('getDesktopStatusLine returns correct message after mobile approval', async () => {
      // Import the function to test it
      const { getDesktopStatusLine, CARD_STATUS } = await import(join(root, 'shared', 'actionCard.js'));
      
      // Reset to get pending card
      await fetch(`${baseUrl}/reset`, { method: 'POST' });
      
      // Approve via respond
      await fetch(`${baseUrl}/respond`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          actionId: 'approve', 
          note: 'LGTM', 
          respondedBy: 'mobile' 
        }),
      });
      
      // Get the approved card
      const stateResponse = await fetch(`${baseUrl}/state`);
      const stateData = await stateResponse.json();
      
      // Verify status
      assert.equal(stateData.card.status, CARD_STATUS.APPROVED);
      
      // Verify status line message
      const statusLine = getDesktopStatusLine(stateData.card);
      assert.equal(statusLine, 'Deployment triggered via mobile approval.');
    });
  });
});
