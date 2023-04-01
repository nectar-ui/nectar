import { camelCaseReplacer } from '../replacer'

export function mediaToCss(media) {
	const css = {}
	for (let key in media) {
		let value = media[key]
		key = `--${camelCaseReplacer(key)}`
		if (value.charAt(0) !== '(') {
			value = `(${value}`
		}
		if (!value.endsWith(')')) {
			value = `${value})`
		}
		css[key] = value
	}
	return css
}
