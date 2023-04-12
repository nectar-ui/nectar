import type { PluginCreator } from 'postcss'
import { resolveConfig } from './config.js'
import {
	prepareMediaQueries,
	prepareSelectors,
	prepareTokens,
	processMediaQueries,
	processReset,
	processSelectors,
	processTokens
} from './features/index.js'

const MODULE_NAME = 'nectar'

export interface PluginOptions {
	config?: string
}

export const plugin: PluginCreator<PluginOptions> = opts => {
	const resolvedConfig = resolveConfig(MODULE_NAME, opts?.config)
	const config = resolvedConfig?.config

	const preparedTokens = prepareTokens(config.tokens ?? { base: {} })
	const preparedMediaQueries = prepareMediaQueries(config.mediaQueries ?? {})
	const preparedSelectors = prepareSelectors(config.selectors ?? {})

	return {
		postcssPlugin: '@nectar-ui/nectar',
		Once: processSelectors(preparedSelectors),
		AtRule: {
			'nectar-reset': processReset,
			'nectar-tokens': processTokens(preparedTokens),
			media: processMediaQueries(preparedMediaQueries)
		}
	}
}

plugin.postcss = true
