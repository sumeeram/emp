import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "off", // Warn against using `any`
      "@typescript-eslint/explicit-module-boundary-types": "off", // Disable requiring return types on functions
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused variables prefixed with `_`

      // General JavaScript/TypeScript rules
      "no-console": "off", // Warn when using console.log
      "no-debugger": "error", // Disallow debugger statements
    },
  }
);
