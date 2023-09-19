module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '*.cjs', 'vite.config.ts'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [],
  rules: {
    'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
  },
};
