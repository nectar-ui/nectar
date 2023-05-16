import { Component } from '@nectar-ui/types'
import { forwardRef } from 'react'

export type PrimitiveOwnProps = {}

export type PrimitiveComponent = Component<'div', PrimitiveOwnProps>

export const Primitive: PrimitiveComponent = forwardRef(({ as: Comp = 'div', ...props }, ref) => (
	<Comp {...props} ref={ref} />
))
