import tsnode from 'ts-node'
tsnode.register()

import { mediaToCss, selectorsToCss, tokensToCss } from './toCss'

const customMediaRegex = /\(--[A-z][\w-]*\)/
const customSelectorRegex = /:--[A-z][\w-]*/g

const plugin = (opts = {}) => {
	const theme = Object(opts).theme

	const { mediaQueries, selectors, tokens } = require(theme)

	const customProperties = tokensToCss(tokens ?? { base: {} })
	const customMedia = mediaToCss(mediaQueries ?? {})
	const customSelectors = selectorsToCss(selectors ?? {})

	return {
		postcssPlugin: '@nectar-ui/postcss-plugin',
		Once: css => {
			css.walkRules(rule => {
				const updatedSelectors = []
				for (let selector of rule.selectors) {
					selector = selector.trim()
					const matches = [...selector.matchAll(customSelectorRegex)]
					if (matches.length) {
						matches.forEach(match => {
							if (match in customSelectors) selector = selector.replace(match, customSelectors[match])
						})
					}
					updatedSelectors.push(selector)
				}
				if (updatedSelectors.length) rule.selectors = updatedSelectors
			})
		},
		AtRule: {
			customproperties: (atrule, { decl, rule }) => {
				Object.keys(customProperties).forEach(mode => {
					const selector = mode == 'base' ? ':root' : mode
					const rootRule = rule({ selector })
					atrule.root().prepend(rootRule)

					Object.keys(customProperties[mode]).forEach(property => {
						var varDecl = decl({
							prop: property,
							value: customProperties[mode][property]
						})
						rootRule.append(varDecl)
					})
					atrule.remove()
				})
			},
			media: atrule => {
				if (customMediaRegex.test(atrule.params)) {
					const key = atrule.params.substring(1, atrule.params.length - 1)
					if (key in customMedia) {
						const val = customMedia[key]
						if (val != null) atrule.params = val
					}
				}
			}
		}
	}
}

plugin.postcss = true

export default plugin
