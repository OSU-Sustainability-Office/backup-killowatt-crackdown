/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
    browser: true,
  },
  rules: {
    // allow async-await
    "no-multi-spaces": "off",
    "generator-star-spacing": "off",
    camelcase: [0, { properties: "never" }],
    "strict-vue/require-jsdoc": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
