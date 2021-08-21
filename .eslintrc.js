module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  ignorePatterns: ['public/**'],
  plugins: ['jest', 'prettier', '@typescript-eslint'],
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'vue/html-self-closing': 'off',
    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
