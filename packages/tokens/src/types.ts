import { type PropertyValue } from 'csstype'

import {
	transitionDelays,
	transitionDurations,
	transitionProperties,
	transitionTimingFunctions
} from './animation.js'
import { borderStyles, borderWidths, radii } from './border.js'
import { colors, opacity, shadows } from './colors.js'
import { base, box, text } from './components.js'
import { screens, sizings, spacings, zIndices } from './layout.js'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography.js'

/** Animation */

export type TransitionTimingFunctions =
	`--transition-timing-functions-${keyof typeof transitionTimingFunctions}`

export type TransitionProperties = `--transition-properties-${keyof typeof transitionProperties}`

export type TransitionDurations = `--transition-durations-${keyof typeof transitionDurations}`

export type TransitionDelays = `--transition-delays-${keyof typeof transitionDelays}`

/** Borders */

export type Radii = `--radii-${keyof typeof radii}`

export type BorderWidths = `--border-widths-${keyof typeof borderWidths}`

export type BorderStyles = `--border-styles-${keyof typeof borderStyles}`

/** Colors */

export type Shadows = `--shadow-${keyof typeof shadows}`

export type Opacity = `--opacity--${keyof typeof opacity}`

export type Colors = `--colors-${keyof typeof colors}`

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

export type ZIndices = `--z-indices-${keyof typeof zIndices}`

/** Space */

export type Spacings = `--spacings-${keyof typeof spacings}`

export type Screens = `--screens-${keyof typeof screens}`

export type Sizings = `--sizings-${keyof typeof sizings}`

/** Typography */

export type Fonts = `--fonts-${keyof typeof fonts}`

export type FontSizes = `--font-sizes-${keyof typeof fontSizes}`

export type FontWeights = `--font-weights-${keyof typeof fontWeights}`

export type LetterSpacings = `--letter-spacings-${keyof typeof letterSpacings}`

export type LineHeights = `--line-heights-${keyof typeof lineHeights}`

/** Components */

export type Base = `--base-${keyof typeof base}`

export type Text = `--text-${keyof typeof text}`

export type Box = `--box-${keyof typeof box}`

export type ComponentTokens = Base | Text | Box

export type ComponentStyles = React.CSSProperties &
	Partial<Record<ComponentTokens, PropertyValue<any>>>
