module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.app.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react-refresh', 'import'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'prettier/prettier': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': ['warn', { allow: ['error'] }],
    'import/no-unresolved': 2,
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      1,
      {
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          { pattern: '@ui/**', group: 'internal', position: 'after' },
          { pattern: '@shared/**', group: 'internal', position: 'after' },
          { pattern: '@core/**', group: 'internal', position: 'after' },
          { pattern: '@features/**', group: 'internal', position: 'after' },
          { pattern: '@assets/**', group: 'internal', position: 'after' },
          { pattern: './*.module.css', group: 'index', position: 'after' },
        ],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.app.json',
      },
    },
    'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
  },
};
