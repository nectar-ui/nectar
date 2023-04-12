import { prepareTokens } from './tokens.js'

describe('@nectar-ui/postcss-plugin - features/tokens', () => {
	it('transforms an object of custom properties into valid css.', () => {
		const want = {
			base: { '--colors-primary': 'red', '--colors-secondary': 'blue' },
			dark: { '--colors-primary': 'green', '--colors-secondary': 'yellow' }
		}

		const test = {
			base: {
				colors: {
					primary: 'red',
					secondary: 'blue'
				}
			},
			dark: {
				colors: {
					primary: 'green',
					secondary: 'yellow'
				}
			}
		}

		const got = prepareTokens(test)
		expect(got).toStrictEqual(want)
	})
})
