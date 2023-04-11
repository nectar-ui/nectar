import type { MediaQueries } from '@nectar-ui/core'
import { camelCaseReplacer } from '../replacer/index.js'

export function mediaToCss(media: MediaQueries) {
	const css: Record<string, string> = {}
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
