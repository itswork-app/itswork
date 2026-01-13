# DELIVERY LAW

> **Product**: Cost Guard
> **Stage**: 0 (Governance & Setup)

## 1. Hierarchy of Truth
1. **Docs > Chat**: If instructions in chat conflict with `docs/DELIVERY_LAW.md` or `docs/ANTI_GRAVITY_LAW.md`, the docs WIN.
2. **Docs > Memory**: Do not rely on cross-session memory if it contradicts current docs.
3. **Docs > Assumptions**: Never guess. If undefined, stop and ask.

## 2. One PR, One Objective
- Every PR must have exactly **one** clear objective.
- No "while I'm here" fixes.
- No bundling unrelated refactors.
- Merge skew must be minimized (short-lived branches).

## 3. CI is Police
- If CI fails, the PR is **dead**.
- No merging on red.
- CI checks must be respected absolutely.

## 4. Forbidden Scope (Stage 0/1)
The following are **STRICTLY FORBIDDEN** until explicitly unlocked in `PRODUCT_EVOLUTION_ROADMAP.md`:
- [ ] Trust Guard related features
- [ ] VAV platform integration
- [ ] AIVO platformization
- [ ] Backend implementation (beyond simple functions if allowed in Stage 1)
- [ ] Database (SQL, NoSQL, etc.)
- [ ] Billing & Payments
- [ ] Complex Auth (beyond simple headers/tokens if allowed)
