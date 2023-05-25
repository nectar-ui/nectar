import { tokens } from '@nectar-ui/tokens'
import type { Meta, StoryObj } from '@storybook/react'
import { Text as TextComponent, textElements, textVariants } from './Text.js'

const meta: Meta<typeof TextComponent> = {
	title: 'Components/Text',
	component: TextComponent,
	argTypes: {
		as: {
			control: 'select',
			options: textElements,
			table: {
				defaultValue: { summary: 'span' }
			}
		},
		variant: {
			control: 'select',
			options: textVariants
		},
		color: {
			control: 'select',
			options: Object.keys(tokens.colors)
		},
		fontSize: {
			control: 'select',
			options: Object.keys(tokens.fontSizes)
		},
		fontWeight: {
			control: 'select',
			options: Object.keys(tokens.fontWeights)
		},
		letterSpacing: {
			control: 'select',
			options: Object.keys(tokens.letterSpacings)
		},
		font: {
			control: 'select',
			options: Object.keys(tokens.fonts)
		},
		lineHeight: {
			control: 'select',
			options: Object.keys(tokens.lineHeights)
		},
		margin: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		}
	}
} satisfies Meta<typeof TextComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Text: Story = {
	render: args => (
		<TextComponent {...args}>
			Use the Text component for consistent typography, and easy styling.
		</TextComponent>
	)
}

Text.args = {
	as: 'span'
}
