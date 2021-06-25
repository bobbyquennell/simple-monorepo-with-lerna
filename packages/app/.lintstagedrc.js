module.exports = {
  '**/*.{js?(x),ts?(x)}': () => 'npm run lint:fix',
  '**/*.ts?(x)': () => 'npm run ts-check', // add ts error check in lint-staged: https://stackoverflow.com/questions/60514929/eslint-not-reporting-typescript-compiler-type-checking-errors
  //'**/*.{js?(x),ts?(x)}': () => 'npm run lint:fix && npm run ts-check',
  // "*.{scss,css,md,html}": "prettier --write",
}
