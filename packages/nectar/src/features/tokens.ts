import type { Tokens } from '@nectar-ui/core'
import type { AtRule, Helpers } from 'postcss'
import { camelCaseReplacer, themeReferenceReplacer } from '../replacer/index.js'

interface PreparedTokens {
	[mode: string]: {
		[property: string]: string
	}
}

export function prepareTokens(tokens: Tokens): PreparedTokens {
	const css: PreparedTokens = {}
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

export function processTokens(tokens: PreparedTokens): (atrule: AtRule, helpers: Helpers) => void {
	return (atrule, { decl, rule }) => {
		Object.keys(tokens).forEach(mode => {
			const selector = mode == 'base' ? ':root' : `.${mode}`
			const rootRule = rule({ selector })
			Object.keys(tokens[mode]).forEach(property => {
				const varDecl = decl({
					prop: property,
					value: tokens[mode][property]
				})
				rootRule.append(varDecl)
			})
			atrule.root().prepend(rootRule)
		})
		atrule.remove()
	}
}
