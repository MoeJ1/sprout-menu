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
Dockerfile        # multi-stage Bun build targeting dist/
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
cloud_build_connection: github-moej1     
cloud_build_repository: MoeJ1-sprout-menu
cloud_build_trigger: deploy-main
gke_deployment: sprout-menu
k8s_namespace: default
```


## Conventions

## Gotchas
