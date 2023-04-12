import { readFile } from 'fs/promises'
import { createRequire } from 'module'
import { parse, type AtRule } from 'postcss'

const RESET_LIBRARY = 'modern-normalize/modern-normalize.css'

const require = createRequire(import.meta.url)

export const processReset = async (atrule: AtRule) => {
	const cssPath = require.resolve(RESET_LIBRARY)
	const css = await readFile(cssPath)
	const style = parse(css)
	atrule.root().append(style)
	atrule.remove()
}
