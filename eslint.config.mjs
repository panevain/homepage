// @ts-check

import prettierConfig from 'eslint-config-prettier';
import compatPlugin from 'eslint-plugin-compat';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  perfectionistPlugin.configs['recommended-alphabetical'],
  compatPlugin.configs['flat/recommended'],
  {
    plugins: { prettier: prettierPlugin },
    rules: { 'prettier/prettier': 'error' },
  },
  prettierConfig,
]);
