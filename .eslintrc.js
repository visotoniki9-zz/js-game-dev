module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-plusplus': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'react/no-this-in-sfc': 'off',
    'max-len': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
  },
};
