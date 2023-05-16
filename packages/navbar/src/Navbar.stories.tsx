import { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './index.js'

const meta: Meta<typeof Navbar> = {
	title: 'Components/Navbar',
	component: Navbar
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Nav: Story = {
	render: args => (
		<Navbar {...args}>
			<Navbar.section>
				<Navbar.item>NectarUi</Navbar.item>
			</Navbar.section>
			<Navbar.section>
				<Navbar.item as="a" href="./">
					Home
				</Navbar.item>
				<Navbar.item as="a" href="./about">
					About
				</Navbar.item>
				<Navbar.item as="a" href="./contact">
					<a href="./">Contact</a>
				</Navbar.item>
			</Navbar.section>
		</Navbar>
	)
}
