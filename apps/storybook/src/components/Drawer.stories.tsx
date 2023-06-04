import { Meta, StoryObj } from '@storybook/react'
import { Drawer as DrawerComponent } from '../../../../packages/drawer/src/Drawer.js'

const meta: Meta<typeof DrawerComponent> = {
	title: 'Components/Drawer',
	component: DrawerComponent
}

export default meta

type Story = StoryObj<typeof DrawerComponent>

export const Toggle: Story = {
	render: args => (
		<>
			<DrawerComponent {...args} />
			<DrawerComponent.trigger>Open Drawer</DrawerComponent.trigger>
		</>
	)
}
