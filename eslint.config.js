const { Linter } = require("eslint");

/** @type {Linter.FlatConfig[]} */
const config = [
  {
    languageOptions: {
      parser: require("@babel/eslint-parser"),
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    globals: {
      window: true,
      document: true,
    },
    rules: {
      // Agrega tus reglas personalizadas aquí
      "no-unused-vars": "warn",
      "react/prop-types": "off",
      "semi":"error"
    },
    plugins: [
      require("eslint-plugin-react"),
      require("eslint-plugin-jest")
    ],
    extends: [
      "eslint:recommended", 
      "plugin:react/recommended", 
      "plugin:jest/recommended"
    ],
    settings: {
      react: {
        version: "detect",  // Detecta la versión de React automáticamente
      },
    },
  },
];

module.exports = config;
