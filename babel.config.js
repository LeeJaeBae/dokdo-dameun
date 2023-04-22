/* eslint-disable prettier/prettier */
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'react-native-reanimated/plugin',
        {
                relativeSourceLocation: true,
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@assets': './assets',
          },
        },
      ],
      'babel-plugin-styled-components',
    ],
};
