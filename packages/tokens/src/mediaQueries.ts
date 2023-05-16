export const mediaQueries = {
	'motion-ok': '(prefers-reduced-motion: no-preference)',
	'motion-not-ok': '(prefers-reduced-motion: reduce)',
	'opacity-ok': '(prefers-reduced-transparency: no-preference)',
	'opacity-not-ok': '(prefers-reduced-transparency: reduce)',
	'use-data-ok': '(prefers-reduced-data: no-preference)',
	'use-data-not-ok': '(prefers-reduced-data: reduce)',

	dark: '(prefers-color-scheme: dark)',
	light: '(prefers-color-scheme: light)',

	'high-contrast': '(prefers-contrast: more)',
	'low-contrast': '(prefers-contrast: less)',

	portrait: '(orientation: portrait)',
	landscape: '(orientation: landscape)',

	hd: '(dynamic-range: high)',

	touch: '(hover: none) and (pointer: coarse)',
	stylus: '(hover: none) and (pointer: fine)',
	pointer: '(hover) and (pointer: coarse)',
	mouse: '(hover) and (pointer: fine)',

	'xxs-only': '(0px <= width <= 240px)',
	xxs: '(width >= 240px)',
	'xxs-max': '(width < 240px)',

	'xs-only': '(240px <= width <= 360px)',
	xs: '(width >= 360px)',
	'xs-max': '(width < 360px)',

	'sm-only': '(360px <= width <= 480px)',
	sm: '(width >= 480px)',
	'sm-max': '(width < 480px)',

	'md-only': '(480px <= width <= 768px)',
	md: '(width >= 768px)',
	'md-max': '(width < 768px)',

	'lg-only': '(768px <= width <= 1024px)',
	lg: '(width >= 1024px)',
	'lg-max': '(width < 1024px)',

	'xl-only': '(1024px <= width <= 1440px)',
	xl: '(width >= 1440px)',
	'xl-max': '(width < 1440px)',

	'xxl-only': '(1440px <= width <= 1920px)',
	xxl: '(width >= 1920px)',
	'xxl-max': '(width < 1920px)'
}

export type MediaQueries = keyof typeof mediaQueries
