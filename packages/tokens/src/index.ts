import {
	transitionDelays,
	transitionDurations,
	transitionProperties,
	transitionTimingFunctions
} from './animation.js'
import { borderStyles, borderWidths, radii } from './border.js'
import { colors, darkColors, opacity, shadows } from './colors.js'
import { componentTokens } from './components.js'
import { screens, sizings, spacings, zIndices } from './layout.js'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography.js'

export const tokens = {
	colors: colors,
	fonts: fonts,
	fontWeights: fontWeights,
	fontSizes: fontSizes,
	letterSpacings: letterSpacings,
	lineHeights: lineHeights,
	transitionDelays: transitionDelays,
	transitionDurations: transitionDurations,
	transitionProperties: transitionProperties,
	transitionTimingFunctions: transitionTimingFunctions,
	spacings: spacings,
	screens: screens,
	sizings: sizings,
	opacity: opacity,
	shadows: shadows,
	radii: radii,
	borderWidths: borderWidths,
	borderStyles: borderStyles,
	zIndices: zIndices,
	...componentTokens
}

export const darkTokens = {
	colors: darkColors,
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
