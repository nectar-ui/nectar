import CssModulesPlugin from 'esbuild-css-modules-plugin'
import path from 'path'
import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	plugins: [CssModulesPlugin({ generateTsFile: true })],
	minify: true,
	tsconfig: path.resolve(__dirname, './tsconfig.base.json'),
	onSuccess: 'tsc -b',
	format: ['cjs', 'esm'],
	target: 'es2020',
	sourcemap: true
})
