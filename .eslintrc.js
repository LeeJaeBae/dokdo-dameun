module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 4,
        singleQuote: true,
        bracketSpacing: false,
        bracketSameLine: true,
        arrowParens: 'avoid',
        trailingComma: 'all',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': 'off',
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
