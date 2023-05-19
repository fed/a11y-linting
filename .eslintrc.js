module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:styled-components-a11y/strict',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'styled-components-a11y', '@compiled'],
  rules: {
    '@compiled/jsx-pragma': 'error',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
