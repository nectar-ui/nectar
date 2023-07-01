import {
  transitionDelayTokens,
  transitionDurationTokens,
  transitionPropertyTokens,
  transitionTimingFunctionTokens
} from './animation'
import { borderStyleTokens, borderWidthTokens, radiiTokens } from './border'
import {
  colorTokens,
  darkColorTokens,
  opacityTokens,
  shadowTokens
} from './colors'
import { componentTokens } from './components'
import {
  breakpointTokens,
  sizingTokens,
  spacingTokens,
  zIndiceTokens
} from './layout'
import {
  fontSizeTokens,
  fontTokens,
  fontWeightTokens,
  letterSpacingTokens,
  lineHeightTokens
} from './typography'

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

export * from './animation'
export * from './border'
export * from './colors'
export * from './components'
export * from './layout'
export * from './mediaQueries'
export * from './types'
export * from './typography'

export type Tokens = keyof typeof tokens
