import { Box } from '@nectar-ui/box'
import type { Component, Props } from '@nectar-ui/core'
import { clsx } from 'clsx'
import { ElementType } from 'react'
import './Navbar.css'

export type NavOwnProps = {}

export type NavbarProps = Props<'nav', NavOwnProps>

export interface NavbarComponents {
	section: Component<Props<ElementType, {}>>
	item: Component<Props<ElementType, {}>>
}
export type NavbarComponent = Component<NavbarProps> & NavbarComponents

export const Navbar: NavbarComponent = ({ children, className, ...props }) => {
	return (
		<Box as="nav" className={clsx('navbar', className)} {...props}>
			<div className="navbar__container">{children}</div>
		</Box>
	)
}

Navbar.section = ({ children, className, ...props }) => {
	return (
		<Box className={clsx('navbar__section', className)} {...props}>
			{children}
		</Box>
	)
}

Navbar.item = ({ children, className, ...props }) => {
	return (
		<Box className={clsx('navbar__item', className)} {...props}>
			{children}
		</Box>
	)
}
