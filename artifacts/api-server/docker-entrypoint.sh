#!/bin/sh
set -e

cd /app/artifacts/api-server

echo "[entrypoint] Applying database schema (creates tables automatically if missing)..."
pnpm exec prisma db push --skip-generate

echo "[entrypoint] Starting API server..."
exec node --enable-source-maps dist/index.mjs
