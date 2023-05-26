import postcss from 'postcss'
import { camelCaseReplacer } from '../replacer/camelCaseReplacer.js'
import type { Declarations, Properties } from '../types.js'

export function processProperties<P extends Properties>(properties: P): Declarations<P> {
	return Object.fromEntries(
		Object.entries(properties).map(([key, value]) => {
			return [
				key,
				decl => {
					const resolved = value(decl.value) as Record<string, string>
					Object.keys(resolved).forEach(property => {
						const propertyName = camelCaseReplacer(property)
						const varDecl = postcss.decl({
							prop: propertyName,
							value: resolved[property]
						})
						decl.parent?.append(varDecl)
					})
					decl.remove()
				}
			]
		})
	) as Declarations<P>
}
