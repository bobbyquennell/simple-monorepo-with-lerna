module.exports = {
  '**/*.{js?(x),ts?(x)}': () => 'npm run lint:fix',
  '**/*.ts?(x)': () => 'npm run ts-check',
  //'**/*.{js?(x),ts?(x)}': () => 'npm run lint:fix && npm run ts-check',
  // "*.{scss,css,md,html}": "prettier --write",
}
