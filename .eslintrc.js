module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['detox', 'react', 'react-native', 'jsx-a11y', 'import'],
  settings: {
    'import/resolver': 'reactnative'
  },
  env: {
    jest: true
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/jsx-no-bind': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    'react/jsx-first-prop-new-line': ['error', 'always'],
    'newline-before-return': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'import/prefer-default-export': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    'max-len': [2, 100],
    'global-require': 0,
    'no-case-declarations': 0,
    skipBlankLines: true,
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    'function-paren-newline': ['error', 'consistent'],
    'arrow-body-style': ['error', 'always'],
    'eol-last': ['error', 'always'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'class-methods-use-this': [2, { exceptMethods: ['fetchData'] }]
  },
  globals: {
    fetch: false,
    navigator: false,
    __DEV__: true
  }
}
