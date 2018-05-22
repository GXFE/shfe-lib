module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  // extends: ["prettier"],
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
