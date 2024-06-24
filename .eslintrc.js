module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never'],
    'react/function-component-definition': [2, { 'namedComponents': ['function-declaration', 'function-expression', 'arrow-function'], 'unnamedComponents': ['function-expression', 'arrow-function'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [1,
      {
        'extensions': [
          '.js', '.jsx', '.ts', '.tsx'
        ]
      }
    ],
  }
};
