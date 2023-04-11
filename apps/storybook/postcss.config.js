export default {
	plugins: [
		'postcss-import',
		[require.resolve('@nectar-ui/postcss-plugin'), { theme: './src/nectar.config.js' }],
		['postcss-preset-env', { stage: 3 }],
		'postcss-nested'
	]
}
