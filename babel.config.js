module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '^@Components/(.+)': './src/Components/\\1',
          '^@Context/(.+)': './src/Context/\\1',
          '^@Pages/(.+)': './src/Pages/\\1',
          '^@Hooks/(.+)': './src/Hooks/\\1',
          '^@Config/(.+)': './src/Config/\\1',
        },
      },
    ],
  ],
};
