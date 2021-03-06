const ERROR = 2;
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports,
    project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
    // allowAutomaticSingleRunInference: true,
    tsconfigRootDir: __dirname,
    // warnOnUnsupportedTypeScriptVersion: false,
    // EXPERIMENTAL_useSourceOfProjectReferenceRedirect: false,
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  // plugins vs extends: https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint
  plugins: ["jest"],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier", // override other formatting configs to avoid conflicts.
    "plugin:prettier/recommended",
  ],
  rules: {
    semi: [ERROR, "always"],
  },
  overrides: [
    {
      // TypeScript specific configurations
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      ],
    },
    // all test files
    {
      files: ["**/__tests__/**/*.{js,ts,tsx}", "**/*.@(spec|test).{js,ts,tsx}"],
      env: {
        "jest/globals": true,
      },
      extends: ["plugin:jest/recommended"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "jest/expect-expect": "off",
        "jest/prefer-strict-equal": "off",
        "no-use-before-define": "off",

        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-alias-methods": "error",
        "jest/no-identical-title": "error",
        "jest/no-jasmine-globals": "error",
        "jest/no-jest-import": "error",
        "jest/no-test-prefixes": "error",
        "jest/no-done-callback": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-to-be-null": "warn",
        "jest/prefer-to-be-undefined": "warn",
        "jest/prefer-to-contain": "warn",
        "jest/prefer-to-have-length": "warn",
        "jest/prefer-spy-on": "error",
        "jest/valid-expect": "error",
        "jest/no-deprecated-functions": "error",
        "jest/prefer-todo": "error",
        "jest/valid-title": "error",
      },
    },
  ],
};
