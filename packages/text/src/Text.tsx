import { Primitive } from '@nectar-ui/primitive'
import {
	Colors,
	FontSizes,
	FontWeights,
	Fonts,
	LetterSpacings,
	LineHeights,
	tokens
} from '@nectar-ui/tokens'
import { Component } from '@nectar-ui/types'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
import styles from './Text.module.css'

type TextElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'legend'

type TextVariant =
	| 'paragraph'
	| 'lead'
	| 'caps'
	| 'caption'
	| 'footnote'
	| 'display'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'

const ElementsForTextVariants: Record<TextVariant, TextElements> = {
	paragraph: 'p',
	lead: 'p',
	caps: 'span',
	caption: 'span',
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
	/** Adjust text color. */
	color?: Colors
	/** Adjust font size. */
	size?: FontSizes
	/** Adjust font weight. */
	fontWeight?: FontWeights
	/** Adjust font family. */
	family?: Fonts
	/** Adjust line height. */
	lineHeight?: LineHeights
	/** Adjust letter spacing. */
	letterSpacing?: LetterSpacings
	/** Text variants */
	variant?: TextVariant
}

export type TextComponent = Component<TextElements, TextOwnProps>

export interface TextStyle extends React.CSSProperties {
	'--text-color'?: Colors | React.CSSProperties['color']
	'--text-size'?: FontSizes | React.CSSProperties['fontSize']
	'--text-weight'?: FontWeights | React.CSSProperties['fontWeight']
	'--text-family'?: Fonts | React.CSSProperties['fontFamily']
	'--text-line-height'?: LineHeights | React.CSSProperties['lineHeight']
	'--text-letter-spacing'?: LetterSpacings | React.CSSProperties['letterSpacing']
	'--text-subtle-color'?: Colors | React.CSSProperties['color']
	'--text-contrast-color'?: Colors | React.CSSProperties['color']
}

export const Text: TextComponent = forwardRef(
	(
		{
			variant,
			color,
			fontWeight,
			size,
			family,
			lineHeight,
			letterSpacing,
			as,
			className,
			children,
			...props
		},
		ref
	) => {
		const classNames = clsx(styles.text, variant && styles[variant], className)

		const style: TextStyle = {}
		if (color) {
			style['--text-color'] = color in tokens.colors ? `var(--colors-${color})` : color
		}
		if (fontWeight) {
			style['--text-weight'] =
				fontWeight in tokens.fontWeights ? `var(--font-weights-${fontWeight})` : fontWeight
		}
		if (size) {
			style['--text-size'] = size in tokens.fontSizes ? `var(--font-sizes-${size})` : size
		}
		if (family) {
			style['fontFamily'] = family in tokens.fonts ? `var(--fonts-${family})` : family
		}
		if (lineHeight) {
			style['lineHeight'] =
				lineHeight in tokens.lineHeights ? `var(--line-heights-${lineHeight})` : lineHeight
		}
		if (letterSpacing) {
			style['letterSpacing'] =
				letterSpacing in tokens.letterSpacings
					? `var(--letter-spacings-${letterSpacing})`
					: letterSpacing
		}

		const el: TextElements = as || (variant && ElementsForTextVariants[variant]) || 'span'

		return (
			<Primitive as={el} ref={ref} className={classNames} style={style} {...props}>
				{children}
			</Primitive>
		)
	}
)
