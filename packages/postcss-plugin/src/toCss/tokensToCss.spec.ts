import { tokensToCss } from './tokensToCss.js'

describe('@nectar-ui/postcss-plugin - toCss/tokensToCss', () => {
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

		const got = tokensToCss(test)
		expect(got).toStrictEqual(want)
	})
})
