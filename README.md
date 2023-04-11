# NectarUI

NectarUI is the personal design system of @iambrennanwalsh.

---

## Get Started

1. Install via your perferred package manger (npm, yarn, pnpm).

```sh
npm install @nectar-ui/nectar
```

2. Create your config file. [Read more about the config](#config).

3. Add `@nectar-ui/nectar` to your PostCss config. You must provide the path to your config when its is not in the root.

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

1. Install

```
{
	tokens: {
		base: {}
	},
	mediaQueries: {},
	selectors: {}
}
```

2. Install the nectar-ui/nectar package.

3. Add package to your postcss configuration.
