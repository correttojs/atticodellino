module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.prettierrc.js"], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "plugin:jest/recommended",
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Prettier recommended rules
  ],
  plugins: ["prettier"],
  parser: "@typescript-eslint/parser",
  settings: { react: { version: "detect" } },
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    // We will use TypeScript's types for component props instead
    "react/prop-types": "off",
    // No need to import React when using Next.js
    "react/react-in-jsx-scope": "off",
    // This rule is not compatible with Next.js's <Link /> components
    "jsx-a11y/anchor-is-valid": "off",
    // Why would you want unused vars?
    "@typescript-eslint/no-unused-vars": ["error"],
    // I suggest this setting for requiring return types on functions only where useful
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    camelcase: "off",
  },
};
