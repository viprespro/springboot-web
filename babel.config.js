module.exports = {
  presets: ['@babel/preset-env', '@babel/typescript', '@babel/preset-react'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-typescript',
  ],
}
