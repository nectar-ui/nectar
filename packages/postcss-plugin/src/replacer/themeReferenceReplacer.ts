import { camelCaseReplacer } from './camelCaseReplacer.js'

const themeReferenceRegex = new RegExp(/\$(\w+)\.(\w+)/, 'g')
export function themeReferenceReplacer(value: string) {
	return value.replace(themeReferenceRegex, (_match, p1, p2) => `var(--${camelCaseReplacer(p1)}-${camelCaseReplacer(p2)})`)
}
