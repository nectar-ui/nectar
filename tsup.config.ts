import cssModulesPlugin from 'esbuild-css-modules-plugin'
import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	plugins: [cssModulesPlugin({ inject: true })],
	minify: true,
	onSuccess: 'tsc -b',
	format: ['cjs', 'esm'],
	target: 'es2020',
	sourcemap: true
})
