import { cosmiconfigSync } from 'cosmiconfig'
import { TypeScriptLoader } from 'cosmiconfig-typescript-loader'

export function resolveConfig(moduleName: string, config?: string) {
	const explorer = cosmiconfigSync(moduleName, {
		searchPlaces: [
			'package.json',
			`${moduleName}.config.json`,
			`${moduleName}.config.js`,
			`${moduleName}.config.cjs`,
			`${moduleName}.config.ts`
		],
		loaders: {
			'.ts': TypeScriptLoader()
		}
	})

	return config ? explorer.load(config) : explorer.search()
}
