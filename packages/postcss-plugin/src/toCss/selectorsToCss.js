import { camelCaseReplacer } from '../replacer'

export function selectorsToCss(selectors) {
	const css = {}
	for (let key in selectors) {
		const value = selectors[key]
		key = `:--${camelCaseReplacer(key)}`
		css[key] = value
	}
	return css
}
