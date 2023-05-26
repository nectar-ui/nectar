# NectarUI

![](https://badgen.net/github/release/nectar-ui/nectar?color=orange&label=Release)
[![MIT License](https://badgen.net/badge/License/MIT/blue)](https://choosealicense.com/licenses/mit/)
![example workflow](https://github.com/nectar-ui/nectar/actions/workflows/ci.yaml/badge.svg)
[![codecov](https://codecov.io/gh/nectar-ui/nectar/branch/main/graph/badge.svg)](https://codecov.io/gh/nectar-ui/nectar)

A personal design system by @iambrennanwalsh.

---

## Table Of Contents

1. Overview
2. Get Started
3. Config

---

## Packages

1. @nectar-ui/nectar

   - Re-exports all packages.

2. @nectar-ui/types

   - Declares all typescript types.

3. @nectar-ui/provider
   - A context provider, hook, and higher order component.
   - Accepts your theme object, and converts the tokens to css custom properties, creates tokens,

## Overview

nectarUi is a design system built on top of PostCss and Css Modules.

`nectar` > types > components > postcss-plugin >

The configuration file features the following api.

```json
{
	tokens: { // Your design tokens. Will be transformed into css custom properties.
		base: {}, // Custom properties attached to `:root` selector.
		dark: {} // Custom properties attached to `.dark` selector.
	},
	mediaQueries: {  // Custom media queries.
		md: "min-width: 768px" // Use via `@media(--md)` syntax.
	},
	selectors: { // Custom selectors.
		heading: "h1, h2, h3, h4, h5, h6" // Use via `:--heading {}` syntax.
	},
	properties: { // Custom css properties.
		mt: (value: CSS.Properties['marginTop']) => ({ // Use just like any other css property.
			marginTop: value
		})
	},
	settings: {
		styleReset: true, // Inject css reset.
		outputPath: "public/build/styles.css", // Path to output compiled css.
		minify: true, // Minimize output css.
		prefix: true, // Utilize autoprefixer.
		theme: "system" // Method to determine current theme. Can be "system", "localStorage", or "cookie".
	}
}
```

All components compose the Box component. The box component has the following prop api.

```typescript
interface BoxProps<Variants extends string[]> {
	as?: React.ElementType
	css?: CssObject
	variant?: Variants[keyof Variants]
	className?: string
	children?: React.ReactNode
}
```

The `css` prop expects a css object. To enable dynamic styling, include the context key in your css object.

```tsx
const El = (
	<Box
		css={{
			backgroundColor: 'var(--colors-contrast1)',
			color: 'var(--colors-contrast12)',

			'&.open': {
				backgroundColor: 'transparent'
			}
		}}
	/>
)
```

The above will be hashed into a unique className that will be appended to the components existing className if there is one. Then the css prop is removed, and its content appened to a style sheet.

---

## Get Started

Install, setup, and customize the NectarUi library.

1. Install `@nectar-ui/nectar` and it's peer dependencies via your perferred package manger (npm, yarn, pnpm).

```sh
npm install @nectar-ui/nectar postcss@^8
```

2. Configure NectarUi via your `nectar.config.js` file. [Read more about the config](#config).

3. Add `@nectar-ui/nectar` to your PostCss config. If you You must provide the path to your config when its is not in the root.

```json
{
	"plugins": [
		[
			"@nectar-ui/postcss-plugin",
			{
				"config": "./src/nectar.config.js"
			}
		]
	]
}
```

4. You may now freely utilize any of your defined selectors, properties, and mediaQueries. The postcss plugin automatically swaps everything out.

5. To utilize your design tokens, create a css file with the `@nectar-tokens` at-rule, and import the file into your application. The at-rule will be replaced with your css custom properties.

```css
@nectar-tokens {
}
```

6. Would you like to include the css reset? Add the `@nectar-reset` at-rule to the same css file, or another. It will be swapped out with the reset styles.

```css
@nectar-reset {
}
```

## Config

The config file has the following api.

```ts
import type { PropertiesHyphen } from 'csstype'

interface NectarConfig {
	tokens?: {
		base: ColorMode
		[mode: string]: ColorMode
	}
	mediaQueries?: {
		[query: string]: string
	}
	selectors?: {
		[selector: string]: string
	}
	properties?: {
		[property: string]: CssProperty
	}
}

type CssProperty = (value: any) => PropertiesHyphen

interface ColorMode {
	[scale: string]: Scale
}

interface Scale {
	[token: string]: DesignToken
}

type DesignToken = boolean | number | string
```

**Tokens**
Your tokens are converted into css custom properties. The `base` mode is attached to the `:root` selector. And all other modes you supply are attached to a class selector matching the name of your mode.

**Media Queries**
The keys of your `mediaQueries` object can be used to alias your applications breakpoints. By providing:

```js
{
	mediaQueries: {
		sm: 'min-width: 768px'
	}
}
```

You can now use the aliased syntax in your css:

```css
/* Becomes @media (min-width: 768px) {} */
@media (--sm) {
}
```

**Selectors**
In the same way you alias media queries, your `selectors` object contains selector aliases. By providing:

```js
{
	selectors: {
		h: 'h1, h2, h3, h4, h5, h6'
	}
}
```

You can now use the aliased syntax in your css:

```css
/* Becomes h1, h2, h3, h4, h5, h6 {...} */
:--h {
	font-weight: bold;
}
```
