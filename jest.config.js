module.exports = {
  preset: "ts-jest",
  // roots:['packages/', 'shared/'],
  // globals: {
  //   'ts-jest': {
  //     isolatedModules:true,
  //   },
  // },
  testEnvironment: "node",
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  // testRegex: "/src/.*\\.test\\.(ts|tsx|js)$",
  collectCoverage: true,
  collectCoverageFrom: ["packages/*/src/**/*.{js,jsx,ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
