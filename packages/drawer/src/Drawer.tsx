import { Primitive, type Component } from '@nectar-ui/primitive'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Drawer.module.css'

export type DrawerOwnProps = {
  dir?: 'left' | 'right'
  root?: Element | DocumentFragment
}

export type DrawerTriggerComponent = Component<'button'>

export type DrawerComponent = Component<'div', DrawerOwnProps> & {
  trigger: DrawerTriggerComponent
}

export const Drawer = forwardRef(
  (
    { dir = 'left', root = document.body, children, className, ...props },
    ref
  ) => {
    const closeDrawer = () => {
      const el = document.querySelector('[data-drawer]')
      if (el) {
        el.classList.remove(styles.open)
      }
    }
    return createPortal(
      <Primitive
        as="div"
        ref={ref}
        className={clsx(
          styles.drawer,
          dir == 'right' && styles.right,
          className
        )}
        data-drawer
        {...props}
      >
        <Primitive className={styles.overlay} onClick={() => closeDrawer()} />
        <Primitive className={styles.content}>{children}</Primitive>
      </Primitive>,
      root
    )
  }
) as DrawerComponent

Drawer.trigger = forwardRef(({ children, ...props }, ref) => {
  const openDrawer = () => {
    const el = document.querySelector('[data-drawer]')
    if (el) {
      el.classList.add(styles.open)
    }
  }
  return (
    <Primitive as="button" ref={ref} onClick={() => openDrawer()} {...props}>
      {children}
    </Primitive>
  )
}) as DrawerTriggerComponent
