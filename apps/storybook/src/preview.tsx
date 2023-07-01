import { withThemeByClassName } from '@storybook/addon-styling'
import { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import './styles.css'

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  docs: {
    theme: themes.dark
  }
}

const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: 'dark',
    parentSelector: 'html'
  })
]

export default {
  parameters,
  decorators
} as Preview
