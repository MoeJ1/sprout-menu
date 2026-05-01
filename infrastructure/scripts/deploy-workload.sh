#!/bin/bash
set -e

DEPLOYMENT=${1:-sprout-menu}
NAMESPACE=${2:-default}
MANIFESTS_DIR="$(dirname "$0")/../../k8s"

if kubectl get deployment "$DEPLOYMENT" --namespace="$NAMESPACE" &>/dev/null; then
  echo "Deployment '$DEPLOYMENT' already exists in namespace '$NAMESPACE'. Skipping."
  exit 0
fi

echo "Creating deployment '$DEPLOYMENT' in namespace '$NAMESPACE'..."
kubectl apply -f "$MANIFESTS_DIR"
echo "Done."
