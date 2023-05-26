import { PublicExplorerSync } from 'cosmiconfig'

export function resolveConfig(explorer: PublicExplorerSync, configPath?: string) {
	return configPath ? explorer.load(configPath) : explorer.search()
}
