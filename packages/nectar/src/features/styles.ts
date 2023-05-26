import { readFileSync } from 'fs'
import { createRequire } from 'module'
import { parse, type AtRule, type Helpers } from 'postcss'
import type { TransformedTokens } from '../types.js'

const RESET_LIBRARY = '@nectar-ui/nectar/reset'
const require = createRequire(import.meta.url)

export function processStyles(
	tokens: TransformedTokens
): (atrule: AtRule, helpers: Helpers) => void {
	return (atrule, { decl, rule }) => {
		const cssPath = require.resolve(RESET_LIBRARY)
		console.log(cssPath)
		const css = readFileSync(cssPath)
		const style = parse(css)
		console.log(style)
		atrule.root().append(style)
		Object.keys(tokens).forEach(mode => {
			const selector = mode == 'base' ? 'html' : `html.${mode}`
			const rootRule = rule({ selector })
			Object.keys(tokens[mode]).forEach(property => {
				const varDecl = decl({
					prop: property,
					value: tokens[mode][property]
				})
				mode == 'base' ? rootRule.prepend(varDecl) : rootRule.append(varDecl)
			})
			atrule.root().prepend(rootRule)
		})
		atrule.remove()
	}
}
