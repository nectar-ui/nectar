import { readFile } from 'fs/promises'
import { createRequire } from 'module'
import { parse, type AtRule } from 'postcss'

const RESET_LIBRARY = '@nectar-ui/nectar/reset'

const require = createRequire(import.meta.url)

export async function processReset(atrule: AtRule) {
	const cssPath = require.resolve(RESET_LIBRARY)
	console.log(cssPath)
	const css = await readFile(cssPath)
	console.log(css)
	const style = parse(css)
	atrule.root().append(style)
	atrule.remove()
}
