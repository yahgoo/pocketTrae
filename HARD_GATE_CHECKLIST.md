# Hard Gate Verification Checklist

> Follow this checklist exactly to verify all 4 hard-gate checks pass before proceeding to Step 8 (Lynx).

## Prerequisites

- [ ] Server is running: `npm start` (verify http://localhost:3000 responds)
- [ ] Laptop and phone are on the same Wi-Fi network
- [ ] Know your laptop's LAN IP address (run `ifconfig` or `ipconfig`)

---

## Check 1: Browser Desktop Works

**URL:** http://localhost:3000/desktop/

### 1.1 Emit Button Works
- [ ] Click **"Emit DeployApproval"** button
- **Expected:** Card appears with:
  - Title: "Hotfix deploy ready. Approve?"
  - Status badge: "pending" (yellow)
  - Body text about v2.4.1
- **Result:** __________

### 1.2 Status Panel Updates
- [ ] Verify status line shows: "Hotfix deploy ready. Approve?"
- [ ] Verify connection shows: "Live — connected to relay via SSE"
- **Result:** __________

### 1.3 Reset Demo Button Works
- [ ] Click **"Reset demo"** button
- **Expected:** Card resets to fresh pending DeployApproval
- **Result:** __________

### 1.4 Local Fallback Button Works
- [ ] Click **"Emit DeployApproval"** to get a pending card
- [ ] Click **"Simulate mobile approval (local)"** button
- **Expected:**
  - Card status changes to "approved" (green)
  - Status line shows: "Deployment triggered via mobile approval."
  - Note shows: "Note: "Simulated mobile approval (offline)""
  - Connection shows: "Local fallback — server not contacted"
- **Result:** __________

**Check 1 Status:** ☐ PASS ☐ FAIL

---

## Check 2: Browser Mobile Works on Actual Phone Over LAN

**Prerequisite:** Find your laptop's LAN IP (e.g., 192.168.1.100)

**URL:** http://`<LAPTOP-LAN-IP>`:3000/mobile/

Example: http://192.168.1.100:3000/mobile/

### 2.1 Phone Can Open Mobile Page
- [ ] Open URL on phone browser (Chrome/Safari)
- **Expected:** Page loads with dark theme, shows "Waiting for an action card from desktop…"
- **Result:** __________

### 2.2 Card Renders Correctly
- [ ] On desktop, click **"Emit DeployApproval"**
- [ ] Check phone screen
- **Expected on phone:**
  - Card appears with type "DeployApproval"
  - Title: "Hotfix deploy ready. Approve?"
  - Body text about v2.4.1
  - Status badge: "pending" (yellow)
  - "Optional note" label
  - Textarea placeholder: "Ship it."
  - Two buttons: "Reject" (gray) and "Approve" (green)
- **Result:** __________

### 2.3 Approve/Reject Buttons Work
- [ ] Type note in textarea: "Ship it!"
- [ ] Click **"Approve"** button
- **Expected:**
  - Card updates to "Approved: "Ship it!""
  - Shows "by mobile-web"
- **Result:** __________

### 2.4 Note Textarea Works
- [ ] Reset and emit new card
- [ ] Leave note textarea empty
- [ ] Click **"Reject"**
- **Expected:** Card shows "Rejected" without note
- **Result:** __________

**Check 2 Status:** ☐ PASS ☐ FAIL

---

## Check 3: Approve Flow Works End-to-End

### 3.1 Desktop Emit
- [ ] Open desktop: http://localhost:3000/desktop/
- [ ] Click **"Emit DeployApproval"**
- **Expected:** Card appears on desktop with status "pending"
- **Result:** __________

### 3.2 Phone Renders Card
- [ ] Open mobile on phone: http://`<LAPTOP-LAN-IP>`:3000/mobile/
- **Expected:** Same card appears on phone
- **Result:** __________

### 3.3 Phone Approves with Note "Ship it"
- [ ] On phone, type in note textarea: "Ship it"
- [ ] Click **"Approve"** button
- **Expected on phone:** Shows "Approved: "Ship it""
- **Result:** __________

### 3.4 Desktop Updates to "Deployment triggered via mobile approval."
- [ ] Check desktop within 2 seconds
- **Expected on desktop:**
  - Status badge: "approved" (green)
  - Status line: **"Deployment triggered via mobile approval."** (exact text)
  - Note visible: "Note: "Ship it""
  - Responded by: "Responded by mobile-web at <time>"
- **Result:** __________

### 3.5 Note is Visible on Desktop
- [ ] Verify note is displayed on desktop card
- **Expected:** "Note: "Ship it"" visible in the panel
- **Result:** __________

**Check 3 Status:** ☐ PASS ☐ FAIL

---

## Check 4: Fallback Button Works with Network Disabled

### 4.1 Disable Wi-Fi/Network
- [ ] On laptop, turn off Wi-Fi or disconnect network
- [ ] Verify desktop shows "SSE disconnected" or similar
- **Result:** __________

### 4.2 Local Fallback Still Works
- [ ] Click **"Emit DeployApproval"** (this may fail - that's OK)
- [ ] If no card, manually check if you can still test fallback
- [ ] Click **"Simulate mobile approval (local)"** button
- **Expected:**
  - Desktop updates to "approved" state
  - Status line: "Deployment triggered via mobile approval."
  - Connection shows: "Local fallback — server not contacted"
  - No server/SSE dependency needed
- **Result:** __________

### 4.3 No Server/SSE Dependency Needed
- [ ] Verify fallback works entirely locally
- [ ] Check console logs show "Fallback: Local approval rendered"
- **Expected:** Pure client-side operation using `respondToCard` from shared module
- **Result:** __________

**Check 4 Status:** ☐ PASS ☐ FAIL

---

## Final Pass/Fail Summary

| Check | Description | Status |
|-------|-------------|--------|
| 1 | Browser desktop works | ☐ PASS ☐ FAIL |
| 2 | Browser mobile works on phone over LAN | ☐ PASS ☐ FAIL |
| 3 | Approve flow works end-to-end | ☐ PASS ☐ FAIL |
| 4 | Fallback button works with network disabled | ☐ PASS ☐ FAIL |

**Overall Hard Gate Status:** ☐ ALL PASS ☐ SOME FAIL

If any check fails, do NOT proceed to Step 8 (Lynx). Fix the issues first.

---

## If a Hard-Gate Check Fails: First File to Inspect

Map each failure to the first file to inspect:

| Check | Failure Symptom | First File to Inspect |
|-------|-----------------|----------------------|
| 1 | Emit button doesn't work | `desktop/index.html` - check `emitBtn` event listener |
| 1 | Status panel not updating | `desktop/index.html` - check `render()` function |
| 1 | Reset button doesn't work | `desktop/index.html` - check `resetBtn` event listener |
| 1 | Fallback button doesn't work | `desktop/index.html` - check `fallbackBtn` event listener |
| 2 | Phone can't load mobile page | `server/server.js` - check static file serving for `/mobile/` |
| 2 | Card doesn't render on phone | `mobile/index.html` - check `render()` function |
| 2 | Approve/Reject buttons don't work | `mobile/index.html` - check `respond()` function |
| 2 | Note textarea doesn't work | `mobile/index.html` - check `noteInput` element |
| 3 | Desktop doesn't update after phone approve | `server/server.js` - check `broadcastCard()` and SSE `/events` |
| 3 | Wrong status line text | `shared/actionCard.js` - check `getDesktopStatusLine()` function |
| 3 | Note not visible on desktop | `desktop/index.html` - check `noteBlock` rendering in `render()` |
| 4 | Fallback button doesn't work offline | `desktop/index.html` - check `fallbackBtn` uses pure `respondToCard` |
| 4 | Fallback requires network | `desktop/index.html` - ensure fallback doesn't call `fetch` |

**General debugging order:**
1. Check browser console for JavaScript errors
2. Check Network tab to see if requests are being made
3. Verify server is running and responding
4. Check that `shared/actionCard.js` exports are correct
5. Verify SSE connection is established

**Quick diagnostic commands:**
```bash
# Test server is running
curl http://localhost:3000/state

# Test reset endpoint
curl -X POST http://localhost:3000/reset

# Test respond with note
curl -X POST http://localhost:3000/respond \
  -H "Content-Type: application/json" \
  -d '{"actionId":"approve","note":"Test","respondedBy":"test"}'
```
