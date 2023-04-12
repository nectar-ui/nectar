import type { Selectors } from '@nectar-ui/core'
import type { Root } from 'postcss'
import { camelCaseReplacer } from '../replacer/index.js'

const SELECTOR_REGEX = /:--[A-z][\w-]*/g

export interface PreparedSelectors {
	[index: string]: string
}

export function prepareSelectors(selectors: Selectors): PreparedSelectors {
	const css: PreparedSelectors = {}
	for (let key in selectors) {
		const value = selectors[key]
		key = `:--${camelCaseReplacer(key)}`
		css[key] = value
	}
	return css
}

export function processSelectors(selectors: PreparedSelectors): (css: Root) => void {
	return css => {
		css.walkRules(rule => {
			const updatedSelectors: string[] = []
			for (let selector of rule.selectors) {
				selector = selector.trim()
				const matches = selector.match(SELECTOR_REGEX)
				if (matches && selector in selectors) {
					selector = selector.replace(selector, selectors[selector])
				}
				updatedSelectors.push(selector)
			}
			if (updatedSelectors.length) rule.selectors = updatedSelectors
		})
	}
}
