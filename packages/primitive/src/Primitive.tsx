import { forwardRef } from 'react'

type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2

type MergeProps<E, P = {}> = P &
	Merge<E extends React.ElementType ? React.ComponentPropsWithRef<E> : never, P>

/**
 * Infers the OwnProps if E is a ForwardRefExoticComponentWithAs
 */
export type OwnProps<E> = E extends Component<any, infer P> ? P : {}

/**
 * Infers the JSX.IntrinsicElement if E is a ForwardRefExoticComponentWithAs
 */
export type IntrinsicElement<E> = E extends Component<infer I, any> ? I : never

export interface Component<Element, OwnProps = {}>
	extends React.ForwardRefExoticComponent<
		MergeProps<Element, OwnProps & PrimitiveOwnProps<Element>>
	> {
	<As extends keyof JSX.IntrinsicElements>(
		props: MergeProps<As, OwnProps & PrimitiveOwnProps<As>>
	): React.ReactElement | null
	<
		As extends React.ElementType<any>,
		AsWithProps = As extends React.ElementType<infer P> ? React.ElementType<P> : never
	>(
		props: MergeProps<AsWithProps, OwnProps & PrimitiveOwnProps<AsWithProps>>
	): React.ReactElement | null
}

export type PrimitiveOwnProps<As = unknown> = {
	filterProps?: string[]
	as?: As
}

export type PrimitiveComponent = Component<'div', PrimitiveOwnProps>

export const Primitive: PrimitiveComponent = forwardRef(
	({ as: Comp = 'div', filterProps, ...props }, ref) => {
		filterProps?.forEach(
			prop => Object.hasOwn(props, prop) && delete props[prop as keyof typeof props]
		)
		return <Comp {...props} ref={ref} />
	}
)
