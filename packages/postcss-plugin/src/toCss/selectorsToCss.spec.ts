import { selectorsToCss } from './selectorsToCss.js'

describe('@nectar-ui/postcss-plugin - toCss/selectorsToCss', () => {
	const want = { ':--heading': 'h1, h2, h3, h4, h5, h6', ':--anchor': 'a, a:hover, a:focus, a:active' }
	it('transforms an object of custom selectors into valid css.', () => {
		const test = {
			heading: 'h1, h2, h3, h4, h5, h6',
			anchor: 'a, a:hover, a:focus, a:active'
		}

		const got = selectorsToCss(test)
		expect(got).toStrictEqual(want)
	})
})
