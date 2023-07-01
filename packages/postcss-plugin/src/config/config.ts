import { cosmiconfigSync } from 'cosmiconfig'
import { TypeScriptLoader } from 'cosmiconfig-typescript-loader'
import merge from 'lodash.merge'
import type { Configuration } from '../types.ts'
import { defaultConfig } from './defaultConfig.ts'

export function loadConfig(moduleName: string, configPath?: string) {
  const explorer = cosmiconfigSync(moduleName, {
    searchPlaces: [
      'package.json',
      `${moduleName}.config.json`,
      `${moduleName}.config.js`,
      `${moduleName}.config.cjs`,
      `${moduleName}.config.ts`
    ],
    loaders: {
      '.ts': TypeScriptLoader()
    }
  })
  const loadedConfig = configPath
    ? explorer.load(configPath)
    : explorer.search()

  const resolvedConfig = loadedConfig?.config as Configuration

  return merge<Configuration, Configuration>(
    defaultConfig,
    resolvedConfig ?? {}
  )
}
