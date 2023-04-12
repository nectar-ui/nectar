import type { MediaQueries } from '@nectar-ui/core'
import type { AtRule } from 'postcss'
import { camelCaseReplacer } from '../replacer/index.js'

const MEDIA_REGEX = /\(--[A-z][\w-]*\)/

export interface PreparedMediaQueries {
	[alias: string]: string
}

export function prepareMediaQueries(media: MediaQueries): PreparedMediaQueries {
	const css: PreparedMediaQueries = {}
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

export const processMediaQueries = (media: PreparedMediaQueries): ((atrule: AtRule) => void) => {
	return atrule => {
		if (MEDIA_REGEX.test(atrule.params)) {
			const key = atrule.params.substring(1, atrule.params.length - 1)
			if (key in media) {
				const val = media[key]
				if (val != null) atrule.params = val
			}
		}
	}
}
