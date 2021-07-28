module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-unused-vars': ['warn'],
    'space-before-function-paren': 0,
    'jsx-quotes': ['warn', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1, {
        extensions: ['.ts', '.tsx']
      }
    ],
    semi: ['error', 'never']
  }
}
