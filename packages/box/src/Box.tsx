import { Component, PolymorphicRef, PropsWithRef } from '@nectar-ui/core'
import { forwardRef, type ElementType } from 'react'

export type BoxProps<E extends ElementType> = PropsWithRef<E, {}>

export type BoxComponent = Component<BoxProps<ElementType>>

export const Box: BoxComponent = forwardRef(
	<E extends ElementType = 'div'>({ as, children, ...props }: BoxProps<E>, ref?: PolymorphicRef<E>) => {
		const El = as || 'div'

		return (
			<El {...props} ref={ref}>
				{children}
			</El>
		)
	}
)
