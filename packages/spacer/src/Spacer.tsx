import { Primitive, type Component } from '@nectar-ui/primitive'
import { ComponentStyles, spacingTokens } from '@nectar-ui/tokens'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
import styles from './Spacer.module.css'

export interface SpacerOwnProps {
	/** Adjust text color. */
	size?: keyof typeof spacingTokens | React.CSSProperties['paddingBottom']
}

export type SpacerComponent = Component<'div', SpacerOwnProps>

export const Spacer: SpacerComponent = forwardRef(
	({ as = 'div', size, className, ...props }, ref) => {
		const style: ComponentStyles = {}

		if (size) {
			style['--spacer-size'] = size in spacingTokens ? `var(--spacings-${size})` : size
		}

		const classNames = clsx(styles.spacer, className)

		return <Primitive as={as} ref={ref} className={classNames} style={style} {...props} />
	}
)
