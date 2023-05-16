import type { Selectors } from '@nectar-ui/types'
import { camelCaseReplacer } from '../replacer/camelCaseReplacer.js'

export function prepareSelectors(selectors: Selectors): Selectors {
	const css: Selectors = {}
	for (let key in selectors) {
		const value = selectors[key]
		key = `:--${camelCaseReplacer(key)}`
		css[key] = value
	}
	return css
}
