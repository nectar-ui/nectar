import { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './index.js'

const meta: Meta<typeof Drawer> = {
	title: 'Components/Drawer',
	component: Drawer
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Toggle: Story = {
	render: args => (
		<>
			<Drawer {...args} />
			<Drawer.trigger>Open Drawer</Drawer.trigger>
		</>
	)
}
