import type { AtRule } from 'postcss'
import type { MediaQueries } from '../types'
import { camelCaseReplacer } from '../util/camelCaseReplacer'

const MEDIA_REGEX = /\(--[A-z][\w-]*\)/

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

export function processMediaQueries(
  media: MediaQueries
): (atrule: AtRule) => void {
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
