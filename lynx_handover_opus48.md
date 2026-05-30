# relayTrae Lynx Debug Handover for Opus 4.8

## Goal
Stabilize the Lynx mobile surface for relayTrae without breaking the already-working browser desktop and browser mobile fallback paths.

## Current project status
- Browser desktop flow works.
- Browser mobile flow works on real phone over LAN.
- Hard-gate manual checks for the browser flow were reported as passed.
- Lynx is optional/bonus, not the primary demo path.

## Working architecture outside Lynx
- `desktop/` browser UI emits Action Cards and updates status.
- `mobile/` browser UI receives cards, supports approve/reject, and note input.
- `server/server.js` provides the backend endpoints and in-memory state.
- `shared/actionCard.js` contains pure card logic.

## Known backend contract
- `GET /state` -> returns current card state.
- `GET /events` -> SSE stream for updates.
- `POST /respond` -> accepts action response payload.
- `POST /reset` -> resets demo state.

## What happened during Lynx debugging

### Phase 1: bundle delivery problems
Initial Lynx runs failed before app logic loaded.
Observed errors included:
- Lynx Explorer error `10203`
- message: `Error occurred while fetching app bundle resource`
- root cause shown in screenshots: request timed out

Interpretation:
- This was a Lynx runtime delivery/config problem, not a card logic bug.
- The app bundle path, server choice, QR target, port mapping, or base path was wrong or unstable.

### Phase 2: port confusion
There was confusion between:
- relayTrae Express backend port
- Lynx/Rspeedy dev server port

Observed behavior suggested two serving modes were mixed:
1. Express static serving of built bundle from a route like `/lynx/...`
2. Rspeedy/Lynx dev server serving the bundle directly for Lynx Explorer

This likely caused incorrect QR/URL usage and inconsistent test results.

### Phase 3: bundle became reachable
At one point, the bundle URL was confirmed reachable from LAN with a command like:

```bash
curl -I http://172.20.10.2:3000/lynx/main.lynx.bundle
```

Observed response characteristics:
- `HTTP/1.1 200 OK`
- `Content-Type: application/octet-stream`
- `Content-Length: 850933`

Interpretation:
- The bundle file itself could be served over LAN.
- However, this still did not prove the Lynx runtime path was correct.
- A reachable bundle URL did not eliminate public path / dev server / Explorer runtime mismatch issues.

### Phase 4: runtime advanced past bundle timeout
After killing old processes and restarting, Lynx got further.
The app began rendering at least part of the relayTrae UI before crashing.
This indicates bundle delivery improved enough for runtime startup.

### Phase 5: current blocking runtime error
Current observed error from screenshot:
- error code: `990100`
- message: `LynxCreateUIException: button ui not found when create UI`

Interpretation:
- Lynx now loads the bundle far enough to attempt rendering the app.
- The current blocker is a UI component incompatibility in Lynx.
- The most likely cause is unsupported DOM-style JSX copied from the browser version, especially raw `<button>` elements.

## Most likely root cause now
The Lynx app is still using browser/DOM-oriented JSX tags instead of Lynx-supported primitives/components.

High-risk unsupported elements to inspect immediately in `lynx/src/index.tsx`:
- `button`
- `input`
- `textarea`
- `div`
- `span`
- `p`
- `h1`, `h2`, `h3`
- `section`, `main`, `header`
- any browser-only styling or event assumptions

The specific runtime error strongly points to `button` being unsupported in the current Lynx setup.

## Recommended debugging priorities for Opus 4.8

### Priority 1: inspect Lynx UI source
Inspect `lynx/src/index.tsx` and identify every DOM-style tag or browser assumption.

### Priority 2: replace unsupported elements surgically
Do not redesign.
Only replace unsupported UI primitives with Lynx-safe components/primitives.

Minimum target behavior:
- app opens without runtime crash
- card renders
- approve/reject controls render
- status renders
- note input only if truly supported quickly

### Priority 3: reduce scope if needed
If note input is unstable in Lynx:
- temporarily remove or disable note input in Lynx only
- keep approve/reject working
- preserve browser mobile as the full-featured fallback

### Priority 4: avoid infra churn
Do not keep mixing serving modes while debugging UI.
Pick one runtime path and stay consistent during UI debugging.

## Strong suggestions
- Treat browser mobile as the real demo path.
- Treat Lynx as bonus only.
- Prefer a reduced but stable Lynx UI over a full but crashing Lynx UI.
- Do not refactor backend or shared card logic unless there is hard evidence they cause the Lynx-specific crash.

## Files most likely relevant
- `lynx/src/index.tsx` — highest priority
- `lynx/lynx.config.ts`
- `lynx/package.json`
- `server/server.js` — only for confirming runtime path/ports, not likely the current 990100 root cause
- `shared/actionCard.js` — likely fine, since browser paths already work

## Suggested immediate triage checklist
1. Open `lynx/src/index.tsx`.
2. Enumerate all JSX tags used.
3. Remove/replace any raw `button` first.
4. Rebuild and rerun.
5. If next error appears for another UI element, continue replacing unsupported DOM-style tags.
6. Stop when the app renders stably.
7. Only then test approve/reject behavior.

## What not to do
- Do not debug desktop emit logic right now.
- Do not blame SSE yet.
- Do not assume bundle timeout and UI crash are the same problem.
- Do not keep changing both ports and UI primitives at once.
- Do not sacrifice the already-working browser demo for Lynx.

## Best likely outcome tonight
A reduced Lynx surface that:
- renders the current card
- shows approve/reject
- maybe omits note input if unsupported
- uses browser mobile as the fallback for the full interaction path

## One-line diagnosis
Lynx bundle delivery got far enough to load, but the app now crashes because the Lynx UI code still appears to use unsupported browser-style components, most clearly a raw `button` element.
