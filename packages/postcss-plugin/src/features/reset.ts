import { readFileSync } from 'fs'
import { createRequire } from 'module'
import { parse, type AtRule } from 'postcss'

const require = createRequire(import.meta.url)

export const processReset = (atrule: AtRule) => {
	const cssPath = require.resolve('modern-normalize/modern-normalize.css')
	const css = readFileSync(cssPath)
	const style = parse(css)
	atrule.root().prepend(style)
	atrule.remove()
}
