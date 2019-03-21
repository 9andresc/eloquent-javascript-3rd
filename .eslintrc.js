module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@getify/proper-arrows'],
  rules: {
    'func-names': ['error', 'as-needed'],
    '@getify/proper-arrows/params': ['error', { unused: 'trailing' }],
    '@getify/proper-arrows/name': ['error', { trivial: false }],
    '@getify/proper-arrows/location': ['error', { global: true }],
    '@getify/proper-arrows/return': ['error', { object: true }],
    '@getify/proper-arrows/this': ['error', 'always', { 'no-global': true }],
    'space-before-function-paren': 'off'
  }
}
