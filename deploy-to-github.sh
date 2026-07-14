#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/sastutigupta/sastutigupta.github.io.git"
REPO_API="repos/sastutigupta/sastutigupta.github.io/pages"

echo "1/5 Installing dependencies..."
npm install

echo "2/5 Building and verifying the production website..."
npm run deploy:check

echo "3/5 Preparing Git repository..."
if [ ! -d .git ]; then
  git init
fi
git branch -M main
if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

echo "4/5 Setting GitHub Pages to GitHub Actions mode..."
if command -v gh >/dev/null 2>&1; then
  gh api --method PUT "$REPO_API" -f build_type=workflow >/dev/null || \
    echo "Could not change Pages mode automatically. Open Settings > Pages and choose GitHub Actions."
else
  echo "GitHub CLI not found. Open Settings > Pages and choose GitHub Actions after the push."
fi

echo "5/5 Committing and pushing the corrected project..."
git fetch origin main || true
git add .
if ! git diff --cached --quiet; then
  git commit -m "Fix GitHub Pages production deployment"
else
  echo "No new file changes to commit."
fi
git push -u origin main --force-with-lease

echo
echo "Push complete. Follow the deployment in the repository Actions tab."
echo "Live URL: https://sastutigupta.github.io/?v=2"
