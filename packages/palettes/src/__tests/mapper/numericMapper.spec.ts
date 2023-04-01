import { red } from '@radix-ui/colors'
import { numericMapper } from '../../mapper/numericMapper'

describe('@nectar-ui/palettes - mapper/numericMapper.ts', () => {
	it('accepts a name and a pallete to map the name to, and returns a numerically mapped color palette.`.', () => {
		const got = numericMapper('test', 'red')
		const want = {
			test1: red.red1,
			test2: red.red2,
			test3: red.red3,
			test4: red.red4,
			test5: red.red5,
			test6: red.red6,
			test7: red.red7,
			test8: red.red8,
			test9: red.red9,
			test10: red.red10,
			test11: red.red11,
			test12: red.red12
		}
		expect(got).toEqual(want)
	})
})
