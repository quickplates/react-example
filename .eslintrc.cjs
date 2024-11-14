module.exports = {
  env: {
    // Support browser globals
    browser: true,

    // Set ES2022 environment
    es2022: true,

    // Support node globals
    node: true,
  },

  extends: [
    // Use recommended eslint rules
    "eslint:recommended",

    // Use recommended typescript-eslint rules
    "plugin:@typescript-eslint/recommended",

    // Use stylistic typescript-eslint rules
    "plugin:@typescript-eslint/stylistic",

    // Use recommended React rules
    "plugin:react/recommended",

    // Use recommended Lingui rules
    "plugin:lingui/recommended",

    // Use recommended perfectionist rules
    "plugin:perfectionist/recommended-alphabetical-legacy",

    // Turn off rules that might conflict with Prettier
    "prettier",
  ],

  // Use typescript-eslint parser
  parser: "@typescript-eslint/parser",

  parserOptions: {
    // Allow ES2022 syntax
    sourceType: "module",
  },

  plugins: [
    // Use @typescript-eslint plugin
    "@typescript-eslint",

    // Use perfectionist plugin
    "perfectionist",
  ],

  // Ignore configuration files in directories above this one
  root: true,

  rules: {
    // Use objects instead of records for empty types
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature",
    ],

    // Use types instead of interfaces
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],

    // Allow anonymous default exports
    "import/no-anonymous-default-export": "off",

    // Allow empty block statements
    "no-empty": "off",

    // Allow empty destructuring patterns
    "no-empty-pattern": "off",

    // Disable rule that requires React to be in scope
    "react/react-in-jsx-scope": "off",
  },
};
