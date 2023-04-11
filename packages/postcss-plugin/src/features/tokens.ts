import { AtRule, Helpers } from 'postcss'

interface Tokens {
	[mode: string]: {
		[property: string]: string
	}
}

export const processTokens = (tokens: Tokens): ((atrule: AtRule, helpers: Helpers) => void) => {
	return (atrule, { decl, rule }) => {
		Object.keys(tokens).forEach(mode => {
			const selector = mode == 'base' ? ':root' : `.${mode}`
			const rootRule = rule({ selector })
			Object.keys(tokens[mode]).forEach(property => {
				console.log(property)
				console.log(tokens[mode][property])
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
