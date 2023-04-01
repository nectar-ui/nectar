import { numericMap } from '../mapper/numericMapper'
import { paletteMapperFactory } from '../paletteMapperFactory'

describe('@nectar-ui/palettes - paletteMapperFactory.ts', () => {
	it('accepts an array of mapping values and returns a function.', () => {
		const got = paletteMapperFactory(numericMap)
		expect(typeof got).toBe('function')
	})
})
