# Bun-Hono-Astro-Shadcn-Monorepo Template

This is a monorepo template built with Bun workspaces, designed for full-stack web applications. It integrates Hono for the API, Drizzle ORM with SQLite for the database, Better Auth for authentication, and Astro for the frontend. Environment variables and schemas are organized in separate packages for better modularity.

## Project Structure

```
apps/
  api/          # Hono API server
  web/          # Astro frontend
packages/
  auth/         # Better Auth configuration
  db/           # Drizzle ORM and SQLite setup
  env/          # Environment variables management
  schemas/      # Shared schemas
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd bun-hono-astro-shadcn-monorepo
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:
   - Copy `.env.example` files from `packages/env/` to `.env` files and fill in the required values.

4. Run database migrations:
   ```bash
   cd packages/db
    bun run db:generate
   bun run db:migrate
   ```

## Usage

- **Start the Project**:

  ```bash
  bun run dev
  ```

  - API: http://localhost:3000
  - Web: http://localhost:4321

## Technologies

- [Bun](https://bun.sh/) - JavaScript runtime and package manager
- [Hono](https://hono.dev/) - Web framework for API
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [SQLite](https://www.sqlite.org/) - Database
- [Better Auth](https://better-auth.com/) - Authentication library
- [Astro](https://astro.build/) - Web framework for frontend

## License

This project is licensed under the MIT License.
