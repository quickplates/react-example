# Use generic base image with Nix installed
FROM nixos/nix:2.16.1 AS base-env

# Configure Nix
RUN echo "extra-experimental-features = nix-command flakes" >> /etc/nix/nix.conf

# Set working directory to something other than root
WORKDIR /env/

# Copy Nix files
COPY *.nix flake.lock ./

# Copy env script
COPY ./scripts/env.sh ./scripts/env.sh

FROM base-env AS build-env

# Build build shell closure and activation script
RUN \
    # Mount cached store paths
    --mount=type=cache,target=/nix-store-cache \
    # Mount Nix evaluation cache
    --mount=type=cache,target=/root/.cache/nix \
    ./scripts/env.sh build ./build /nix-store-cache

FROM base-env AS runtime-env

# Build runtime shell closure and activation script
RUN \
    # Mount cached store paths
    --mount=type=cache,target=/nix-store-cache \
    # Mount Nix evaluation cache
    --mount=type=cache,target=/root/.cache/nix \
    ./scripts/env.sh runtime ./build /nix-store-cache

# Ubuntu is probably the safest choice for a runtime container right now
FROM ubuntu:23.04 as build

# Use bash as default shell
SHELL ["/bin/bash", "-c"]

# Copy build shell closure and activation script
COPY --from=build-env /env/build/closure/ /nix/store/
COPY --from=build-env /env/build/activate /env/activate

# Set working directory to something other than root
WORKDIR /build/

# Setup entrypoint for RUN commands
COPY ./scripts/shell.sh ./scripts/shell.sh
SHELL ["./scripts/shell.sh"]

# Copy root package files
COPY package.json pnpm-lock.yaml .npmrc ./

# Install root dependencies
RUN pnpm install --frozen-lockfile

# Copy everything else
COPY . .

# Build
RUN pnpm run build

# Ubuntu is probably the safest choice
FROM ubuntu:23.04 AS runtime

# Use bash as default shell
SHELL ["/bin/bash", "-c"]

# Copy runtime shell closure and activation script
COPY --from=runtime-env /env/build/closure/ /nix/store/
COPY --from=runtime-env /env/build/activate /env/activate

# Set working directory to something other than root
WORKDIR /app/

# Setup entrypoint for RUN commands
COPY ./scripts/shell.sh ./scripts/shell.sh
SHELL ["./scripts/shell.sh"]

# Create app user
RUN useradd --create-home app

# Copy static files from build
COPY --from=build /build/build/ ./build/

# Setup main entrypoint
COPY ./scripts/entrypoint.sh ./scripts/entrypoint.sh
ENTRYPOINT ["./scripts/entrypoint.sh", "caddy", "file-server", "--root", "build", "--listen", ":5173", "--access-log"]
CMD []
