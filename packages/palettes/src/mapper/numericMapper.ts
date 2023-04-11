import { paletteMapperFactory } from '../paletteMapperFactory.js'
import type { PaletteMap } from '../types.js'

export const numericMap: PaletteMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const numericMapper = paletteMapperFactory(numericMap)
