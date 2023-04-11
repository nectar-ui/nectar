const camelCasedRegex = new RegExp(/([a-z])([A-Z])/, 'g')

export function camelCaseReplacer(value: string) {
	return value.replace(camelCasedRegex, (_match, p1, p2) => `${p1}-${p2.toLowerCase()}`)
}
