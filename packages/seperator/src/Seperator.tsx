import { Primitive, type Component } from '@nectar-ui/primitive'
import type { ComponentStyles } from '@nectar-ui/tokens'
import { colorTokens, sizingTokens, spacingTokens } from '@nectar-ui/tokens'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
import styles from './Seperator.module.css'

export type SeperatorVariants = 'horizontal' | 'vertical'

export interface SeperatorOwnProps {
  /** Adjust text color. */
  color?: keyof typeof colorTokens | React.CSSProperties['color']
  /** Adjust bottom margin. */
  gap?: keyof typeof spacingTokens | React.CSSProperties['marginBottom']
  /** Adjust size of seperator. */
  size?: keyof typeof sizingTokens | React.CSSProperties['height']
  /** Adjust styling of seperator. */
  styling?: 'solid' | 'dashed'
  /** Adjust text alignment. */
  alignment?: 'left' | 'center' | 'right'
  /** Adjust seperator variant. */
  variant?: SeperatorVariants
}

export type SeperatorComponent = Component<'div', SeperatorOwnProps>

/**
 * A horizontal or vertical rule between elements.
 */
export const Seperator = forwardRef(
  (
    {
      as = 'div',
      variant = 'horizontal',
      alignment = 'center',
      color,
      size,
      gap,
      styling,
      className,
      ...props
    },
    ref
  ) => {
    const style: ComponentStyles = {}

    if (color) {
      style['--seperator-color'] =
        color in colorTokens ? `var(--colors-${color})` : color
    }
    if (gap) {
      style['--seperator-gap'] =
        gap in spacingTokens ? `var(--spacings-${gap})` : gap
    }
    if (size) {
      style['--seperator-size'] =
        size in sizingTokens ? `var(--sizings-${size})` : size
    }
    if (styling) {
      style['--seperator-styling'] = styling
    }

    const classNames = clsx(
      styles.seperator,
      styles[alignment],
      styles[variant],
      className
    )

    return (
      <Primitive
        as={as}
        ref={ref}
        className={classNames}
        style={style}
        {...props}
      />
    )
  }
) as SeperatorComponent
