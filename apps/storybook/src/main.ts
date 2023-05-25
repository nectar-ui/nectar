import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {
				postCss: {
					implementation: require('postcss')
				}
			}
		}
	],

	docs: {
		autodocs: true
	},
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	stories: ['../../../packages/*/src/**/*.stories.*'],

	webpackFinal: async config => {
		config.resolve = {
			...config.resolve,
			extensionAlias: {
				'.js': ['.ts', '.tsx', '.js']
			}
		}
		return config
	}
}

export default config
