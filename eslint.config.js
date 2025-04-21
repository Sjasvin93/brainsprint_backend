import promise from 'eslint-plugin-promise';
import security from 'eslint-plugin-security';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      promise,
      security,
      prettier,
    },
    // Directly include the configuration objects rather than using "extends"
    settings: {
      promise: {
        // Specific settings for eslint-plugin-promise if needed
      },
    },
    rules: {
      camelcase: ['error', { properties: 'always' }],
      'no-console': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-shorthand': ['error', 'always'],
      'prefer-const': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
      'no-var': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'array-callback-return': 'error',
      'default-case': 'error',
      'dot-notation': 'error',
      'max-len': ['error', { code: 150 }],
      'newline-before-return': 'error',
      'no-shadow': 'error',
      'no-param-reassign': ['error', { props: true }],
      'require-await': 'error',
    },
  },
];
