# Lynx Mobile Surface for relayTrae

Thinnest possible Lynx mobile surface that mirrors the existing mobile browser flow.

## What This Is

A Lynx React app that connects to the same relayTrae server used by the browser demo:
- Renders one Action Card
- Shows Approve / Reject buttons
- Includes note input
- POSTs response to the same server
- Updates from the same server state via SSE (with polling fallback)
- Uses the same semantics as the web mobile client

## Prerequisites

1. **Node.js** (v18 or higher)
2. **relayTrae server running** on port 3000
3. **Lynx CLI** (installed via npm below)

## Installation

```bash
cd lynx/
npm install
```

This installs:
- `@lynx-js/react` - Lynx React runtime
- `@rspeedy/core` - Build tool
- TypeScript support

## Development

```bash
# Start the dev server (serves on port 3001 by default)
npm run dev
```

This will:
1. Build the Lynx app
2. Serve it on `http://localhost:3001`
3. Watch for changes and hot-reload

## Production Build

```bash
npm run build
```

This creates a production build in `lynx/dist/` that can be served statically.

The relayTrae server is already configured to serve this at `http://localhost:3000/lynx/`.

## Testing the Lynx App

### Method 1: Dev Server (Recommended for development)

1. Start relayTrae server:
   ```bash
   cd /path/to/relayTrae
   npm start
   ```

2. In another terminal, start Lynx dev server:
   ```bash
   cd lynx/
   npm run dev
   ```

3. Open the Lynx preview URL in your browser or scan the QR code with the Lynx app on your phone.

### Method 2: Static Build (Production-like)

1. Build the Lynx app:
   ```bash
   cd lynx/
   npm run build
   ```

2. Start relayTrae server:
   ```bash
   npm start
   ```

3. Open `http://localhost:3000/lynx/` in a browser or on your phone.

## End-to-End Test Flow

1. **Desktop**: Open `http://localhost:3000/desktop/` and click "Emit Deploy Card"
2. **Lynx App**: The card should appear on your phone
3. **Lynx App**: Enter a note (e.g., "Ship it") and tap "Approve"
4. **Desktop**: Should update to "Deployment triggered via mobile approval." with your note

## Architecture Notes

- **Same server**: Lynx uses the exact same Express server as browser mobile
- **Same schema**: Uses the same `/shared/actionCard.js` concepts (status enum inline)
- **Same endpoints**:
  - `GET /state` - fetch current card
  - `GET /events` - SSE stream for updates
  - `POST /respond` - submit approve/reject
- **SSE with fallback**: Uses EventSource first, falls back to polling every 2s if SSE fails

## Troubleshooting

### "Cannot connect to server"
- Ensure relayTrae server is running on port 3000
- Check firewall settings for LAN connections
- Try using your computer's LAN IP instead of `localhost`

### "Build fails with module not found"
- Run `npm install` in the `lynx/` directory
- Ensure you're using Node.js v18 or higher

### "Styles not applying"
- Lynx uses a subset of CSS properties
- Check supported properties in the Lynx documentation
- Use inline styles or className with supported properties

## Fallback Plan (If Lynx Fails)

If Lynx becomes unstable on demo day:

1. **Use browser mobile**: `http://<lan-ip>:3000/mobile/` works identically
2. **Desktop fallback button**: Desktop has a "Simulate mobile approval" button that works offline
3. **Reset and retry**: Hit "Reset demo" on desktop to start fresh

The browser mobile demo is fully functional and has been tested end-to-end. Lynx is a bonus layer.
