# @nectar-ui/theme

Utilities for theme management.

---

## Installation

Install via your favorite node.js package manager.

```sh
$ npm i @nectar-ui/theme
```

## Usage

1. Begin by creating your theme object (an instance of the provided `Theme` interface).

2. Wrap your application within the provided `ThemeContextProvider` component, passing your theme to the providers `theme` prop.

```ts
const theme = {}

const App = () => <ThemeContextProvider theme={theme}>...</ThemeContextProvider>
```
