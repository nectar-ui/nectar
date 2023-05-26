import {
	transitionDelayTokens,
	transitionDurationTokens,
	transitionPropertyTokens,
	transitionTimingFunctionTokens
} from './animation.js'
import { borderStyleTokens, borderWidthTokens, radiiTokens } from './border.js'
import { colorTokens, darkColorTokens, opacityTokens, shadowTokens } from './colors.js'
import { componentTokens } from './components.js'
import { breakpointTokens, sizingTokens, spacingTokens, zIndiceTokens } from './layout.js'
import {
	fontSizeTokens,
	fontTokens,
	fontWeightTokens,
	letterSpacingTokens,
	lineHeightTokens
} from './typography.js'

export const tokens = {
	colors: colorTokens,
	fonts: fontTokens,
	fontWeights: fontWeightTokens,
	fontSizes: fontSizeTokens,
	letterSpacings: letterSpacingTokens,
	lineHeights: lineHeightTokens,
	transitionDelays: transitionDelayTokens,
	transitionDurations: transitionDurationTokens,
	transitionProperties: transitionPropertyTokens,
	transitionTimingFunctions: transitionTimingFunctionTokens,
	spacings: spacingTokens,
	breakpoints: breakpointTokens,
	sizings: sizingTokens,
	opacity: opacityTokens,
	shadows: shadowTokens,
	radii: radiiTokens,
	borderWidths: borderWidthTokens,
	borderStyles: borderStyleTokens,
	zIndices: zIndiceTokens,
	...componentTokens
}

export const darkTokens = {
	colors: darkColorTokens,
	...componentTokens
}

export * from './animation.js'
export * from './border.js'
export * from './colors.js'
export * from './components.js'
export * from './layout.js'
export * from './mediaQueries.js'
export * from './types.js'
export * from './typography.js'

export type Tokens = keyof typeof tokens
