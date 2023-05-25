module.exports = {
	plugins: [
		'postcss-import',
		[require.resolve('@nectar-ui/nectar'), { config: './nectar.config.js' }],
		['postcss-preset-env', { stage: 3 }],
		'postcss-nested'
	]
}
