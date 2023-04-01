import type { JSXElementConstructor, ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, ReactElement } from 'react'

export interface GlobalProps<E extends ElementType> {
	as?: E
}

type PropsOf<E extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<
	E,
	ComponentPropsWithoutRef<E>
>

export type PolymorphicRef<E extends ElementType> = ComponentPropsWithRef<E>['ref']

export type Props<E extends ElementType, P = {}> = P & GlobalProps<E> & Omit<PropsOf<E>, keyof (P & GlobalProps<E>)>

export type PropsWithRef<E extends ElementType, P = {}> = Props<E, P> & {
	ref?: PolymorphicRef<E>
}

export type Component<P = {}> = (props: P) => ReactElement | null

/**
 * Tokens.
 *
 * Organized into `modes` > `scales` > `tokens`.
 * Color modes will be converted to css custom properties.
 *
 * The 'base' mode is the default. Custom properties are applied to `:root {}`.
 * All other modes custom properties are appplied to `.mode {}`.
 */
export interface Tokens {
	base: ColorMode
	[mode: string]: ColorMode
}
export interface ColorMode {
	[scale: string]: Scale
}
export interface Scale {
	[token: string]: Token
}
export type Token = boolean | number | string

/**
 * Media Queries.
 */
export interface MediaQueries {
	[query: string]: string
}

/**
 * Selectors.
 */
export interface Selectors {
	[selector: string]: string
}

/**
 * The nectar config object type.
 */
export interface NectarConfig {
	tokens?: Tokens
	mediaQueries?: MediaQueries
	selectors?: Selectors
}
