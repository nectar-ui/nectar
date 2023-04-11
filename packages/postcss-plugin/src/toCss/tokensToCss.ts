import type { Tokens } from '@nectar-ui/core'
import { camelCaseReplacer, themeReferenceReplacer } from '../replacer/index.js'

export function tokensToCss(tokens: Tokens) {
	const css: Record<string, Record<string, string>> = {}
	for (const mode in tokens) {
		css[mode] = {}
		for (const scale in tokens[mode]) {
			for (const property in tokens[mode][scale]) {
				const token = camelCaseReplacer(`--${scale}-${property}`)
				const value = themeReferenceReplacer(`${tokens[mode][scale][property]}`)
				css[mode][token] = value
			}
		}
	}
	return css
}
