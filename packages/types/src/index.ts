import * as React from 'react'
/* -------------------------------------------------------------------------------------------------
 * Utility types
 * -----------------------------------------------------------------------------------------------*/

export type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2

export type MergeProps<E, P = {}> = P &
	Merge<E extends React.ElementType ? React.ComponentPropsWithRef<E> : never, P>

/* -------------------------------------------------------------------------------------------------
 * Component types
 * -----------------------------------------------------------------------------------------------*/

/**
 * Infers the OwnProps if E is a ForwardRefExoticComponentWithAs
 */
export type OwnProps<E> = E extends Component<any, infer P> ? P : {}

/**
 * Infers the JSX.IntrinsicElement if E is a ForwardRefExoticComponentWithAs
 */
export type IntrinsicElement<E> = E extends Component<infer I, any> ? I : never

export interface Component<Element, OwnProps = {}>
	extends React.ForwardRefExoticComponent<MergeProps<Element, OwnProps & { as?: Element }>> {
	<As extends keyof JSX.IntrinsicElements>(
		props: MergeProps<As, OwnProps & { as: As }>
	): React.ReactElement | null
	<
		As extends React.ElementType<any>,
		AsWithProps = As extends React.ElementType<infer P> ? React.ElementType<P> : never
	>(
		props: MergeProps<AsWithProps, OwnProps & { as: AsWithProps }>
	): React.ReactElement | null
}

/* -------------------------------------------------------------------------------------------------
 * Configuration types
 * -----------------------------------------------------------------------------------------------*/

export type Token = boolean | number | string

export interface Scale {
	[token: string]: Token | Scale
}

export interface Mode {
	[scale: string]: Scale
}

export interface Tokens {
	[mode: string]: Mode
}

export interface MediaQueries {
	[query: string]: string
}

export interface Selectors {
	[selector: string]: string
}

export type PropertyTransform = <T extends keyof React.CSSProperties>(
	value: React.CSSProperties[T]
) => React.CSSProperties

export interface Properties {
	[property: string]: PropertyTransform
}

/**
 * The nectarUi configuration object.
 */
export interface Configuration {
	/**
	 * A map of design tokens organized by color mode. Tokens will be
	 * transformed into CSS custom properties. The `base` mode
	 * tokens are assigned to the `:root` selector. All other modes
	 * are assigned to a class selector with the same name as the
	 * mode (eg: `.dark`).
	 */
	tokens?: Tokens

	/**
	 * A map of media query aliases. These aliases can be
	 * used in the `@media` CSS at-rule via the `@media(--sm)`
	 * syntax. They will be substuted with their corresponding
	 * values at build time.
	 */
	mediaQueries?: MediaQueries

	/**
	 * A map of selector aliases. These aliases can be used
	 * as selectors in your CSS via the `:--headings` syntax. They
	 * will be substuted with their corresponding values at build
	 * time.
	 */
	selectors?: Selectors

	/**
	 * A map of custom css property functions. The values provided to your
	 * custom css properties are passed to the associated function. These
	 * functions should return an object of css properties that will replace
	 * the custom property at build time.
	 */
	properties?: Properties
}
