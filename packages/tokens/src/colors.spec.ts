import { describe, expect, it } from 'vitest'
import { colorTokens } from './colors'

describe('some module', () => {
  it('matches', () => {
    expect(colorTokens).toMatchObject(colorTokens)
  })
})
