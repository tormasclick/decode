module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^Image$",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "no-unused-vars": "off" // Disable general JS unused-vars rule if needed
  }
};