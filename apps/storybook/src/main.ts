import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
	stories: ['../../../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {
				cssBuildRule: {
					test: /\.css/,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										'postcss-import',
										[
											require.resolve('@nectar-ui/nectar'),
											{ config: './nectar.config.js' }
										],
										['postcss-preset-env', { stage: 3 }],
										'postcss-nested'
									]
								}
							}
						}
					]
				}
			}
		}
	],

	webpackFinal: async config => {
		config.module?.rules?.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('babel-loader')
				}
			]
		})
		config.resolve = {
			...config.resolve,
			extensionAlias: {
				'.js': ['.ts', '.tsx', '.js']
			}
		}
		config.resolve?.extensions?.push('.ts', '.tsx')
		return config
	},

	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	docs: {
		autodocs: true
	}
}

export default config
