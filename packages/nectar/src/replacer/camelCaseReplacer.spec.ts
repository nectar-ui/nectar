import test from 'ava'
import { camelCaseReplacer } from './camelCaseReplacer.js'

test('camelCaseReplacer converts camelCased strings to kebab-case.', t => {
	const want = 'foo-bar-baz'
	const got = camelCaseReplacer('fooBarBaz')
	t.is(got, want)
})

test('camelCaseReplacer converts non word characters to dashes.', t => {
	const want = 'foo-bar-baz'
	const got = camelCaseReplacer('foo//Bar.Baz')
	t.is(got, want)
})
