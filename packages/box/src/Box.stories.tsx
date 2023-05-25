import { Text } from '@nectar-ui/text'
import { tokens } from '@nectar-ui/tokens'
import { Meta, StoryObj } from '@storybook/react'
import { Box as BoxComponent, boxElements, boxVariants } from './Box.js'

const meta: Meta<typeof BoxComponent> = {
	title: 'Components/Box',
	component: BoxComponent,
	argTypes: {
		as: {
			control: 'select',
			options: boxElements,
			table: {
				defaultValue: { summary: 'div' }
			}
		},
		variant: {
			control: 'select',
			options: boxVariants
		},
		background: {
			control: 'select',
			options: Object.keys(tokens.colors)
		},
		color: {
			control: 'select',
			options: Object.keys(tokens.colors)
		},
		shadow: {
			control: 'select',
			options: Object.keys(tokens.shadows)
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
		},
		padding: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		paddingTop: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		paddingLeft: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		paddingRight: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		paddingBottom: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		paddingX: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		paddingY: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		radii: {
			control: 'select',
			options: Object.keys(tokens.radii)
		},
		borderColor: {
			control: 'select',
			options: Object.keys(tokens.colors)
		},
		borderStyle: {
			control: 'select',
			options: Object.keys(tokens.borderStyles)
		},
		borderWidth: {
			control: 'select',
			options: Object.keys(tokens.borderWidths)
		},
		minHeight: {
			control: 'select',
			options: Object.keys(tokens.sizings)
		},
		minWidth: {
			control: 'select',
			options: Object.keys(tokens.sizings)
		},
		maxWidth: {
			control: 'select',
			options: Object.keys(tokens.sizings)
		},
		width: {
			control: 'select',
			options: Object.keys(tokens.sizings)
		},
		zIndex: {
			control: 'select',
			options: Object.keys(tokens.zIndices)
		},
		top: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		bottom: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		left: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		},
		right: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		}
	}
}

export default meta

type Story = StoryObj<typeof BoxComponent>

export const Toggle: Story = {
	render: args => (
		<BoxComponent {...args}>
			<Text>This is a Box component. Use it to render content with a defined background.</Text>
		</BoxComponent>
	)
}
