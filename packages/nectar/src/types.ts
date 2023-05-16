import type { Properties } from '@nectar-ui/types'
import { Declaration } from 'postcss'

export interface PluginOptions {
	config?: string
}

export interface TransformedTokens {
	[mode: string]: {
		[property: string]: string
	}
}

export type DeclarationTransform = (decl: Declaration) => void

export type Declarations<P extends Properties> = Record<keyof P, DeclarationTransform>
