import test from 'ava'
import { numericMap } from './mapper/numericMapper.js'
import { paletteMapperFactory } from './paletteMapperFactory.js'

test('accepts an array of mapping values and returns a function.', t => {
	const got = paletteMapperFactory(numericMap)
	t.is(typeof got, 'function')
})
