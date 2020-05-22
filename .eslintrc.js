module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: true,
      },
    ],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      'd.ts': 'never',
      ts: 'never',
      tsx: 'never',
      mjs: 'never',
    }],
    'no-param-reassign': [
      'error', {
        props: false,
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        directory: './',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
