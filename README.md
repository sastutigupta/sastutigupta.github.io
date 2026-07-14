# Stuti Gupta — People & Operations Portfolio

React + Vite portfolio configured for the root GitHub Pages user site:

- Repository: `sastutigupta/sastutigupta.github.io`
- Live URL: `https://sastutigupta.github.io/`
- Deployment source: **GitHub Actions**
- Published folder: **only `dist/`**

## Local development

```bash
npm install
npm run dev
```

## Production check

```bash
npm run deploy:check
```

## One-command deployment

Make sure GitHub CLI is logged in as `sastutigupta`, then run:

```bash
./deploy-to-github.sh
```

The workflow builds the Vite source and uploads only the compiled `dist` directory. The root source `index.html` must never be published directly because it references `/src/main.jsx` and browsers cannot run JSX source without Vite.
