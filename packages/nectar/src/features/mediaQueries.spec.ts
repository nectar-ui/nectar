import { prepareMediaQueries } from './mediaQueries.js'

describe('@nectar-ui/nectar - features/mediaQueries', () => {
	const want = {
		'--sm': '(min-width: 36rem)',
		'--md': '(min-width: 48rem)',
		'--lg': '(min-width: 64rem)'
	}

	it('transforms an object of custom media queries into valid css.', () => {
		const test = {
			sm: '(min-width: 36rem)',
			md: '(min-width: 48rem)',
			lg: '(min-width: 64rem)'
		}

		const got = prepareMediaQueries(test)
		expect(got).toStrictEqual(want)
	})

	it('transforms custom media queries even without the parenthesis.', () => {
		const test = {
			sm: 'min-width: 36rem',
			md: 'min-width: 48rem',
			lg: 'min-width: 64rem'
		}
		const got = prepareMediaQueries(test)
		expect(got).toStrictEqual(want)
	})
})
