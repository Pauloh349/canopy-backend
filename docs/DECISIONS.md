# CANOPY — Technical Decision Log

This document records important technical decisions made during the development of CANOPY and the reasoning behind them.

---

## DEC-001 — Backend runtime

**Status:** Accepted

**Decision:** Node.js

**Context:** CANOPY requires a backend capable of handling API requests, user authentication, resource management, uploads and third-party integrations.

**Reasoning:** Node.js allows us to build an asynchronous backend using JavaScript/TypeScript and a large ecosystem of server-side packages.

---

## DEC-002 — Programming language

**Status:** Accepted

**Decision:** TypeScript

**Context:** As the backend grows, managing data structures and application logic in plain JavaScript can become harder.

**Reasoning:** TypeScript provides static type checking, improved tooling and clearer contracts between modules.

---

## DEC-003 — Database

**Status:** Accepted

**Decision:** PostgreSQL

**Context:** CANOPY requires structured relationships between users, resources, categories, collections and permissions.

**Reasoning:** PostgreSQL provides relational integrity, transactions, indexing and flexible querying.

---

## DEC-004 — API architecture

**Status:** Accepted

**Decision:** Versioned REST API.

**Context:** CANOPY is intended to support its own frontend as well as external applications.

**Reasoning:** REST provides a predictable interface for multiple consumers and allows API versions to evolve independently.

---

## Future decisions

Additional decisions will be recorded below using sequential identifiers.

---

*Last updated: November 23, 2026*
