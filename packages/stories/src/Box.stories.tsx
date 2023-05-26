import { Meta, StoryObj } from '@storybook/react'
import { tokens } from '../../tokens/src/index.js'
import { Box as BoxComponent, BoxVariants, boxElements, boxVariants } from './../../box/src/Box.js'
import { Text } from './../../text/src/Text.js'

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
		gap: {
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
		radiiTopLeft: {
			control: 'select',
			options: Object.keys(tokens.radii)
		},
		radiiBottomLeft: {
			control: 'select',
			options: Object.keys(tokens.radii)
		},
		radiiBottomRight: {
			control: 'select',
			options: Object.keys(tokens.radii)
		},
		radiiTopRight: {
			control: 'select',
			options: Object.keys(tokens.radii)
		},
		borderColor: {
			control: 'select',
			options: Object.keys(tokens.colors)
		},
		borderTopColor: {
			control: 'select',
			options: Object.keys(tokens.colors)
		},
		borderBottomColor: {
			control: 'select',
			options: Object.keys(tokens.colors)
		},
		borderLeftColor: {
			control: 'select',
			options: Object.keys(tokens.colors)
		},
		borderRightColor: {
			control: 'select',
			options: Object.keys(tokens.colors)
		},
		borderStyle: {
			control: 'select',
			options: Object.keys(tokens.borderStyles)
		},
		borderTopStyle: {
			control: 'select',
			options: Object.keys(tokens.borderStyles)
		},
		borderBottomStyle: {
			control: 'select',
			options: Object.keys(tokens.borderStyles)
		},
		borderLeftStyle: {
			control: 'select',
			options: Object.keys(tokens.borderStyles)
		},
		borderRightStyle: {
			control: 'select',
			options: Object.keys(tokens.borderStyles)
		},
		borderWidth: {
			control: 'select',
			options: Object.keys(tokens.borderWidths)
		},
		borderTopWidth: {
			control: 'select',
			options: Object.keys(tokens.borderWidths)
		},
		borderBottomWidth: {
			control: 'select',
			options: Object.keys(tokens.borderWidths)
		},
		borderLeftWidth: {
			control: 'select',
			options: Object.keys(tokens.borderWidths)
		},
		borderRightWidth: {
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
} satisfies Meta<typeof BoxComponent>

export default meta

type Story = StoryObj<typeof BoxComponent>

const template: (variant?: BoxVariants) => Story = variant => ({
	args: {
		variant: variant,
		children: (
			<Text>
				{variant ? (
					<>
						This is a Box component with the <Text fontWeight="bold">{variant}</Text> variant.
					</>
				) : (
					<>This is the default box component.</>
				)}
			</Text>
		)
	}
})

export const Box: Story = template(undefined)

export const Contrast: Story = template('contrast')
export const ContrastSubtle: Story = template('contrastSubtle')

export const Primary: Story = template('primary')
export const PrimarySubtle: Story = template('primarySubtle')

export const Secondary: Story = template('secondary')
export const SecondarySubtle: Story = template('secondarySubtle')

export const Info: Story = template('info')
export const InfoSubtle: Story = template('infoSubtle')

export const Success: Story = template('success')
export const SuccessSubtle: Story = template('successSubtle')

export const Warning: Story = template('warning')
export const WarningSubtle: Story = template('warningSubtle')

export const Danger: Story = template('danger')
export const DangerSubtle: Story = template('dangerSubtle')
