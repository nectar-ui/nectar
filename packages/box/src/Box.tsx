import { Primitive, type Component } from '@nectar-ui/primitive'
import {
	ComponentStyles,
	borderStyleTokens,
	borderWidthTokens,
	colorTokens,
	fontSizeTokens,
	fontTokens,
	fontWeightTokens,
	letterSpacingTokens,
	lineHeightTokens,
	radiiTokens,
	shadowTokens,
	sizingTokens,
	spacingTokens,
	zIndiceTokens
} from '@nectar-ui/tokens'
import { clsx } from 'clsx'
import { CSSProperties, forwardRef } from 'react'
import styles from './Box.module.css'

export const boxElements = ['div', 'span', 'section', 'legend', 'ul', 'li'] as const
export type BoxElements = (typeof boxElements)[number]

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
	'warningSubtle',
	'success',
	'successSubtle'
] as const
export type BoxVariants = (typeof boxVariants)[number]

export interface BoxOwnProps {
	/** Adjust the rendered html element. */
	as?: BoxElements
	/** Adjust background color. */
	background?: keyof typeof colorTokens | CSSProperties['background']
	/** Adjust text color. */
	color?: keyof typeof colorTokens | CSSProperties['color']
	/** Adjust border radius. */
	radii?: keyof typeof radiiTokens | CSSProperties['borderRadius']
	/** Adjust top left border radius. */
	radiiTopLeft?: keyof typeof radiiTokens | CSSProperties['borderTopLeftRadius']
	/** Adjust top right border radius. */
	radiiTopRight?: keyof typeof radiiTokens | CSSProperties['borderTopRightRadius']
	/** Adjust bottom right border radius. */
	radiiBottomRight?: keyof typeof radiiTokens | CSSProperties['borderBottomRightRadius']
	/** Adjust botttom left border radius. */
	radiiBottomLeft?: keyof typeof radiiTokens | CSSProperties['borderBottomLeftRadius']
	/** Adjust border width. */
	borderWidth?: keyof typeof borderWidthTokens | CSSProperties['borderWidth']
	/** Adjust top border width. */
	borderTopWidth?: keyof typeof borderWidthTokens | CSSProperties['borderTopWidth']
	/** Adjust bottom border width. */
	borderBottomWidth?: keyof typeof borderWidthTokens | CSSProperties['borderBottomWidth']
	/** Adjust left border width. */
	borderLeftWidth?: keyof typeof borderWidthTokens | CSSProperties['borderLeftWidth']
	/** Adjust right border width. */
	borderRightWidth?: keyof typeof borderWidthTokens | CSSProperties['borderRightWidth']
	/** Adjust border style. */
	borderStyle?: keyof typeof borderStyleTokens | CSSProperties['borderStyle']
	/** Adjust top border style. */
	borderTopStyle?: keyof typeof borderStyleTokens | CSSProperties['borderTopStyle']
	/** Adjust bottom border style. */
	borderBottomStyle?: keyof typeof borderStyleTokens | CSSProperties['borderBottomStyle']
	/** Adjust left border style. */
	borderLeftStyle?: keyof typeof borderStyleTokens | CSSProperties['borderLeftStyle']
	/** Adjust right border style. */
	borderRightStyle?: keyof typeof borderStyleTokens | CSSProperties['borderRightStyle']
	/** Adjust border color. */
	borderColor?: keyof typeof colorTokens | CSSProperties['borderColor']
	/** Adjust right border color. */
	borderRightColor?: keyof typeof colorTokens | CSSProperties['borderRightColor']
	/** Adjust left border color. */
	borderLeftColor?: keyof typeof colorTokens | CSSProperties['borderLeftColor']
	/** Adjust bottom border color. */
	borderBottomColor?: keyof typeof colorTokens | CSSProperties['borderBottomColor']
	/** Adjust top border color. */
	borderTopColor?: keyof typeof colorTokens | CSSProperties['borderTopColor']
	/** Adjust font size. */
	fontSize?: keyof typeof fontSizeTokens | CSSProperties['fontSize']
	/** Adjust font weight. */
	fontWeight?: keyof typeof fontWeightTokens | CSSProperties['fontWeight']
	/** Adjust font family. */
	font?: keyof typeof fontTokens | CSSProperties['fontFamily']
	/** Adjust line height. */
	lineHeight?: keyof typeof lineHeightTokens | CSSProperties['lineHeight']
	/** Adjust letter spacing. */
	letterSpacing?: keyof typeof letterSpacingTokens | CSSProperties['letterSpacing']
	/** Adjust minimum height. */
	minHeight?: keyof typeof sizingTokens | CSSProperties['minHeight']
	/** Adjust minimum width. */
	minWidth?: keyof typeof sizingTokens | CSSProperties['minWidth']
	/** Adjust maximum width. */
	maxWidth?: keyof typeof sizingTokens | CSSProperties['maxWidth']
	/** Adjust width. */
	width?: keyof typeof sizingTokens | CSSProperties['width']
	/** Adjust horizontal overflow. */
	overflowX?: CSSProperties['overflowX']
	/** Adjust vertical overflow. */
	overflowY?: CSSProperties['overflowY']
	/** Adjust padding. */
	padding?: keyof typeof spacingTokens | CSSProperties['padding']
	/** Adjust top padding. */
	paddingTop?: keyof typeof spacingTokens | CSSProperties['paddingTop']
	/** Adjust bottom padding. */
	paddingBottom?: keyof typeof spacingTokens | CSSProperties['paddingBottom']
	/** Adjust left padding. */
	paddingLeft?: keyof typeof spacingTokens | CSSProperties['paddingLeft']
	/** Adjust right padding. */
	paddingRight?: keyof typeof spacingTokens | CSSProperties['paddingRight']
	/** Adjust horizontal padding. */
	paddingX?: keyof typeof spacingTokens | CSSProperties['padding']
	/** Adjust vertical padding. */
	paddingY?: keyof typeof spacingTokens | CSSProperties['padding']
	/** Adjust box spacing. */
	gap?: keyof typeof spacingTokens | CSSProperties['margin']
	/** Adjust box shadow. */
	shadow?: keyof typeof shadowTokens | CSSProperties['boxShadow']
	/** Adjust position. */
	position?: CSSProperties['position']
	/** Adjust top positioning. */
	top?: keyof typeof spacingTokens | CSSProperties['top']
	/** Adjust bottom positioning. */
	bottom?: keyof typeof spacingTokens | CSSProperties['bottom']
	/** Adjust left positioning. */
	left?: keyof typeof spacingTokens | CSSProperties['left']
	/** Adjust right positioning. */
	right?: keyof typeof spacingTokens | CSSProperties['right']
	/** Choose a style variant. */
	variant?: BoxVariants
	/** Adjust z index. */
	zIndex?: keyof typeof zIndiceTokens | CSSProperties['zIndex']
}

