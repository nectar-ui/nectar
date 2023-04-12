import { prepareSelectors } from './selectors.js'

describe('@nectar-ui/postcss-plugin - features/selectors', () => {
	const want = { ':--heading': 'h1, h2, h3, h4, h5, h6', ':--anchor': 'a, a:hover, a:focus, a:active' }
	it('transforms an object of custom selectors into valid css.', () => {
		const test = {
			heading: 'h1, h2, h3, h4, h5, h6',
			anchor: 'a, a:hover, a:focus, a:active'
		}

		const got = prepareSelectors(test)
		expect(got).toStrictEqual(want)
	})
})
