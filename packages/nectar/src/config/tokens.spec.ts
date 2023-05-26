import test from 'ava'
import { prepareTokens } from './tokens.js'

test('transforms an object of custom properties into valid css.', t => {
	const want = {
		base: { '--colors-primary': 'red', '--colors-secondary': 'blue' },
		dark: { '--colors-primary': 'green', '--colors-secondary': 'yellow' }
	}

	const tokens = {
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

	const got = prepareTokens(tokens)
	t.deepEqual(got, want)
})
