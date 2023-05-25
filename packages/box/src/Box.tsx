import { Primitive } from '@nectar-ui/primitive'
import { ComponentStyles, tokens } from '@nectar-ui/tokens'
import { Component } from '@nectar-ui/types'
import { clsx } from 'clsx'
import React, { CSSProperties, forwardRef } from 'react'
import styles from './Box.module.css'

export const boxElements = ['div', 'span', 'section', 'legend', 'ul', 'li'] as const

export const boxVariants = [
	'contrast',
	'contrastSubtle',
	'primary',
	'primarySubtle',
	'secondary',
	'secondarySubtle',
	'info',
	'infoSubtle',
	'warning',
	'warningSubtle',
	'danger',
	'dangerSubtle',
	'warning',
	'warningSubtle'
] as const

export type BoxElements = (typeof boxElements)[number]

export type BoxVariants = (typeof boxVariants)[number]

export interface BoxOwnProps {
	as?: BoxElements

	background?: keyof typeof tokens.colors | React.CSSProperties['background']

	color?: keyof typeof tokens.colors | React.CSSProperties['color']

	radii?: keyof typeof tokens.radii | React.CSSProperties['borderRadius']

	borderWidth?: keyof typeof tokens.borderWidths | React.CSSProperties['borderWidth']
	borderStyle?: keyof typeof tokens.borderStyles | React.CSSProperties['borderStyle']
	borderColor?: keyof typeof tokens.colors | React.CSSProperties['borderColor']

	font?: keyof typeof tokens.fonts | React.CSSProperties['fontFamily']
	fontSize?: keyof typeof tokens.fontSizes | React.CSSProperties['fontSize']
	fontWeight?: keyof typeof tokens.fontWeights | React.CSSProperties['fontWeight']
	lineHeight?: keyof typeof tokens.lineHeights | React.CSSProperties['lineHeight']
	letterSpacing?: keyof typeof tokens.letterSpacings | React.CSSProperties['letterSpacing']

	minHeight?: keyof typeof tokens.sizings | CSSProperties['minHeight']
	minWidth?: keyof typeof tokens.sizings | CSSProperties['minWidth']
	maxWidth?: keyof typeof tokens.sizings | CSSProperties['maxWidth']
	width?: keyof typeof tokens.sizings | CSSProperties['width']

	overflow?: React.CSSProperties['overflow']
	overflowX?: React.CSSProperties['overflowX']
	overflowY?: React.CSSProperties['overflowY']

	padding?: React.CSSProperties['padding'] | keyof typeof tokens.spacings
	paddingTop?: React.CSSProperties['paddingTop'] | keyof typeof tokens.spacings
	paddingBottom?: React.CSSProperties['paddingBottom'] | keyof typeof tokens.spacings
	paddingLeft?: React.CSSProperties['paddingLeft'] | keyof typeof tokens.spacings
	paddingRight?: React.CSSProperties['paddingRight'] | keyof typeof tokens.spacings
	paddingX?: React.CSSProperties['padding'] | keyof typeof tokens.spacings
	paddingY?: React.CSSProperties['padding'] | keyof typeof tokens.spacings

	margin?: React.CSSProperties['margin'] | keyof typeof tokens.spacings

	shadow?: React.CSSProperties['boxShadow'] | keyof typeof tokens.shadows

	position?: React.CSSProperties['position']
	top?: React.CSSProperties['top'] | keyof typeof tokens.spacings
	bottom?: React.CSSProperties['bottom'] | keyof typeof tokens.spacings
	left?: React.CSSProperties['left'] | keyof typeof tokens.spacings
	right?: React.CSSProperties['right'] | keyof typeof tokens.spacings

	variant?: BoxVariants

	zIndex?: React.CSSProperties['zIndex'] | keyof typeof tokens.zIndices
}

export type BoxComponent = Component<BoxElements, BoxOwnProps>

