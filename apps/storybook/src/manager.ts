import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
	base: 'dark',
	brandTitle: 'nectarUi',
	brandUrl: 'nectarui.vercel.app',
	brandImage: 'https://raw.githubusercontent.com/nectar-ui/nectar/main/.github/logo.png',
	colorSecondary: '#f76808',
	colorPrimary: '#68ddfd'
})

addons.setConfig({
	theme
})
