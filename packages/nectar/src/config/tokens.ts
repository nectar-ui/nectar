import { camelCaseReplacer } from '../replacer/camelCaseReplacer.js'
import type { Scale, Tokens, TransformedTokens } from '../types.js'

export function prepareTokens(tokens: Tokens) {
	const css: TransformedTokens = {}
	for (const mode in tokens) {
		css[mode] = {}
		for (const scale in tokens[mode]) {
			const resolvedScale = resolveRecursively(tokens[mode][scale])
			for (const property in resolvedScale) {
				const token = `--${camelCaseReplacer(`${scale}-${property}`)}`
				const value = `${tokens[mode][scale][property]}`
				css[mode][token] = value
			}
		}
	}
	return css
}

function resolveRecursively(obj: Scale) {
	const resolved: Scale = {}
	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			const nested = resolveRecursively(obj[key] as Scale)
			for (const nestedKey in nested) {
				resolved[`${key}-${nestedKey}`] = nested[nestedKey]
			}
		} else {
			resolved[key] = obj[key]
		}
	}
	return resolved
}
