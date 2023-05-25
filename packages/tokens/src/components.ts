export const base = {
	background: 'var(--colors-contrast-base)',
	color: 'var(--colors-contrast-text)',
	font: 'var(--fonts-sans)',
	weight: 'var(--font-weights-normal)',
	size: 'var(--font-sizes-md)',
	'line-height': 'var(--line-heights-normal)',
	'letter-spacing': 'var(--letter-spacings-normal)',
	gap: 'var(--spacings-5)'
}

export const text = {
	color: 'inherit',
	'color-subtle': 'var(--colors-contrast-text-subtle)',
	'color-contrast': 'var(--colors-contrast-contrast)',
	size: 'inherit',
	font: 'inherit',
	weight: 'inherit',
	'line-height': 'inherit',
	'letter-spacing': 'inherit',
	gap: 'var(--base-gap)'
}

export const box = {
	background: 'var(--colors-contrast-bg)',
	'border-color': 'var(--colors-contrast-border)',
	'border-style': 'var(--border-styles-solid)',
	'border-width': 'var(--border-widths-0)',
	shadow: 'var(--shadows-md)',
	padding: 'var(--base-gap)',
	gap: 'var(--base-gap)',
	radii: 'var(--radii-sm)'
}

export const componentTokens = {
	base,
	text,
	box
}
