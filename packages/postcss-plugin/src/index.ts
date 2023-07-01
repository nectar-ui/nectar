import type { PluginCreator } from 'postcss'
import { loadConfig } from './config/config'
import {
  prepareMediaQueries,
  processMediaQueries
} from './features/mediaQueries'
import { processProperties } from './features/properties'
import { prepareSelectors, processSelectors } from './features/selectors'
import { processStyles } from './features/styles'
import { prepareTokens } from './features/tokens'
import type { PluginOptions } from './types'

const MODULE_NAME = 'nectar'

const plugin: PluginCreator<PluginOptions> = opts => {
  const config = loadConfig(MODULE_NAME, opts?.config)

  const tokens = prepareTokens(config.tokens ?? { base: {} })
  const mediaQueries = prepareMediaQueries(config.mediaQueries ?? {})
  const selectors = prepareSelectors(config.selectors ?? {})

  const properties = processProperties(config.properties ?? {})

  return {
    postcssPlugin: '@nectar-ui/postcss-plugin',
    Once: processSelectors(selectors),
    AtRule: {
      nectar: processStyles(tokens),
      media: processMediaQueries(mediaQueries)
    },
    Declaration: properties
  }
}

plugin.postcss = true

export default plugin
