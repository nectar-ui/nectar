import type { Root } from 'postcss'
import type { Selectors } from '../types.js'

const SELECTOR_REGEX = /:--[A-z][\w-]*/g

export function processSelectors(selectors: Selectors): (css: Root) => void {
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
