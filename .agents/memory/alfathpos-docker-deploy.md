---
name: AlfathPOS Docker local-server deployment
description: How the docker-compose self-host setup is wired and the non-obvious choices behind it.
---

# AlfathPOS Docker Compose (local server self-host)

Setup lets the owner `git clone` + `docker compose up -d --build` on a local server. Three services: `db` (postgres:16-alpine + `pgdata` volume + healthcheck), `api`, `web` (nginx).

## Non-obvious decisions

- **API image is single-stage and keeps the WHOLE monorepo + node_modules intact.**
  **Why:** pnpm uses symlinks into a virtual store (`node_modules/.pnpm`). esbuild externalizes `@prisma/client`, so `dist/index.mjs` must resolve it at runtime via the api package's symlinked `node_modules`. Copying only `dist` into a slim runtime stage would break Prisma resolution. Multi-stage `pnpm deploy` flattening is more fragile and was avoided since Docker can't be tested in the Replit env.
  **How to apply:** keep `COPY . .` + `pnpm install` in the same image you run from; don't "optimize" into a copy-only runtime stage without testing Prisma resolution.

- **Tables are created automatically via `prisma db push --skip-generate` in the entrypoint**, not migrations.
  **Why:** owner wants a zero-step local install; there are no committed Prisma migrations. `db push` makes the empty DB match `schema.prisma` on first boot; app startup seed then creates default users/branch.
  **How to apply:** for production schema evolution, switch to committed migrations + `prisma migrate deploy` to avoid destructive drift. For local single-tenant installs, `db push` is acceptable.

- **Web is nginx serving the Vite static build + proxying `/api` and `/socket.io` to `api:8080`.**
  **Why:** frontend uses same-origin `BASE_URL='/api'` and `io({auth:{token}})` (default path `/socket.io`). nginx must preserve those paths (`proxy_pass http://api:8080;` with NO path segment) and send WebSocket upgrade headers on `/socket.io/`.
  **How to apply:** frontend must be built with `BASE_PATH=/` (vite.config requires `BASE_PATH` and `PORT` envs even at build time) so assets are root-relative.

- **Data does not migrate into Docker.** Fresh install = empty DB + seed only. Carry data over with a manual Postgres dump/restore.
