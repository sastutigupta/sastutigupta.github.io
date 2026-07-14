import { existsSync, readFileSync } from 'node:fs';

const required = ['dist/index.html', 'dist/assets'];
for (const item of required) {
  if (!existsSync(item)) {
    console.error(`Missing production output: ${item}`);
    process.exit(1);
  }
}

const html = readFileSync('dist/index.html', 'utf8');
if (html.includes('/src/main.jsx')) {
  console.error('Invalid deployment: dist/index.html still points to source JSX.');
  process.exit(1);
}
if (!html.includes('/assets/')) {
  console.error('Invalid deployment: compiled asset links were not found.');
  process.exit(1);
}

console.log('GitHub Pages production build is valid.');
