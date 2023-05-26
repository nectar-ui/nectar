import { Primitive, type Component } from '@nectar-ui/primitive'
import { clsx } from 'clsx'
import { ElementType, forwardRef } from 'react'
import styles from './Navbar.module.css' assert { type: 'css' }

type NavbarProps = {}
type NavbarSectionProps = {}
type NavbarItemProps = {}

type NavbarSectionComponent = Component<React.ElementType, NavbarSectionProps>
type NavbarItemComponent = Component<React.ElementType, NavbarItemProps>

interface NavbarComponents {
	section: NavbarSectionComponent
	item: NavbarItemComponent
}

type NavbarComponent = Component<ElementType, NavbarProps> & NavbarComponents

export const Navbar = forwardRef(({ className, children, ...props }, ref) => {
	return (
		<Primitive as="nav" className={clsx(styles.navbar, className)} ref={ref} {...props}>
			<div className={styles.container}>{children}</div>
		</Primitive>
	)
}) as NavbarComponent

Navbar.item = forwardRef(({ children, className, ...props }, ref) => {
	return (
		<Primitive as="div" className={clsx(styles.item, className)} ref={ref} {...props}>
			{children}
		</Primitive>
	)
})

Navbar.section = forwardRef(({ children, className, ...props }, ref) => {
	return (
		<Primitive as="div" ref={ref} className={clsx(styles.section, className)} {...props}>
			{children}
		</Primitive>
	)
})
