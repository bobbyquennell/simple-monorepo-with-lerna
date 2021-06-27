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
  plugins: [],
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
  ],
};
