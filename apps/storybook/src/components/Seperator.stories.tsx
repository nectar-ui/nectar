import { Meta, StoryObj } from '@storybook/react'
import { Seperator as SeperatorComponent } from '../../../../packages/seperator/src/Seperator.js'
import { Text } from '../../../../packages/text/src/index.js'
import { colorTokens, sizingTokens, spacingTokens } from '../../../../packages/tokens/src/index.js'

const meta: Meta<typeof SeperatorComponent> = {
	title: 'Components/Seperator',
	component: SeperatorComponent,
	argTypes: {
		styling: {
			control: 'select',
			options: ['solid', 'dashed']
		},
		size: {
			control: 'select',
			options: Object.keys(sizingTokens)
		},
		gap: {
			control: 'select',
			options: Object.keys(spacingTokens)
		},
		color: {
			control: 'select',
			options: Object.keys(colorTokens)
		},
		variant: {
			control: 'select',
			options: ['horizontal', 'vertical']
		}
	}
}

export default meta

type Story = StoryObj<typeof SeperatorComponent>

export const Horizontal: Story = {
	args: {
		variant: 'horizontal'
	}
}

export const Vertical: Story = {
	args: {
		variant: 'vertical'
	},
	render: args => (
		<div>
			<span>Lorem ipsum</span>
			<SeperatorComponent {...args} />
			<span>Di lorem</span>
			<SeperatorComponent {...args} />
			<span>Quan ipsa</span>
		</div>
	)
}

export const LabeledSeperator: Story = {
	args: {
		children: <Text>Seperator With Text</Text>
	}
}
