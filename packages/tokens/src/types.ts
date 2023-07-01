import type {
  transitionDelayTokens,
  transitionDurationTokens,
  transitionPropertyTokens,
  transitionTimingFunctionTokens
} from './animation'
import type {
  borderStyleTokens,
  borderWidthTokens,
  radiiTokens
} from './border'
import type { colorTokens, opacityTokens, shadowTokens } from './colors'
import type {
  boxTokens,
  seperatorTokens,
  spacerTokens,
  textTokens
} from './components'
import type {
  breakpointTokens,
  sizingTokens,
  spacingTokens,
  zIndiceTokens
} from './layout'
import type { mediaQueryTokens } from './mediaQueries'
import type {
  fontSizeTokens,
  fontTokens,
  fontWeightTokens,
  letterSpacingTokens,
  lineHeightTokens
} from './typography'

export type PropertyValue<TValue> = TValue extends Array<infer AValue>
  ? Array<AValue extends infer TUnpacked & {} ? TUnpacked : AValue>
  : TValue extends infer TUnpacked & {}
  ? TUnpacked
  : TValue

/** Animation */

export type TransitionTimingFunctionTokens =
  `--transition-timing-functions-${keyof typeof transitionTimingFunctionTokens}`

export type TransitionPropertyTokens =
  `--transition-properties-${keyof typeof transitionPropertyTokens}`

export type TransitionDurationTokens =
  `--transition-durations-${keyof typeof transitionDurationTokens}`

export type TransitionDelayTokens =
  `--transition-delays-${keyof typeof transitionDelayTokens}`

/** Borders */

export type RadiiTokens = `--radii-${keyof typeof radiiTokens}`

export type BorderWidthTokens =
  `--border-widths-${keyof typeof borderWidthTokens}`

export type BorderStyleTokens =
  `--border-styles-${keyof typeof borderStyleTokens}`

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

export type LetterSpacingTokens =
  `--letter-spacings-${keyof typeof letterSpacingTokens}`

export type LineHeightTokens = `--line-heights-${keyof typeof lineHeightTokens}`

/** Components */

export type TextTokens = `--text-${keyof typeof textTokens}`

export type BoxTokens = `--box-${keyof typeof boxTokens}`

export type SeperatorTokens = `--seperator-${keyof typeof seperatorTokens}`

export type SpacerTokens = `--spacer-${keyof typeof spacerTokens}`

export type ComponentTokens =
  | TextTokens
  | BoxTokens
  | SeperatorTokens
  | SpacerTokens

export type ComponentStyles = React.CSSProperties &
  Partial<Record<ComponentTokens, PropertyValue<string | number>>>

/** Media Queries */

export type MediaQueryTokens = `--${keyof typeof mediaQueryTokens}`

/** Color Names */
export type Colors =
  | 'tomato'
  | 'red'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'grass'
  | 'brown'
  | 'orange'
  | 'sky'
  | 'mint'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'gold'
  | 'bronze'
  | 'gray'
  | 'mauve'
  | 'slate'
  | 'olive'
  | 'sand'
  | 'sage'
  | 'primary'
  | 'secondary'
  | 'contrast'
  | 'warning'
  | 'info'
  | 'success'
  | 'danger'
