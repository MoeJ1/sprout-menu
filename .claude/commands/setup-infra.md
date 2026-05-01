Ask the user for the following GCP infrastructure details one by one:

1. **GCP Project ID** — the project where all resources live (e.g. `my-project-123`)
2. **GKE Cluster name** — the name of the Kubernetes cluster (e.g. `sprouts-cluster`)
3. **Region** — the GCP region the cluster is in (e.g. `us-central1`)
4. **Artifact Registry repo** — the full repo path for Docker images (e.g. `us-central1-docker.pkg.dev/my-project-123/sprouts`)

Once you have all four, add an `## Infrastructure` section to CLAUDE.md with each value and a one-line explanation of what it's used for. Place the section after `## Tech Stack`.
