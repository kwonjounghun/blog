module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'react/function-component-definition': [2, { 'namedComponents': 'function-expression' }, { 'unnamedComponents': 'arrow-function' }],
    'react/jsx-filename-extension': [1,
      {
        'extensions': [
          '.tsx'
        ]
      }
    ],
  }
};
