import {
	transitionDelays,
	transitionDurations,
	transitionProperties,
	transitionTimingFunctions
} from './animation.js'
import { borderStyles, borderWidths, radii } from './border.js'
import { colors, darkColors, opacity, shadows } from './colors.js'
import { zIndices } from './layout.js'
import { screens, sizings, spacings } from './space.js'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights, text } from './typography.js'

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
	text: text
}

export const darkTokens = {
	colors: darkColors
}

export * from './animation.js'
export * from './border.js'
export * from './colors.js'
export * from './layout.js'
export * from './mediaQueries.js'
export * from './space.js'
export * from './types.js'
export * from './typography.js'

export type Tokens = keyof typeof tokens
