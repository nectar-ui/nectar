import { Box } from '@nectar-ui/box'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from './index.js'
const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	decorators: [
		Story => (
			<Box>
				<Story />
			</Box>
		)
	]
}

export default meta

type Story = StoryObj<typeof Text>

export const Basic: Story = {
	render: args => (
		<Text {...args}>
			Basic unstyled text wrapped in a <Text fontWeight="bold">span</Text> tag.
		</Text>
	)
}

export const Paragraph: Story = {
	render: args => (
		<Text variant="paragraph" {...args}>
			The <Text fontWeight="bold">paragraph</Text> variant renders a paragraph of text wrapped in a
			<Text fontWeight="bold">p</Text> tag.
		</Text>
	)
}

export const Caps: Story = {
	render: args => (
		<Text variant="caps" {...args}>
			The <Text fontWeight="bold">caps</Text> variant renders small bold uppercased text wrapped in
			a <Text fontWeight="bold">span</Text> tag.
		</Text>
	)
}

export const Footnote: Story = {
	render: args => (
		<Text variant="footnote" {...args}>
			The <Text fontWeight="bold">footnote</Text> variant renders ______ in a
			<Text fontWeight="bold">span</Text> tag.
		</Text>
	)
}

export const Caption: Story = {
	render: args => (
		<Text variant="caption" {...args}>
			The <Text fontWeight="bold">caption</Text> variant renders text in a small size with subtle
			colored typography.
		</Text>
	)
}

export const Lead: Story = {
	render: args => (
		<Text variant="lead" {...args}>
			The <Text fontWeight="bold">lead</Text> variant renders text in a lg size with subtle colored
			typography.
		</Text>
	)
}

export const Display: Story = {
	render: args => (
		<Text variant="display" {...args}>
			The <Text fontWeight="bold">display</Text> variant is useful for hero headings or landing
			pages.
		</Text>
	)
}

export const Heading1: Story = {
	render: args => (
		<Text variant="h1" {...args}>
			The <Text fontWeight="bold">h1</Text> variant renders a h1 tag.
		</Text>
	)
}

export const Heading2: Story = {
	render: args => (
		<Text variant="h2" {...args}>
			The <Text fontWeight="bold">h2</Text> variant renders a h2 tag.
		</Text>
	)
}

export const Heading3: Story = {
	render: args => (
		<Text variant="h3" {...args}>
			The <Text fontWeight="bold">h3</Text> variant renders a h3 tag.
		</Text>
	)
}
export const Heading4: Story = {
	render: args => (
		<Text variant="h4" {...args}>
			The <Text fontWeight="bold">h4</Text> variant renders a h4 tag.
		</Text>
	)
}
export const Heading5: Story = {
	render: args => (
		<Text variant="h5" {...args}>
			The <Text fontWeight="bold">h5</Text> variant renders a h5 tag.
		</Text>
	)
}

export const Heading6: Story = {
	render: args => (
		<Text variant="h6" {...args}>
			The <Text fontWeight="bold">h6</Text> variant renders a h6 tag.
		</Text>
	)
}
