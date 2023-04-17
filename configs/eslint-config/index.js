module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'react/prop-types': 'off',
		'react/display-name': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	overrides: [
		{
			files: ['**/*.spec.{js,jsx,ts,tsx}'],
			env: {
				'jest/globals': true
			},
			extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
			settings: {
				jest: {
					version: 29
				}
			}
		},
		{
			files: ['**/*.{ts,tsx}'],
			parserOptions: {
				project: ['./tsconfig.eslint.json']
			},
			extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
				'@typescript-eslint/ban-types': [
					'error',
					{
						types: {
							'{}': false
						},
						extendDefaults: true
					}
				]
			}
		}
	]
}
