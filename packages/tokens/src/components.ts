export const anchorTokens = {
  color: 'var(--colors-primary)',
  cursor: 'pointer',
  decor: 'underline',
  'decor-color': 'var(--anchor-color)',
  'decor-thickness': '0.125em',
  'decor-offset': '0.125em',
  'hover-color': 'var(--colors-primary-hover)',
  'visited-color': 'var(--colors-primary)',
  'focus-color': 'var(--colors-primary-hover)',
  'active-color': 'var(--colors-primary-hover)',
  'transition-timing-function': 'var(--transition-timing-functions-linear)',
  'transition-property': 'var(--transition-properties-all)',
  'transition-speed': 'var(--transition-duration-150)',
  'transition-delay': 'var(--transition-delays-0)'
}

export const textTokens = {
  color: 'var(--colors-contrast-text)',
  'color-subtle': 'var(--colors-contrast-text-subtle)',
  'color-contrast': 'var(--colors-contrast-contrast)',
  gradient: 'primary',
  size: 'var(--font-sizes-base)',
  font: 'var(--fonts-base)',
  weight: 'var(--font-weights-base)',
  'line-height': 'var(--line-heights-base)',
  'letter-spacing': 'var(--letter-spacings-base)',
  gap: '0',
  transform: 'none'
}

export const boxTokens = {
  background: 'var(--colors-contrast-bg)',
  'border-top-style': 'var(--border-styles-solid)',
  'border-left-style': 'var(--border-styles-solid)',
  'border-right-style': 'var(--border-styles-solid)',
  'border-bottom-style': 'var(--border-styles-solid)',
  'border-top-width': 'var(--border-widths-0)',
  'border-left-width': 'var(--border-widths-0)',
  'border-right-width': 'var(--border-widths-0)',
  'border-bottom-width': 'var(--border-widths-0)',
  'border-top-color': 'var(--colors-contrast-border)',
  'border-left-color': 'var(--colors-contrast-border)',
  'border-right-color': 'var(--colors-contrast-border)',
  'border-bottom-color': 'var(--colors-contrast-border)',
  shadow: 'var(--shadows-sm)',
  'padding-top': 'var(--spacings-base)',
  'padding-bottom': 'var(--spacings-base)',
  'padding-left': 'var(--spacings-base)',
  'padding-right': 'var(--spacings-base)',
  gap: 'var(--spacings-base)',
  'radii-top-right': 'var(--radii-sm)',
  'radii-top-left': 'var(--radii-sm)',
  'radii-bottom-right': 'var(--radii-sm)',
  'radii-bottom-left': 'var(--radii-sm)',
  'z-index': 'var(-z-indices-auto)'
}

export const seperatorTokens = {
  color: 'var(--colors-contrast-border)',
  size: 'var(--sizings-px)',
  gap: 'var(--spacings-base)',
  alignment: 'center',
  styling: 'solid'
}

export const spacerTokens = {
  size: 'var(--spacings-base)'
}

export const componentTokens = {
  text: textTokens,
  box: boxTokens,
  seperator: seperatorTokens,
  spacer: spacerTokens
}
