# API server (Express + Prisma + Socket.IO) for AlfathPOS.
# Built from the repository root as the Docker build context:
#   docker build -f artifacts/api-server/Dockerfile .
FROM node:20-bookworm-slim

# Prisma needs openssl at runtime.
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Use the same pnpm version as the workspace.
RUN corepack enable && corepack prepare pnpm@10.26.1 --activate

WORKDIR /app

# Copy the whole monorepo (node_modules are excluded via .dockerignore) and install.
COPY . .
RUN pnpm install --frozen-lockfile

# Bundle the server and generate the Prisma client.
RUN pnpm --filter @workspace/api-server run build \
  && pnpm --filter @workspace/api-server exec prisma generate

RUN chmod +x /app/artifacts/api-server/docker-entrypoint.sh

EXPOSE 8080
ENTRYPOINT ["/app/artifacts/api-server/docker-entrypoint.sh"]
