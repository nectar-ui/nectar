import { Drawer as DrawerComponent } from '@nectar-ui/nectar'
import { Meta, StoryObj } from '@storybook/react'

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
