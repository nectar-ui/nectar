import { Meta, StoryObj } from '@storybook/react'

import { Navbar as NavbarComponent } from '../../../../packages/navbar/src/Navbar.js'

const meta: Meta<typeof NavbarComponent> = {
	title: 'Components/Navbar',
	component: NavbarComponent
}

export default meta

type Story = StoryObj<typeof NavbarComponent>

export const Nav: Story = {
	args: {
		children: (
			<>
				<NavbarComponent.section>
					<NavbarComponent.item>NectarUi</NavbarComponent.item>
				</NavbarComponent.section>
				<NavbarComponent.section>
					<NavbarComponent.item as="a" href="./">
						Home
					</NavbarComponent.item>
					<NavbarComponent.item as="a" href="./about">
						About
					</NavbarComponent.item>
					<NavbarComponent.item as="a" href="./contact">
						<a href="./">Contact</a>
					</NavbarComponent.item>
				</NavbarComponent.section>
			</>
		)
	}
}
