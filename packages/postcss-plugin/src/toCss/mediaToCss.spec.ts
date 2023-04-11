import { mediaToCss } from './mediaToCss.js'

describe('@nectar-ui/postcss-plugin - toCss/mediaToCss', () => {
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

		const got = mediaToCss(test)
		expect(got).toStrictEqual(want)
	})

	it('transforms custom media queries even without the parenthesis.', () => {
		const test = {
			sm: 'min-width: 36rem',
			md: 'min-width: 48rem',
			lg: 'min-width: 64rem'
		}
		const got = mediaToCss(test)
		expect(got).toStrictEqual(want)
	})
})
