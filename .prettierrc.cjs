module.exports = {
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '^react-dom$',
    '^react-dom/client$',
    '^react-redux$',
    '^redux$',
    '^@reduxjs/toolkit$',
    '^redux-first-history',
    '^react-router-dom$',
    '^react-use$',
    '^history$',
    '^lodash$',
    '<THIRD_PARTY_MODULES>',
    '^classnames$',
    '',

    '^@ui/(.*)$',
    '',

    '^@shared/(.*)$',
    '',

    '^@entities/(.*)$',
    '',

    '^@core/(.*)$',
    '',

    '^@pages/(.*)$',
    '',

    '^@features/(.*)$',
    '',

    '^@assets/(.*)$',
    '',

    '^../(?!.*.(css|module.css)$).*$',
    '',

    '^./(?!.*.(css|module.css)$).*$',
    '',

    '.*\\.(css|module\\.css)$',
  ],
  importOrderSeparation: true,
};
