const __timings = {
	0: '0s',
	75: '75ms',
	100: '100ms',
	150: '150ms',
	200: '200ms',
	300: '300ms',
	500: '500ms',
	700: '700ms',
	1000: '1000ms',
	1500: '1500ms',
	2000: '2000ms',
	3000: '3000ms'
}

export const transitionDelayTokens = __timings

export const transitionDurationTokens = __timings

export const transitionPropertyTokens = {
	none: 'none',
	all: 'all',
	colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
	opacity: 'opacity',
	shadow: 'box-shadow',
	transform: 'transform'
}

export const transitionTimingFunctionTokens = {
	linear: 'linear',
	in: 'cubic-bezier(0.4, 0, 1, 1)',
	out: 'cubic-bezier(0, 0, 0.2, 1)',
	'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
}
