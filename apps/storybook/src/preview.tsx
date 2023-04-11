import { withThemeByClassName } from '@storybook/addon-styling'
import { Preview } from '@storybook/react'
import './styles.css'

const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}

const decorators = [
	withThemeByClassName({
		themes: {
			light: 'light',
			dark: 'dark'
		},
		defaultTheme: 'light',
		parentSelector: 'body'
	})
]

export default {
	parameters,
	decorators
} as Preview
