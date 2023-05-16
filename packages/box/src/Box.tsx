import { Primitive } from '@nectar-ui/primitive'
import {
	Colors,
	borderStyles,
	borderWidths,
	colors,
	fonts,
	radii,
	shadows,
	sizings,
	spacings,
	zIndices
} from '@nectar-ui/tokens'
import { Component } from '@nectar-ui/types'
import { clsx } from 'clsx'
import { CSSProperties, forwardRef } from 'react'
import styles from './Box.module.css'

type BoxElements = 'div' | 'span' | 'section' | 'legend' | 'ul' | 'li'

type BoxVariants =
	| 'primary'
	| 'primarySubtle'
	| 'warning'
	| 'warningSubtle'
	| 'success'
	| 'successSubtle'
	| 'info'
	| 'infoSubtle'
	| 'danger'
	| 'dangerSubtle'

export interface BoxOwnProps {
	background?: CSSProperties['background'] | Colors

	color?: Colors

	borderColor?: CSSProperties['borderColor'] | keyof typeof colors
	borderStyle?: CSSProperties['borderStyle'] | keyof typeof borderStyles
	borderWidth?: CSSProperties['borderWidth'] | keyof typeof borderWidths

	radii?: CSSProperties['borderRadius'] | keyof typeof radii

	borderTopWidth?: CSSProperties['borderWidth'] | keyof typeof borderWidths
	borderRightWidth?: CSSProperties['borderWidth'] | keyof typeof borderWidths
	borderBottomWidth?: CSSProperties['borderWidth'] | keyof typeof borderWidths
	borderLeftWidth?: CSSProperties['borderWidth'] | keyof typeof borderWidths

	family?: CSSProperties['fontFamily'] | keyof typeof fonts

	minHeight?: CSSProperties['minHeight'] | keyof typeof sizings
	minWidth?: CSSProperties['minWidth'] | keyof typeof sizings
	maxWidth?: CSSProperties['maxWidth'] | keyof typeof sizings
	width?: CSSProperties['width'] | keyof typeof sizings

	overflowX?: React.CSSProperties['overflowX']
	overflowY?: React.CSSProperties['overflowY']

	padding?: CSSProperties['padding'] | keyof typeof spacings
	paddingTop?: CSSProperties['paddingTop'] | keyof typeof spacings
	paddingBottom?: CSSProperties['paddingBottom'] | keyof typeof spacings
	paddingLeft?: CSSProperties['paddingLeft'] | keyof typeof spacings
	paddingRight?: CSSProperties['paddingRight'] | keyof typeof spacings
	paddingX?: CSSProperties['padding'] | keyof typeof spacings
	paddingY?: CSSProperties['padding'] | keyof typeof spacings

	shadow?: CSSProperties['boxShadow'] | keyof typeof shadows

	position?: React.CSSProperties['position']
	top?: CSSProperties['top'] | keyof typeof spacings
	bottom?: CSSProperties['bottom'] | keyof typeof spacings
	left?: CSSProperties['left'] | keyof typeof spacings
	right?: CSSProperties['right'] | keyof typeof spacings

	variant?: BoxVariants

	zIndex?: CSSProperties['zIndex'] | keyof typeof zIndices
}

export type BoxComponent = Component<BoxElements, BoxOwnProps>

export const Box: BoxComponent = forwardRef(
	(
		{
			as = 'div',
			variant,
			children,
			//background,
			//color,
			//borderColor,
			//borderStyle,
			//borderWidth,
			//borderBottomWidth,
			//borderTopWidth,
			//borderLeftWidth,
			//borderRightWidth,
			//radii,
			//family,
			//minHeight,
			//minWidth,
			//maxWidth,
			//overflowX,
			//overflowY,
			//padding,
			//paddingTop,
			//paddingBottom,
			//paddingLeft,
			//paddingRight,
			//shadow,
			//width,
			//position,
			//top,
			//bottom,
			//right,
			//left,
			//zIndex,
			...restProps
		},
		ref
	) => {
		/*const style = {
			'--box-color': color ? `var(--colors-${color})` : undefined,
			'--box-background': background ? `var(--colors-${background})` : undefined,
			'--box-border-color': borderColor
				? borderColor === 'transparent'
					? 'transparent'
					: `var(--color-${borderColor})`
				: undefined,
			'--box-border-style': borderStyle,
			'--box-border-radius': warn ? `var(--border-radius-${borderRadius})` : undefined,
			'--box-border-radius-end-start': borderRadiusEndStart
				? `var(--border-radius-${borderRadiusEndStart})`
				: undefined,
			'--box-border-radius-end-end': borderRadiusEndEnd
				? `var(--border-radius-${borderRadiusEndEnd})`
				: undefined,
			'--box-border-radius-start-start': borderRadiusStartStart
				? `var(--border-radius-${borderRadiusStartStart})`
				: undefined,
			'--box-border-radius-start-end': borderRadiusStartEnd
				? `var(--border-radius-${borderRadiusStartEnd})`
				: undefined,
			'--box-border-width': borderWidth ? `var(--border-width-${borderWidth})` : undefined,
			'--box-border-top-width': borderBlockStartWidth
				? `var(--border-width-${borderBlockStartWidth})`
				: undefined,
			'--box-border-bottom-width': borderBlockEndWidth
				? `var(--border-width-${borderBlockEndWidth})`
				: undefined,
			'--box-border-inline-start-width': borderInlineStartWidth
				? `var(--border-width-${borderInlineStartWidth})`
				: undefined,
			'--box-border-inline-end-width': borderInlineEndWidth
				? `var(--border-width-${borderInlineEndWidth})`
				: undefined,
			'--box-min-height': minHeight,
			'--box-min-width': minWidth,
			'--box-max-width': maxWidth,
			'--box-outline-color': outlineColor ? `var(--color-${outlineColor})` : undefined,
			'--box-outline-style': outlineStyleValue,
			'--box-outline-width': outlineWidth ? `var(--border-width-${outlineWidth})` : undefined,
			'--box-overflow-x': overflowX,
			'--box-overflow-y': overflowY,
			...getResponsiveProps('box', 'padding-block-end', 'space', paddingBlockEnd || padding),
			...getResponsiveProps('box', 'padding-block-start', 'space', paddingBlockStart || padding),
			...getResponsiveProps('box', 'padding-inline-start', 'space', paddingInlineStart || padding),
			...getResponsiveProps('box', 'padding-inline-end', 'space', paddingInlineEnd || padding),
			'--box-shadow': shadow ? `var(--shadow-${shadow})` : undefined,
			'--box-width': width,
			position,
			'--box-inset-block-start': insetBlockStart ? `var(--space-${insetBlockStart})` : undefined,
			'--box-inset-block-end': insetBlockEnd ? `var(--space-${insetBlockEnd})` : undefined,
			'--box-inset-inline-start': insetInlineStart ? `var(--space-${insetInlineStart})` : undefined,
			'--box-inset-inline-end': insetInlineEnd ? `var(--space-${insetInlineEnd})` : undefined,
			zIndex,
			opacity
		} as React.CSSProperties
		*/

		return (
			<Primitive as={as} className={clsx(styles.box, variant)} ref={ref} {...restProps}>
				{children}
			</Primitive>
		)
	}
)
