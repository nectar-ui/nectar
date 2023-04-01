import { createContext } from 'react'
import type { NectarConfig } from '@nectar-ui/core'

export const NectarContext = createContext<NectarConfig>({})
