import * as RadixPalettes from '@radix-ui/colors'

export type PaletteMap = (number | string)[]

export type PaletteMapper = (name: string, palette: Palettes) => Palette

export type Palette = Record<string, string>

export type Palettes = keyof typeof RadixPalettes
