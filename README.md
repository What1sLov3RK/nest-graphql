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

### Current structure (as implemented)
```text
src/
  owners/
    dto/
      createOwner.input.ts
    entity/
      owner.entity.ts
    owners.module.ts
    owners.resolver.ts
    owners.service.ts
    owners.resolver.spec.ts
    owners.service.spec.ts

  pets/
    dto/
      createPetDto.ts
    pet.entity.ts
    pets.module.ts
    pets.resolver.ts
    pets.service.ts
    pets.resolver.spec.ts
    pets.service.spec.ts

  app.module.ts
  main.ts
  schema.gql

test/
  app.e2e-spec.ts

.env.example
```

## Requirements
- Node.js (LTS recommended)
- PostgreSQL running locally (or on any host you control)

---

## Setup

### 1) Install dependencies
```bash
npm install
```
### 2) Configure environment variables

Create .env based on .env.example:
```bash
cp .env.example .env
```

##Example .env.example (adjust names to match your actual config):
```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=nest_graphql_practice
```
### 3) Create database

Create a Postgres database with the same name as DB_NAME:
```sql
CREATE DATABASE nest_graphql_practice;
```

### Run
Development
```bash
npm run start:dev
```

The API will be available at:

GraphQL endpoint: http://localhost:3000/graphql

If GraphQL Playground is enabled in your config, open the same URL in browser.

Production build
```bash
npm run build
npm run start:prod
```
### Example GraphQL Operations

Create Owner
```graphql
mutation CreateOwner {
  createOwner(createOwnerDto: { name: "Alice" }) {
    id
    name
  }
}
```

Create Pet (linked to owner)
```graphql
mutation CreatePet {
  createPet(createPetDto: { name: "Rex", ownerId: 1 }) {
    id
    name
    ownerId
  }
}
```

Get all pets
```graphql
query Pets {
  pets {
    id
    name
    ownerId
  }
}
```

Get pets of a specific owner
```graphql
query PetsOfOwner {
  getAllPetsOfOwner(ownerId: 1) {
    id
    name
    ownerId
  }
}
```

Resolve related Owner for a Pet (field resolver)
```graphql
query PetsWithOwner {
  pets {
    id
    name
    owner {
      id
      name
    }
  }
}
```
