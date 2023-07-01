import type { Root } from 'postcss'
import type { Selectors } from '../types'
import { camelCaseReplacer } from '../util/camelCaseReplacer'

const SELECTOR_REGEX = /:--[A-z][\w-]*/g

export function prepareSelectors(selectors: Selectors): Selectors {
  const css: Selectors = {}
  for (let key in selectors) {
    const value = selectors[key]
    key = `:--${camelCaseReplacer(key)}`
    css[key] = value
  }
  return css
}

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
