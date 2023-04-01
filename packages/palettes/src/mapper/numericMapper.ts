import { paletteMapperFactory } from '../paletteMapperFactory'
import type { PaletteMap } from '../types'

export const numericMap: PaletteMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const numericMapper = paletteMapperFactory(numericMap)

