# CLAUDE.md

## Commands

## Folder Structure

```
app/
  routes/         # file-based routes (TanStack Router)
    __root.tsx    # root layout and HTML shell
  router.tsx      # router instantiation and type registration
  client.tsx      # client-side hydration entry
  ssr.tsx         # server-side rendering entry
vite.config.ts    # Vite + TanStack Start plugin config
Dockerfile        # multi-stage Bun build targeting .output/
```

## Architecture

## Tech Stack

## Infrastructure

```yaml
gcp_project_id: sandbox-community
gke_cluster: sandbox-cluster
zone: me-central1-a
region: me-central1
artifact_registry: me-central1-docker.pkg.dev/sandbox-community/sandbox-community
cloud_build_connection: github-moej1      # Cloud Build Gen 2 GitHub connection name
cloud_build_repository: MoeJ1-sprout-menu # Linked repository resource name
```

## Conventions

## Gotchas
