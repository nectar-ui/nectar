import type { Preview } from '@storybook/react'
import { NectarProvider } from '@nectar-ui/components'

const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}

const preview: Preview = {
	parameters,
	decorators: [
		Story => (
			<NectarProvider>
				<Story />
			</NectarProvider>
		)
	]
}

export default preview
