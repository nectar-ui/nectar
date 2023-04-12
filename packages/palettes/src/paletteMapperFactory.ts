import * as Palettes from '@radix-ui/colors'
import type { PaletteMap, PaletteMapper } from './types.js'

export function paletteMapperFactory(map: PaletteMap): PaletteMapper {
	return (name, palette) => {
		const colorPalette: Record<`${typeof palette}${number}`, string> = Palettes[palette]
		return Object.fromEntries(
			map.map((key, index) => {
				return [`${name}${key}`, colorPalette[`${palette.replace('Dark', '') as typeof palette}${index + 1}`]]
			})
		)
	}
}
