import type { PropertiesHyphen } from 'csstype'
import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, JSXElementConstructor, ReactElement } from 'react'

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

export interface MediaQueries {
	[query: string]: string
}

export interface Selectors {
	[selector: string]: string
}

export interface NectarConfig {
	tokens?: Tokens
	mediaQueries?: MediaQueries
	selectors?: Selectors
	properties?: {
		[property: string]: (value: any) => PropertiesHyphen
	}
}
