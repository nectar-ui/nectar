import { Primitive } from '@nectar-ui/primitive'
import { ComponentStyles, tokens } from '@nectar-ui/tokens'
import { Component } from '@nectar-ui/types'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
import styles from './Text.module.css'

export const textElements = [
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'p',
	'span',
	'legend',
	'strong',
	'em',
	'del',
	'ins',
	'sub',
	'sup'
] as const

export const textVariants = [
	'small',
	'large',
	'lead',
	'caps',
	'footnote',
	'display',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6'
] as const

export type TextElements = (typeof textElements)[number]

export type TextVariants = (typeof textVariants)[number]

export const ElementsForTextVariants: Record<TextVariants, TextElements> = {
	small: 'p',
	large: 'p',
	lead: 'p',
	caps: 'span',
	footnote: 'span',
	display: 'h1',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6'
}

export interface TextOwnProps {
	/** Adjust the rendered html element. */
	as?: TextElements
	/** Adjust text color. */
	color?: keyof typeof tokens.colors | React.CSSProperties['color']
	/** Adjust font size. */
	fontSize?: keyof typeof tokens.fontSizes | React.CSSProperties['fontSize']
	/** Adjust font weight. */
	fontWeight?: keyof typeof tokens.fontWeights | React.CSSProperties['fontWeight']
	/** Adjust font family. */
	font?: keyof typeof tokens.fonts | React.CSSProperties['fontFamily']
	/** Adjust line height. */
	lineHeight?: keyof typeof tokens.lineHeights | React.CSSProperties['lineHeight']
	/** Adjust letter spacing. */
	letterSpacing?: keyof typeof tokens.letterSpacings | React.CSSProperties['letterSpacing']
	/** Adjust the bottom margin. */
	margin?: keyof typeof tokens.spacings | React.CSSProperties['marginBottom']
	/** Style variants for the text component. */
	variant?: TextVariants
}

export type TextComponent = Component<TextElements, TextOwnProps>

export const Text: TextComponent = forwardRef(
	(
		{
			variant,
			color,
			fontWeight,
			fontSize,
			font,
			lineHeight,
			letterSpacing,
			margin,
			as,
			className,
			children,
			...props
		},
		ref
	) => {
		const style: ComponentStyles = {}
		if (color) {
			style['--text-color'] = color in tokens.colors ? `var(--colors-${color})` : color
		}
		if (fontWeight) {
			style['--text-weight'] =
				fontWeight in tokens.fontWeights ? `var(--font-weights-${fontWeight})` : fontWeight
		}
		if (fontSize) {
			style['--text-size'] =
				fontSize in tokens.fontSizes ? `var(--font-sizes-${fontSize})` : fontSize
		}
		if (font) {
			style['--text-font'] = font in tokens.fonts ? `var(--fonts-${font})` : font
		}
		if (lineHeight) {
			style['--text-line-height'] =
				lineHeight in tokens.lineHeights ? `var(--line-heights-${lineHeight})` : lineHeight
		}
		if (letterSpacing) {
			style['--text-letter-spacing'] =
				letterSpacing in tokens.letterSpacings
					? `var(--letter-spacings-${letterSpacing})`
					: letterSpacing
		}
		if (margin) {
			style['--text-gap'] = margin in tokens.spacings ? `var(--spacings-${margin})` : margin
		}

		const classNames = clsx(styles.text, variant && styles[variant], className)

		const el: TextElements = as || (variant && ElementsForTextVariants[variant]) || 'span'

		return (
			<Primitive as={el} ref={ref} className={classNames} style={style} {...props}>
				{children}
			</Primitive>
		)
	}
)