export const Box: BoxComponent = forwardRef(
	(
		{
			as = 'div',
			variant,
			children,
			className,
			background,
			color,
			font,
			fontSize,
			fontWeight,
			lineHeight,
			letterSpacing,

			borderColor,
			borderStyle,
			borderWidth,
			radii,

			minHeight,
			minWidth,
			maxWidth,
			width,
			overflow,
			overflowX,
			overflowY,
			padding,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingX,
			paddingY,
			margin,
			shadow,
			position,
			top,
			bottom,
			right,
			left,
			zIndex,
			...restProps
		},
		ref
	) => {
		const style: ComponentStyles = {}
		if (color) {
			style['--text-color'] = color in tokens.colors ? `var(--colors-${color})` : color
		}
		if (font) {
			style['--text-font'] = font in tokens.fonts ? `var(--fonts-${font})` : font
		}
		if (fontSize) {
			style['--text-size'] =
				fontSize in tokens.fontSizes ? `var(--font-sizes-${fontSize})` : fontSize
		}
		if (fontWeight) {
			style['--text-weight'] =
				fontWeight in tokens.fontWeights ? `var(--font-weights-${fontWeight})` : fontWeight
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
		if (background) {
			style['--box-background'] =
				background in tokens.colors ? `var(--colors-${background})` : background
		}
		if (borderColor) {
			style['--box-border-color'] =
				borderColor in tokens.colors ? `var(--colors-${borderColor})` : borderColor
		}
		if (borderStyle) {
			style['--box-border-style'] =
				borderStyle in tokens.borderStyles ? `var(--border-styles-${borderStyle})` : borderStyle
		}
		if (borderWidth) {
			style['--box-border-width'] =
				borderWidth in tokens.borderWidths ? `var(--border-widths-${borderWidth})` : borderWidth
		}
		if (radii) {
			style['--box-radii'] = radii in tokens.radii ? `var(--radii-${radii})` : radii
		}
		if (shadow) {
			style['--box-shadow'] = shadow in tokens.shadows ? `var(--shadows-${shadow})` : shadow
		}

		if (minHeight) {
			style['minHeight'] = minHeight in tokens.sizings ? `var(--sizings-${minHeight})` : minHeight
		}
		if (minWidth) {
			style['minWidth'] = minWidth in tokens.sizings ? `var(--sizings-${minWidth})` : minWidth
		}
		if (maxWidth) {
			style['maxWidth'] = maxWidth in tokens.sizings ? `var(--sizings-${maxWidth})` : maxWidth
		}
		if (width) {
			style['width'] = width in tokens.sizings ? `var(--sizings-${width})` : width
		}
		if (overflow) {
			style['overflow'] = overflow
		}
		if (overflowX) {
			style['overflowX'] = overflowX
		}
		if (overflowY) {
			style['overflowY'] = overflowY
		}
		if (margin) {
			style['--box-gap'] = margin in tokens.spacings ? `var(--spacings-${margin})` : margin
		}
		if (padding) {
			style['padding'] = padding in tokens.spacings ? `var(--spacings-${padding})` : padding
		}
		if (paddingTop) {
			style['paddingTop'] =
				paddingTop in tokens.spacings ? `var(--spacings-${paddingTop})` : paddingTop
		}
		if (paddingLeft) {
			style['paddingLeft'] =
				paddingLeft in tokens.spacings ? `var(--spacings-${paddingLeft})` : paddingLeft
		}
		if (paddingRight) {
			style['paddingRight'] =
				paddingRight in tokens.spacings ? `var(--spacings-${paddingRight})` : paddingRight
		}
		if (paddingBottom) {
			style['paddingBottom'] =
				paddingBottom in tokens.spacings ? `var(--spacings-${paddingBottom})` : paddingBottom
		}
		if (paddingX) {
			style['paddingLeft'] = paddingX in tokens.spacings ? `var(--spacings-${paddingX})` : paddingX
			style['paddingRight'] = style['paddingLeft']
		}
		if (paddingY) {
			style['paddingTop'] = paddingY in tokens.spacings ? `var(--spacings-${paddingY})` : paddingY
			style['paddingBottom'] = style['paddingTop']
		}
		if (position) {
			style['position'] = position
		}
		if (top) {
			style['top'] = top in tokens.sizings ? `var(--sizings-${top})` : top
		}
		if (bottom) {
			style['bottom'] = bottom in tokens.sizings ? `var(--sizings-${bottom})` : bottom
		}
		if (left) {
			style['left'] = left in tokens.sizings ? `var(--sizings-${left})` : left
		}
		if (right) {
			style['right'] = right in tokens.sizings ? `var(--sizings-${right})` : right
		}
		if (zIndex) {
			style['zIndex'] = zIndex in tokens.zIndices ? `var(--z-indices-${zIndex})` : zIndex
		}

		const classNames = clsx(styles.box, variant && styles[variant], className)

		return (
			<Primitive as={as} ref={ref} className={classNames} style={style} {...restProps}>
				{children}
			</Primitive>
		)
	}
)
