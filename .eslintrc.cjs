module.exports = {
  env: {
    // Set ES2022 environment
    es2022: true,

    // Running in a browser environment
    browser: true,
  },

  extends: [
    // Use recommended rules from ESLint
    "eslint:recommended",

    // Use recommended rules for TypeScript
    "plugin:@typescript-eslint/recommended",

    // Use recommended rules for React
    "plugin:react/recommended",

    // Use recommended rules for React Hooks
    "plugin:react-hooks/recommended",

    // Turn off rules that might conflict with Prettier
    "prettier",
  ],

  // Don't ignore config files
  ignorePatterns: ["!.*"],

  overrides: [
    // Use Node.js environment for CommonJS files
    {
      files: ["**/*.cjs"],
      env: {
        node: true,
      },
    },
  ],

  // Use TypeScript parser
  parser: "@typescript-eslint/parser",

  parserOptions: {
    // Allow ES2022 syntax
    sourceType: "module",
  },

  plugins: [
    // Use TypeScript plugin
    "@typescript-eslint",

    // Use React plugin
    "react",

    // Use React Hooks plugin
    "react-hooks",

    // Use React refresh plugin
    "react-refresh",
  ],

  rules: {
    // Allow empty destructuring patterns
    "no-empty-pattern": "off",

    // Disable rule that requires React to be in scope
    "react/react-in-jsx-scope": "off",
  },
};
