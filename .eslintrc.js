module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    // This rule ignores unused variables starting with an underscore
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
};