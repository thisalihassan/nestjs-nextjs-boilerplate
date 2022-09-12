module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'src/migrations/*',
    'client/dist',
    'client/build',
    'client/node_modules',
    'client/src/store/reducers/generated.ts',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'eol-last': 2,
    'no-trailing-spaces': 2,
    '@typescript-eslint/no-unused-vars': 2,
    'no-console': 2,
    '@typescript-eslint/no-explicit-any': 2,
  },
};
