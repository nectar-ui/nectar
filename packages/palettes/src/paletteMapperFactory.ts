import * as Palettes from '@radix-ui/colors'
import type { PaletteMap, PaletteMapper } from './types'

export function paletteMapperFactory(map: PaletteMap): PaletteMapper {
	return (name, palette) => {
		const colorPalette = Palettes[palette]
		return Object.fromEntries(
			map.map((key, index) => {
				return [`${name}${key}`, colorPalette[`${palette}${index + 1}`]]
			})
		)
	}
}
