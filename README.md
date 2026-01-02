# NestJS GraphQL CRUD (Owner ↔ Pets) — PostgreSQL + TypeORM

Practice project: **GraphQL API (code-first)** built with **NestJS**, **TypeORM**, and **PostgreSQL**.  
Implements basic **CRUD** for `Owner` and `Pet` entities with **one-to-many relation** (Owner has many Pets) and a field resolver to fetch related data.

## Tech Stack
- **NestJS** (TypeScript)
- **GraphQL** (code-first, schema auto-generated to `schema.gql`)
- **TypeORM**
- **PostgreSQL**
- **Jest** (default test scaffolding from Nest)

---

## Features
- GraphQL queries & mutations for CRUD
- **Entities + relations**: `Owner (1) → (N) Pets`
- **DTOs** for input types
- **Field resolver** to resolve related data (e.g., `pet.owner`)

> Note: This project is intentionally simple and focuses on GraphQL + relations practice.

---

## Project Structure
