import { NectarContext } from './nectarContext'
import type { NectarConfig } from '@nectar-ui/core'
import './customProperties.css'

export interface NectarProviderProps {
	children?: React.ReactNode
	useCssReset?: boolean
	nectar?: NectarConfig
}

export function NectarProvider({ children, nectar, useCssReset = true }: NectarProviderProps) {
	if (useCssReset) {
		import('@nectar-ui/reset')
	}

	return <NectarContext.Provider value={nectar ?? {}}>{children}</NectarContext.Provider>
}
