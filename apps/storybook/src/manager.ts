import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
	base: 'dark',
	brandTitle: 'nectarUi',
	brandUrl: 'nectarui.vercel.app',
	brandImage: 'https://github.com/nectar-ui/nectar/blob/main/.github/icon.png',
	colorSecondary: '#f76808',
	colorPrimary: '#68ddfd'
})

addons.setConfig({
	theme
})
