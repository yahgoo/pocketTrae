# Cross-device action-card workflow MVP
_Exported on 5/28/2026 at 12:18:40 GMT+8 from Cursor (3.5.38)_

---

**User**

You are my hackathon coding copilot.

Project name:
[INSERT ACTUAL HACKATHON PROJECT NAME]

Goal:
Build the thinnest believable MVP for a cross-device action-card workflow.

Concept:
A desktop workflow emits structured Action Cards such as DeployApproval, AgentRestart, and IncidentAck.
A Lynx-based mobile client displays those cards as tappable UI.
When the user taps an action, the response is sent back to the desktop flow.
The desktop UI then updates to show the action was received and the workflow continued.

Main demo requirement:
Desktop shows: “Hotfix deploy ready. Approve?”
Mobile shows the matching Action Card.
User taps Approve and may add a short note like “Ship it.”
Desktop updates to: “Deployment triggered via mobile approval.”

Hard constraints:
- Time limit: 4 hours total
- Working demo is more important than completeness
- Keep the mobile client thin
- Prefer mock transport or simulated local transport over fragile real integrations
- Avoid anything requiring external API approvals
- Avoid over-engineering
- Optimize for live demo reliability
- Every implementation choice must support a clear fallback path

Execution rules:
- First, restate the MVP scope in 5 bullets or fewer
- Then propose the exact files to create or edit
- Then implement only the smallest end-to-end slice first
- Do not start with refactors, abstractions, or polish
- Do not add features unless they improve demo reliability
- If a part is risky, propose a lower-risk alternative before coding
- Keep code simple and easy to patch under time pressure
- Prefer explicit mock data over hidden magic
- Keep state flow easy to inspect in the UI

Build order:
1. Desktop mock action-card generator
2. Shared action-card schema
3. Mobile card renderer
4. Approve/reject action handling
5. Desktop confirmation state
6. Optional note field
7. Optional QR/pairing or nicer transport only if core flow already works

Deliverables:
- A working desktop demo surface
- A working mobile demo surface
- One believable end-to-end approval flow
- One fallback mode if live transport fails

Output style:
- Be concise
- Show the current step
- Show the files being touched
- Explain tradeoffs briefly
- Stop after each meaningful milestone and confirm what works

Important:
Start by giving me:
1. MVP scope
2. file plan
3. step 1 implementation
Do not jump ahead.

---

**Cursor**

I have enough context to lay this out, but two implementation choices materially change the file plan and demo risk profile. Let me restate scope, sketch the file plan, then ask the two critical questions before locking the plan.

## MVP scope (5 bullets)

- Desktop surface shows a pending action ("Hotfix deploy ready. Approve?") and updates to a confirmed state when mobile responds.
- One shared `ActionCard` schema (`id`, `type`, `title`, `body`, `actions[]`, `status`, `note?`, `respondedBy?`).
- Mobile surface renders one queued card with Approve / Reject buttons + optional note field.
- Local relay transport (single tiny Node server) carries card → response in both directions; both surfaces poll/subscribe to the same in-memory store.
- One scripted demo path: emit DeployApproval → render on mobile → tap Approve with note → desktop flips to "Deployment triggered via mobile approval."

## Proposed file plan (tentative — depends on answers below)

- `relay-server/server.js` — tiny Express + WebSocket (or SSE) hub, in-memory `cards` map, two endpoints: emit card / respond to card.
- `shared/actionCard.js` — schema + factory (`makeCard`, `respondToCard`) shared by both surfaces.
- `desktop/index.html` + `desktop/app.js` — "Emit DeployApproval" button, live card status panel, fallback "Simulate mobile approval" button.
- `mobile/...` — either a Lynx project (Rspeedy scaffold) or a mobile-styled web page; renders pending cards, sends responses.
- `package.json` + `README.md` — one `npm run demo` to start everything.
- `scripts/seed-demo.js` — pre-loads the hotfix card so the demo is one click away.

## Tradeoffs I want you to decide before I plan further

The two highest-leverage choices that change everything downstream:

> **What should the mobile surface actually be? (Drives ~60% of the time budget.)**
> - Real Lynx via LynxExplorer app + QR (on-brand for Trae/Lynx hackathon, ~30-60min setup risk, needs phone on same Wi-Fi)
> - Lynx primary + mobile-styled web page fallback (safer; demo still works if LynxExplorer flakes)
> - Mobile-styled web page only (lowest risk, opens on phone browser, but no real Lynx story)

> **How should desktop and mobile actually talk to each other?**
> - LAN WebSocket server (real cross-device demo; needs same Wi-Fi; ~15min setup)
> - LAN WebSocket + same-machine localhost fallback button (recommended: real demo with a hard fallback if Wi-Fi/network fails on stage)
> - Same-machine only via localhost (two browser windows, no real cross-device, near-zero risk)

---

**User**

B — Lynx primary + mobile-styled web page fallback.

Reason:
It preserves the real Lynx story for the hackathon demo, but gives us a reliable fallback if LynxExplorer setup, pairing, or same-Wi‑Fi issues slow us down. That keeps the wow factor without betting the whole build on fragile setup.

Next step:
Prototype the Lynx surface first, then add a mobile web fallback that mirrors the same Action Card UI and accept flow.

---

**Cursor**

Good — Lynx primary + web fallback locked in. One transport question left, then I'll finalize the plan.

> **Transport between desktop and mobile? (I recommend mirroring your mobile choice: real primary + reliable fallback.)**
> - RECOMMENDED: LAN WebSocket (real cross-device) + same-machine localhost fallback button on desktop (works even with no network) ✔
> - LAN WebSocket only (real demo, but breaks if conference Wi-Fi blocks peer-to-peer)
> - Localhost only (two browser windows, zero network risk, but no real phone in the demo)

Locked. Drafting the plan now.

