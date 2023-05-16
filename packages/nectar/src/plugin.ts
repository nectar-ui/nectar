import type { Configuration } from '@nectar-ui/types'
import { cosmiconfigSync } from 'cosmiconfig'
import { TypeScriptLoader } from 'cosmiconfig-typescript-loader'
import merge from 'lodash.merge'
import type { PluginCreator } from 'postcss'
import { config as baseConfig } from './config.js'
import {
	prepareMediaQueries,
	prepareSelectors,
	prepareTokens,
	resolveConfig
} from './config/index.js'
import {
	processMediaQueries,
	processProperties,
	processReset,
	processSelectors,
	processTokens
} from './features/index.js'
import type { PluginOptions } from './types.js'

const MODULE_NAME = 'nectar'

const plugin: PluginCreator<PluginOptions> = opts => {
	const explorer = cosmiconfigSync(MODULE_NAME, {
		searchPlaces: [
			'package.json',
			`${MODULE_NAME}.config.json`,
			`${MODULE_NAME}.config.js`,
			`${MODULE_NAME}.config.cjs`,
			`${MODULE_NAME}.config.ts`
		],
		loaders: {
			'.ts': TypeScriptLoader()
		}
	})

	const resolvedConfig = resolveConfig(explorer, opts?.config)?.config as Configuration

	const config = merge<Configuration, Configuration>(baseConfig, resolvedConfig ?? {})

	const tokens = prepareTokens(config.tokens ?? { base: {} })
	const mediaQueries = prepareMediaQueries(config.mediaQueries ?? {})
	const selectors = prepareSelectors(config.selectors ?? {})

	const properties = processProperties(config.properties ?? {})

	return {
		postcssPlugin: '@nectar-ui/postcss-plugin',
		Once: processSelectors(selectors),
		AtRule: {
			'nectar-reset': processReset,
			'nectar-tokens': processTokens(tokens),
			media: processMediaQueries(mediaQueries)
		},
		Declaration: properties
	}
}

plugin.postcss = true

export default plugin
