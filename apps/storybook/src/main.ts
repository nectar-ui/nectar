import type { StorybookConfig } from '@storybook/react-webpack5'
import { resolve } from 'path'

const config: StorybookConfig = {
	stories: ['../../../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
					postcssOptions: {
						plugins: [
							[require.resolve('@nectar-ui/postcss-plugin'), { theme: resolve('src/theme.ts') }],
							['postcss-preset-env', { stage: 3 }],
							'postcss-nested'
						]
					}
				}
			}
		}
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	docs: {
		autodocs: true
	}
}

export default config
