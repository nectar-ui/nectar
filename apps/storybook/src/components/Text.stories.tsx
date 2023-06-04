import type { Meta, StoryObj } from '@storybook/react'
import {
	Text as TextComponent,
	TextVariants,
	textElements,
	textVariants
} from '../../../../packages/text/src/Text.js'
import { tokens } from '../../../../packages/tokens/src/index.js'

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
		gap: {
			control: 'select',
			options: Object.keys(tokens.spacings)
		}
	}
} satisfies Meta<typeof TextComponent>

export default meta

type Story = StoryObj<typeof meta>

const template: (variant?: TextVariants) => Story = variant => ({
	args: {
		variant: variant,
		children: variant ? (
			<>
				This is a Text component with the <TextComponent fontWeight="bold">{variant}</TextComponent>{' '}
				variant.
			</>
		) : (
			<>This is the default Text component.</>
		)
	}
})

export const Text: Story = template()
export const Small: Story = template('small')
export const Large: Story = template('large')
export const Lead: Story = template('lead')
export const Caps: Story = template('caps')
export const Footnote: Story = template('footnote')
export const Display: Story = template('display')
export const Heading1: Story = template('h1')
export const Heading2: Story = template('h2')
export const Heading3: Story = template('h3')
export const Heading4: Story = template('h4')
export const Heading5: Story = template('h5')
export const Heading6: Story = template('h6')
