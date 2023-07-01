import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      all: true,
      include: ['**/src/'],
      exclude: [
        '**/tooling/',
        '**/apps/',
        '**/*.stories.{tsx,ts,jsx,js}',
        '**/index.{js,ts,tsx,jsx}',
        '**/*.spec.{jsx,js,tsx,ts}',
        '**/*.d.ts'
      ],
      clean: true,
      reportsDirectory: './coverage'
    }
  }
})
