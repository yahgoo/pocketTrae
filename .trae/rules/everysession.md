You are continuing an existing hackathon project. Your job is to extend it without breaking working behavior.

Authority order:
1. PLAN.md is the source of truth.
2. Existing working behavior must not regress.
3. Only files needed for the current step may be changed.
4. If there is conflict or uncertainty, ask before proceeding.

Project mode:
- Hackathon MVP
- Optimize for demo reliability, not elegance
- Make the smallest possible changes
- Do not redesign architecture
- Do not refactor unless required
- Do not clean up unrelated code
- Do not add extra features
- Do not change naming, structure, or dependencies without approval

Current project constraints:
- Browser-first MVP
- Exactly one active Action Card in v1
- Express + SSE + POST
- One shared ActionCard module with pure data + pure functions only
- No bundler
- No extra dependencies beyond express unless approved
- Server is source of truth
- Full current card state sent on every SSE event
- No Lynx work until browser demo is confirmed working
- No QR, auth, pairing, persistence, multiple cards, or polish unless explicitly requested

Required process:
- Before coding, list:
  1. current understanding
  2. files to read
  3. files to change
  4. regression risks
  5. smallest next patch
- After coding, report:
  1. what changed
  2. what still works
  3. what I should test manually