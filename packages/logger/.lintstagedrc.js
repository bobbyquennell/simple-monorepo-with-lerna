module.exports = {
  '**/*.{js?(x),ts?(x)}': () => 'eslint',
  '**/*.{ts?(x)}': () => 'tsc -p tsconfig.json --noEmit',
  //'**/*.{js?(x),ts?(x)}': () => 'npm run lint:fix && npm run ts-check',
  // "*.{scss,css,md,html}": "prettier --write",
}
