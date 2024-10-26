// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  root: true,
  extends: [
    'expo',
    'prettier',
    './lintConf.js',
    'eslint:recommended',
  ],
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
