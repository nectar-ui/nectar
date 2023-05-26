import test from 'ava'
import { prepareMediaQueries } from './mediaQueries.js'

const want = {
	'--sm': '(min-width: 36rem)',
	'--md': '(min-width: 48rem)',
	'--lg': '(min-width: 64rem)'
}

test('transforms an object of custom media queries into valid css.', t => {
	const queries = {
		sm: '(min-width: 36rem)',
		md: '(min-width: 48rem)',
		lg: '(min-width: 64rem)'
	}

	const got = prepareMediaQueries(queries)
	t.deepEqual(got, want)
})

test('transforms custom media queries even without the parenthesis.', t => {
	const queries = {
		sm: 'min-width: 36rem',
		md: 'min-width: 48rem',
		lg: 'min-width: 64rem'
	}
	const got = prepareMediaQueries(queries)
	t.deepEqual(got, want)
})
