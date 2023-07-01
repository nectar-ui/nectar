module.exports = {
  plugins: [
    'postcss-import',
    [
      require.resolve('@nectar-ui/postcss-plugin'),
      { config: './nectar.config.cjs' }
    ],
    ['postcss-preset-env', { stage: 3 }],
    'postcss-nested'
  ]
}
