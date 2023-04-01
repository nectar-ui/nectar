import type { Component, Props } from '@nectar-ui/core'
import { Box } from '@nectar-ui/box'
import c from 'clsx'
import './Navbar.css'
import { ElementType } from 'react'

export interface NavbarOwnProps {}

export type NavbarProps = Props<'nav', NavbarOwnProps>

export interface NavbarComponents {
	section: Component<Props<ElementType, {}>>
	item: Component<Props<ElementType, {}>>
}
export type NavbarComponent = Component<NavbarProps> & NavbarComponents

export const Navbar: NavbarComponent = ({ children, className, ...props }) => {
	return (
		<Box as="nav" className={c('navbar', className)} {...props}>
			<div className="navbar__container">{children}</div>
		</Box>
	)
}

Navbar.section = ({ children, className, ...props }) => {
	return (
		<Box className={c('navbar__section', className)} {...props}>
			{children}
		</Box>
	)
}

Navbar.item = ({ children, className, ...props }) => {
	return (
		<Box className={c('navbar__item', className)} {...props}>
			{children}
		</Box>
	)
}
