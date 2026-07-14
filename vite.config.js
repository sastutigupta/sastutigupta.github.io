import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function githubPagesFiles() {
  return {
    name: 'github-pages-files',
    closeBundle() {
      const distIndex = resolve('dist/index.html');
      if (existsSync(distIndex)) {
        copyFileSync(distIndex, resolve('dist/404.html'));
        writeFileSync(resolve('dist/.nojekyll'), '');
      }
    },
  };
}

export default defineConfig({
  // This repository is the root user site: https://sastutigupta.github.io/
  base: '/',
  plugins: [react(), githubPagesFiles()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
