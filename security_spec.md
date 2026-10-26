# Security Specification & Threat Model

## 1. Data Invariants
- Leads can be created by prospective clients (either anonymous or signed in) to request consultation, but once created, only an authorized advisor (`pitendrakumarsahoo52@gmail.com`) or the original submitting user can view their submitted lead.
- User profile documents in `/users/{userId}` can only be read and written by the authentic owner (`request.auth.uid == userId`). Users cannot escalate their own role to 'advisor'.
- Saved quotes in `/saved_quotes/{quoteId}` can only be read, created, or deleted by the user who owns them (`request.auth.uid == resource.data.userId`).
- Immutable fields (`createdAt`, `userId`, `id`) cannot be modified after initial creation.

## 2. The Dirty Dozen Test Payloads
1. **Unauthorized Lead Snooping**: An arbitrary authenticated user attempts to `get` or `list` all leads belonging to other families. Result: `PERMISSION_DENIED`.
2. **Ghost Field Injection in Lead**: Submitting an inquiry with injected privileged flags like `isAdmin: true` or `status: "approved_free"`. Result: `PERMISSION_DENIED`.
3. **Impersonated Lead Submission**: Sending a lead with an existing `userId` of another person while signed in as someone else. Result: `PERMISSION_DENIED`.
4. **Denial of Wallet Long String**: Sending a 500KB text payload into `phone` or `name` to cause excessive storage. Result: `PERMISSION_DENIED` (enforced with `.size() <= 100`).
5. **Self Role Escalation**: User updating `/users/{uid}` to change `role: "client"` to `role: "advisor"`. Result: `PERMISSION_DENIED`.
6. **Cross-Tenant Saved Quote Read**: User B reading User A's `/saved_quotes/{quoteId}` containing retirement savings numbers. Result: `PERMISSION_DENIED`.
7. **Arbitrary Saved Quote Deletion**: User B issuing a delete request against User A's saved quote. Result: `PERMISSION_DENIED`.
8. **Malicious ID Path Traversal**: Requesting document with malformed key containing special characters or excessive length. Result: `PERMISSION_DENIED`.
9. **Unauthenticated Profile Access**: Non-signed in user attempting to read `/users/{userId}`. Result: `PERMISSION_DENIED`.
10. **Terminal State Mutation**: Changing a completed lead back or tampering with historical inquiries. Result: `PERMISSION_DENIED`.
11. **Timestamp Falsification**: Client providing backdated `createdAt` timestamp instead of `request.time`. Result: `PERMISSION_DENIED`.
12. **Blanket Query Scraping**: Malicious client running an unconstrained `collection('leads')` query without where clause. Result: `PERMISSION_DENIED`.
