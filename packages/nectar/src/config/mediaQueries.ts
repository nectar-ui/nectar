import type { MediaQueries } from '@nectar-ui/types'
import { camelCaseReplacer } from '../replacer/camelCaseReplacer.js'

export function prepareMediaQueries(media: MediaQueries): MediaQueries {
	const css: MediaQueries = {}
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
