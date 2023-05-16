import { text } from 'stream/consumers'
import {
	transitionDelays,
	transitionDurations,
	transitionProperties,
	transitionTimingFunctions
} from './animation.js'
import { borderStyles, borderWidths, radii } from './border.js'
import { colors, opacity, shadows } from './colors.js'
import { zIndices } from './layout.js'
import { screens, sizings, spacings } from './space.js'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography.js'

/** Animation */

export type TransitionTimingFunctions = keyof typeof transitionTimingFunctions

export type TransitionProperties = keyof typeof transitionProperties

export type TransitionDurations = keyof typeof transitionDurations

export type TransitionDelays = keyof typeof transitionDelays

/** Borders */

export type Radii = keyof typeof radii

export type BorderWidths = keyof typeof borderWidths

export type BorderStyles = keyof typeof borderStyles

/** Colors */

export type Shadows = keyof typeof shadows

export type Opacity = keyof typeof opacity

export type Colors = keyof typeof colors

export type BrandColor =
	| 'contrast'
	| 'primary'
	| 'secondary'
	| 'info'
	| 'danger'
	| 'warning'
	| 'success'

export type AliasedPalette = {
	base: string
	bgSubtle: string
	bg: string
	bgHover: string
	bgActive: string
	line: string
	border: string
	borderHover: string
	solid: string
	solidHover: string
	text: string
	contrastText: string
	shadow: string
}

/** Layout */

export type ZIndices = keyof typeof zIndices

/** Space */

export type Spacings = keyof typeof spacings

export type Screens = keyof typeof screens

export type Sizings = keyof typeof sizings

/** Typography */

export type Fonts = keyof typeof fonts

export type FontSizes = keyof typeof fontSizes

export type FontWeights = keyof typeof fontWeights

export type LetterSpacings = keyof typeof letterSpacings

export type LineHeights = keyof typeof lineHeights

export type Text = keyof typeof text
