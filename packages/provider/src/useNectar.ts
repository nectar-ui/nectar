import { useContext } from 'react'
import { NectarContext } from './nectarContext'
import type { NectarConfig } from '@nectar-ui/core'

/**
 * Returns the theme object.
 * @returns Theme
 */
export const useNectar = (): NectarConfig => useContext(NectarContext)
