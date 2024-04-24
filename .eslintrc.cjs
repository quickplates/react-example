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

    // Use recommended React rules
    "plugin:react/recommended",

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
    // Support typescript-eslint
    "@typescript-eslint",
  ],

  // Ignore configuration files in directories above this one
  root: true,

  rules: {
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
