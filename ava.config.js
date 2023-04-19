export default {
	files: ['packages/*/src/**/*.spec.ts'],
	extensions: {
		ts: 'module'
	},
	nodeArguments: ['--loader=ts-node/esm']
}
