---
description: Explains and runs the initial GKE workload deployment script for sprout-menu
---

## What it does

`infrastructure/scripts/deploy-workload.sh` creates the Kubernetes Deployment and Service for `sprout-menu` in GKE. It is a **one-time bootstrap script** — it checks if the deployment already exists and does nothing if it does, so it is safe to run multiple times.

After the initial deploy, Cloud Build's `kubectl set image` step takes over for all future deploys on push to `main`.

## Prerequisites

- `kubectl` configured against `sandbox-cluster` in zone `me-central1-a`
- `gcloud container clusters get-credentials sandbox-cluster --zone=me-central1-a --project=sandbox-community`

## Usage

```bash
# Default (deployment: sprout-menu, namespace: default)
./infrastructure/scripts/deploy-workload.sh

# Custom deployment name or namespace
./infrastructure/scripts/deploy-workload.sh <deployment-name> <namespace>
```
