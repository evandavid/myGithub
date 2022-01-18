module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '^@Components/(.+)': './src/Components/\\1',
          '^@Pages/(.+)': './src/Pages/\\1',
          '^@Hooks/(.+)': './src/Hooks/\\1',
        },
      },
    ],
  ],
};
