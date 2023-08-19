/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const {defineConfig} = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/require-valid-default-prop': 'error'
  }
})
