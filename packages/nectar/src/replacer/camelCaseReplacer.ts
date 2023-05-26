const camelCasedRegex = new RegExp(/([a-z])([A-Z])/, 'g')
const nonWordCharRegex = new RegExp(/\W+/, 'g')
/**
 * Replaces camelCased strings with kebab-case.
 * @param value string
 * @returns string
 */
export function camelCaseReplacer(value: string): string {
	return value.replace(camelCasedRegex, '$1-$2').replace(nonWordCharRegex, '-').toLowerCase()
}
