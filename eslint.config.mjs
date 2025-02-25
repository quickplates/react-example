import eslint from "@eslint/js";
import linguieslint from "eslint-plugin-lingui";
import perfectionisteslint from "eslint-plugin-perfectionist";
import reacteslint from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Use recommended eslint rules
  eslint.configs.recommended,

  // Use recommended type-checked typescript-eslint rules
  tseslint.configs.strictTypeChecked,

  // Use stylistic type-checked typescript-eslint rules
  tseslint.configs.stylisticTypeChecked,

  // Use recommended React rules
  reacteslint.configs.flat.recommended,

  // Make React rules compatible with JSX
  reacteslint.configs.flat["jsx-runtime"],

  // Use recommended Lingui rules
  linguieslint.configs["flat/recommended"],

  // Use recommended perfectionist rules
  perfectionisteslint.configs["recommended-alphabetical"],

  // Custom configuration
  {
    languageOptions: {
      globals: {
        // Support browser globals
        ...globals.browser,

        // Support ES2023 globals
        ...globals.es2023,

        // Support node globals
        ...globals.node,
      },

      parserOptions: {
        // Use project service to build type information
        // Needed for type-aware linting
        projectService: true,

        // Allow ES2022 syntax
        sourceType: "module",

        // Set the root directory of the project
        // Needed for type-aware linting
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      // Use objects instead of records for empty types
      "@typescript-eslint/consistent-indexed-object-style": [
        "error",
        "index-signature",
      ],

      // Use types instead of interfaces
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      // Allow promises in callbacks
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],

      // Allow non-null assertions
      "@typescript-eslint/no-non-null-assertion": "off",

      // Allow async functions without await
      "@typescript-eslint/require-await": "off",

      // Allow anonymous default exports
      "import/no-anonymous-default-export": "off",

      // Allow empty block statements
      "no-empty": "off",

      // Allow empty destructuring patterns
      "no-empty-pattern": "off",
    },
  },

  // Disable type-aware linting for files outside of the project
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*"],
    ignores: ["src/**/*"],
  },
);
