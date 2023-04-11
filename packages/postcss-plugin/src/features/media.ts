import { MediaQueries } from '@nectar-ui/core'
import { AtRule } from 'postcss'

const MEDIA_REGEX = /\(--[A-z][\w-]*\)/

export const processMedia = (media: MediaQueries): ((atrule: AtRule) => void) => {
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
