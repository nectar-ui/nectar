import type { AtRule, Helpers } from 'postcss'
import type { TransformedTokens } from '../types.js'

export function processTokens(
	tokens: TransformedTokens
): (atrule: AtRule, helpers: Helpers) => void {
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