export type BoxComponent = Component<BoxElements, BoxOwnProps>

/**
 * The box component.
 */
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
			borderTopColor,
			borderBottomColor,
			borderRightColor,
			borderLeftColor,
			borderStyle,
			borderTopStyle,
			borderLeftStyle,
			borderRightStyle,
			borderBottomStyle,
			borderWidth,
			borderTopWidth,
			borderRightWidth,
			borderBottomWidth,
			borderLeftWidth,
			radii,
			radiiTopRight,
			radiiTopLeft,
			radiiBottomRight,
			radiiBottomLeft,
			minHeight,
			minWidth,
			maxWidth,
			width,
			overflowX,
			overflowY,
			padding,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingX,
			paddingY,
			gap,
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
			style['--text-color'] = color in colorTokens ? `var(--colors-${color})` : color
		}
		if (font) {
			style['--text-font'] = font in fontTokens ? `var(--fonts-${font})` : font
		}
		if (fontSize) {
			style['--text-size'] = fontSize in fontSizeTokens ? `var(--font-sizes-${fontSize})` : fontSize
		}
		if (fontWeight) {
			style['--text-weight'] =
				fontWeight in fontWeightTokens ? `var(--font-weights-${fontWeight})` : fontWeight
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
		if (background) {
			style['--box-background'] =
				background in colorTokens ? `var(--colors-${background})` : background
		}
		if (borderColor) {
			style['--box-border-top-color'] =
				borderColor in colorTokens ? `var(--colors-${borderColor})` : borderColor
			style['--box-border-right-color'] = style['--box-border-top-color']
			style['--box-border-bottom-color'] = style['--box-border-top-color']
			style['--box-border-left-color'] = style['--box-border-top-color']
		}
		if (borderTopColor) {
			style['--box-border-top-color'] =
				borderTopColor in colorTokens ? `var(--colors-${borderTopColor})` : borderTopColor
		}
		if (borderBottomColor) {
			style['--box-border-bottom-color'] =
				borderBottomColor in colorTokens ? `var(--colors-${borderBottomColor})` : borderBottomColor
		}
		if (borderLeftColor) {
			style['--box-border-left-color'] =
				borderLeftColor in colorTokens ? `var(--colors-${borderLeftColor})` : borderLeftColor
		}
		if (borderRightColor) {
			style['--box-border-right-color'] =
				borderRightColor in colorTokens ? `var(--colors-${borderRightColor})` : borderRightColor
		}
		if (borderStyle) {
			style['--box-border-top-style'] =
				borderStyle in borderStyleTokens ? `var(--border-styles-${borderStyle})` : borderStyle
			style['--box-border-right-style'] = style['--box-border-top-style']
			style['--box-border-bottom-style'] = style['--box-border-top-style']
			style['--box-border-left-style'] = style['--box-border-top-style']
		}
		if (borderTopStyle) {
			style['--box-border-top-style'] =
				borderTopStyle in borderStyleTokens
					? `var(--border-styles-${borderTopStyle})`
					: borderTopStyle
		}
		if (borderBottomStyle) {
			style['--box-border-bottom-style'] =
				borderBottomStyle in borderStyleTokens
					? `var(--border-styles-${borderBottomStyle})`
					: borderBottomStyle
		}
		if (borderLeftStyle) {
			style['--box-border-left-style'] =
				borderLeftStyle in borderStyleTokens
					? `var(--border-styles-${borderLeftStyle})`
					: borderLeftStyle
		}
		if (borderRightStyle) {
			style['--box-border-right-style'] =
				borderRightStyle in borderStyleTokens
					? `var(--border-styles-${borderRightStyle})`
					: borderRightStyle
		}
		if (borderWidth) {
			style['--box-border-top-width'] =
				borderWidth in borderWidthTokens ? `var(--border-widths-${borderWidth})` : borderWidth
			style['--box-border-right-width'] = style['--box-border-top-width']
			style['--box-border-bottom-width'] = style['--box-border-top-width']
			style['--box-border-left-width'] = style['--box-border-top-width']
		}
		if (borderTopWidth) {
			style['--box-border-top-width'] =
				borderTopWidth in borderWidthTokens
					? `var(--border-widths-${borderTopWidth})`
					: borderTopWidth
		}
		if (borderBottomWidth) {
			style['--box-border-bottom-width'] =
				borderBottomWidth in borderWidthTokens
					? `var(--border-widths-${borderBottomWidth})`
					: borderBottomWidth
		}
		if (borderRightWidth) {
			style['--box-border-right-width'] =
				borderRightWidth in borderWidthTokens
					? `var(--border-widths-${borderRightWidth})`
					: borderRightWidth
		}
		if (borderLeftWidth) {
			style['--box-border-left-width'] =
				borderLeftWidth in borderWidthTokens
					? `var(--border-widths-${borderLeftWidth})`
					: borderLeftWidth
		}
		if (radii) {
			style['--box-radii-top-left'] = radii in radiiTokens ? `var(--radii-${radii})` : radii
			style['--box-radii-top-right'] = style['--box-radii-top-left']
			style['--box-radii-bottom-right'] = style['--box-radii-top-left']
			style['--box-radii-bottom-left'] = style['--box-radii-top-left']
		}
		if (radiiTopLeft) {
			style['--box-radii-top-left'] =
				radiiTopLeft in radiiTokens ? `var(--radii-${radiiTopLeft})` : radiiTopLeft
		}
		if (radiiTopRight) {
			style['--box-radii-top-right'] =
				radiiTopRight in radiiTokens ? `var(--radii-${radiiTopRight})` : radiiTopRight
		}
		if (radiiBottomLeft) {
			style['--box-radii-bottom-left'] =
				radiiBottomLeft in radiiTokens ? `var(--radii-${radiiBottomLeft})` : radiiBottomLeft
		}
		if (radiiBottomRight) {
			style['--box-radii-bottom-right'] =
				radiiBottomRight in radiiTokens ? `var(--radii-${radiiBottomRight})` : radiiBottomRight
		}
		if (shadow) {
			style['--box-shadow'] = shadow in shadowTokens ? `var(--shadows-${shadow})` : shadow
		}

		if (minHeight) {
			style['minHeight'] = minHeight in sizingTokens ? `var(--sizings-${minHeight})` : minHeight
		}
		if (minWidth) {
			style['minWidth'] = minWidth in sizingTokens ? `var(--sizings-${minWidth})` : minWidth
		}
		if (maxWidth) {
			style['maxWidth'] = maxWidth in sizingTokens ? `var(--sizings-${maxWidth})` : maxWidth
		}
		if (width) {
			style['width'] = width in sizingTokens ? `var(--sizings-${width})` : width
		}
		if (overflowX) {
			style['overflowX'] = overflowX
		}
		if (overflowY) {
			style['overflowY'] = overflowY
		}
		if (gap) {
			style['--box-gap'] = gap in spacingTokens ? `var(--spacings-${gap})` : gap
		}
		if (padding) {
			style['--box-padding-top'] = padding in spacingTokens ? `var(--spacings-${padding})` : padding
			style['--box-padding-right'] = style['--box-padding-top']
			style['--box-padding-bottom'] = style['--box-padding-top']
			style['--box-padding-left'] = style['--box-padding-top']
		}
		if (paddingTop) {
			style['--box-padding-top'] =
				paddingTop in spacingTokens ? `var(--spacings-${paddingTop})` : paddingTop
		}
		if (paddingLeft) {
			style['--box-padding-left'] =
				paddingLeft in spacingTokens ? `var(--spacings-${paddingLeft})` : paddingLeft
		}
		if (paddingRight) {
			style['--box-padding-right'] =
				paddingRight in spacingTokens ? `var(--spacings-${paddingRight})` : paddingRight
		}
		if (paddingBottom) {
			style['--box-padding-bottom'] =
				paddingBottom in spacingTokens ? `var(--spacings-${paddingBottom})` : paddingBottom
		}
		if (paddingX) {
			style['--box-padding-left'] =
				paddingX in spacingTokens ? `var(--spacings-${paddingX})` : paddingX
			style['--box-padding-right'] = style['--box-padding-left']
		}
		if (paddingY) {
			style['--box-padding-top'] =
				paddingY in spacingTokens ? `var(--spacings-${paddingY})` : paddingY
			style['--box-padding-bottom'] = style['--box-padding-top']
		}
		if (position) {
			style['position'] = position
		}
		if (top) {
			style['top'] = top in sizingTokens ? `var(--sizings-${top})` : top
		}
		if (bottom) {
			style['bottom'] = bottom in sizingTokens ? `var(--sizings-${bottom})` : bottom
		}
		if (left) {
			style['left'] = left in sizingTokens ? `var(--sizings-${left})` : left
		}
		if (right) {
			style['right'] = right in sizingTokens ? `var(--sizings-${right})` : right
		}
		if (zIndex) {
			style['--box-z-index'] = zIndex in zIndiceTokens ? `var(--z-indices-${zIndex})` : zIndex
		}

		const classNames = clsx(styles.box, variant && styles[variant], className)

		return (
			<Primitive as={as} ref={ref} className={classNames} style={style} {...restProps}>
				{children}
			</Primitive>
		)
	}
)
