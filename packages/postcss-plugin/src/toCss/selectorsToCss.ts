import type { Selectors } from '@nectar-ui/core'
import { camelCaseReplacer } from '../replacer/index.js'

export function selectorsToCss(selectors: Selectors) {
	const css: Record<string, string> = {}
	for (let key in selectors) {
		const value = selectors[key]
		key = `:--${camelCaseReplacer(key)}`
		css[key] = value
	}
	return css
}
