import { type PropertyValue } from 'csstype'
import {
	transitionDelayTokens,
	transitionDurationTokens,
	transitionPropertyTokens,
	transitionTimingFunctionTokens
} from './animation.js'
import { borderStyleTokens, borderWidthTokens, radiiTokens } from './border.js'
import { colorTokens, opacityTokens, shadowTokens } from './colors.js'
import { boxTokens, textTokens } from './components.js'
import { breakpointTokens, sizingTokens, spacingTokens, zIndiceTokens } from './layout.js'
import { mediaQueryTokens } from './mediaQueries.js'
import {
	fontSizeTokens,
	fontTokens,
	fontWeightTokens,
	letterSpacingTokens,
	lineHeightTokens
} from './typography.js'
/** Animation */

export type TransitionTimingFunctionTokens =
	`--transition-timing-functions-${keyof typeof transitionTimingFunctionTokens}`

export type TransitionPropertyTokens =
	`--transition-properties-${keyof typeof transitionPropertyTokens}`

export type TransitionDurationTokens =
	`--transition-durations-${keyof typeof transitionDurationTokens}`

export type TransitionDelayTokens = `--transition-delays-${keyof typeof transitionDelayTokens}`

/** Borders */

export type RadiiTokens = `--radii-${keyof typeof radiiTokens}`

export type BorderWidthTokens = `--border-widths-${keyof typeof borderWidthTokens}`

export type BorderStyleTokens = `--border-styles-${keyof typeof borderStyleTokens}`

/** Colors */

export type ShadowTokens = `--shadow-${keyof typeof shadowTokens}`

export type OpacityTokens = `--opacity--${keyof typeof opacityTokens}`

export type ColorTokens = `--colors-${keyof typeof colorTokens}`

/** Layout */

export type ZIndiceTokens = `--z-indices-${keyof typeof zIndiceTokens}`

/** Space */

export type SpacingTokens = `--spacings-${keyof typeof spacingTokens}`

export type BreakpointTokens = `--breakpoints-${keyof typeof breakpointTokens}`

export type SizingTokens = `--sizings-${keyof typeof sizingTokens}`

/** Typography */

export type FontTokens = `--fonts-${keyof typeof fontTokens}`

export type FontSizeTokens = `--font-sizes-${keyof typeof fontSizeTokens}`

export type FontWeightTokens = `--font-weights-${keyof typeof fontWeightTokens}`

export type LetterSpacingTokens = `--letter-spacings-${keyof typeof letterSpacingTokens}`

export type LineHeightTokens = `--line-heights-${keyof typeof lineHeightTokens}`

/** Components */

export type TextTokens = `--text-${keyof typeof textTokens}`

export type BoxTokens = `--box-${keyof typeof boxTokens}`

export type ComponentTokens = TextTokens | BoxTokens

export type ComponentStyles = React.CSSProperties &
	Partial<Record<ComponentTokens, PropertyValue<string | number>>>

/** Media Queries */

export type MediaQueryTokens = `--${keyof typeof mediaQueryTokens}`
