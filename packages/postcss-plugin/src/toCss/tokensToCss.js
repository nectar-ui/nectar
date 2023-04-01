import { camelCaseReplacer, themeReferenceReplacer } from '../replacer'

export function tokensToCss(tokens) {
	const css = {}
	for (const mode in tokens) {
		css[mode] = {}
		for (const scale in tokens[mode]) {
			for (const property in tokens[mode][scale]) {
				const token = camelCaseReplacer(`--${scale}-${property}`)
				const value = themeReferenceReplacer(tokens[mode][scale][property])
				css[mode][token] = value
			}
		}
	}
	return css
}
