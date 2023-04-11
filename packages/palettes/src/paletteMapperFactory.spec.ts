import { numericMap } from './mapper/numericMapper.js'
import { paletteMapperFactory } from './paletteMapperFactory.js'

describe('@nectar-ui/palettes - paletteMapperFactory.ts', () => {
	it('accepts an array of mapping values and returns a function.', () => {
		const got = paletteMapperFactory(numericMap)
		expect(typeof got).toBe('function')
	})
})
