import { Primitive, type Component } from '@nectar-ui/primitive'
import {
	ComponentStyles,
	colorTokens,
	fontSizeTokens,
	fontTokens,
	fontWeightTokens,
	letterSpacingTokens,
	lineHeightTokens,
	spacingTokens
} from '@nectar-ui/tokens'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
import styles from './Text.module.css' assert { type: 'css' }

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
export type TextElements = (typeof textElements)[number]

export const textVariants = {
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
} as const
export type TextVariants = keyof typeof textVariants

export interface TextOwnProps {
	/** Adjust the rendered html element. */
	as?: TextElements
	/** Adjust text color. */
	color?: keyof typeof colorTokens | React.CSSProperties['color']
	/** Adjust font size. */
	fontSize?: keyof typeof fontSizeTokens | React.CSSProperties['fontSize']
	/** Adjust font weight. */
	fontWeight?: keyof typeof fontWeightTokens | React.CSSProperties['fontWeight']
	/** Adjust font family. */
	font?: keyof typeof fontTokens | React.CSSProperties['fontFamily']
	/** Adjust line height. */
	lineHeight?: keyof typeof lineHeightTokens | React.CSSProperties['lineHeight']
	/** Adjust letter spacing. */
	letterSpacing?: keyof typeof letterSpacingTokens | React.CSSProperties['letterSpacing']
	/** Adjust the bottom margin. */
	gap?: keyof typeof spacingTokens | React.CSSProperties['marginBottom']
	/** Choose a style variant. */
	variant?: TextVariants
}

export type TextComponent = Component<TextElements, TextOwnProps>

export const Text: TextComponent = forwardRef(
	(
		{
			as = 'span',
			variant,
			color,
			fontWeight,
			fontSize,
			font,
			lineHeight,
			letterSpacing,
			gap,
			className,
			...props
		},
		ref
	) => {
		const style: ComponentStyles = {}

		if (color) {
			style['--text-color'] = color in colorTokens ? `var(--colors-${color})` : color
		}
		if (fontWeight) {
			style['--text-weight'] =
				fontWeight in fontWeightTokens ? `var(--font-weights-${fontWeight})` : fontWeight
		}
		if (fontSize) {
			style['--text-size'] = fontSize in fontSizeTokens ? `var(--font-sizes-${fontSize})` : fontSize
		}
		if (font) {
			style['--text-font'] = font in fontTokens ? `var(--fonts-${font})` : font
		}
		if (lineHeight) {
			style['--text-line-height'] =
				lineHeight in lineHeightTokens ? `var(--line-heights-${lineHeight})` : lineHeight
		}
		if (letterSpacing) {
			style['--text-letter-spacing'] =
				letterSpacing in letterSpacingTokens
					? `var(--letter-spacings-${letterSpacing})`
					: letterSpacing
		}
		if (gap) {
			style['--text-gap'] = gap in spacingTokens ? `var(--spacings-${gap})` : gap
		}

		const classNames = clsx(styles.text, variant && styles[variant], className)

		const el: TextElements = (variant && textVariants[variant]) || as

		return <Primitive as={el} ref={ref} className={classNames} style={style} {...props} />
	}
)
