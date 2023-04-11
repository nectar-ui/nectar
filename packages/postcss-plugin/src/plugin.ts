import type { PluginCreator } from 'postcss'
import { resolveConfig } from './config.js'
import { processMedia, processSelectors, processTokens, processReset as reset } from './features/index.js'
import { mediaToCss, selectorsToCss, tokensToCss } from './toCss/index.js'

const MODULE_NAME = 'nectar'

export interface PluginOptions {
	config?: string
}

export const plugin: PluginCreator<PluginOptions> = opts => {
	const resolvedConfig = resolveConfig(MODULE_NAME, opts?.config)
	const config = resolvedConfig?.config

	const resolvedTokens = tokensToCss(config.tokens ?? { base: {} })
	const resolvedMediaQueries = mediaToCss(config.mediaQueries ?? {})
	const resolvedSelectors = selectorsToCss(config.selectors ?? {})

	const selectors = processSelectors(resolvedSelectors)
	const tokens = processTokens(resolvedTokens)
	const mediaQueries = processMedia(resolvedMediaQueries)

	return {
		postcssPlugin: '@nectar-ui/postcss-plugin',
		Once: selectors,
		AtRule: {
			'nectar-reset': reset,
			'nectar-tokens': tokens,
			media: mediaQueries
		}
	}
}

plugin.postcss = true
