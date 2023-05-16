import test from 'ava'
import { prepareSelectors } from './selectors.js'

test('transforms an object of custom selectors into valid css.', t => {
	const want = {
		':--heading': 'h1, h2, h3, h4, h5, h6',
		':--anchor': 'a, a:hover, a:focus, a:active'
	}

	const selectors = {
		heading: 'h1, h2, h3, h4, h5, h6',
		anchor: 'a, a:hover, a:focus, a:active'
	}

	const got = prepareSelectors(selectors)
	t.deepEqual(got, want)
})
