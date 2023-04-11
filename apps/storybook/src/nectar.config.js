import { numericMapper } from '@nectar-ui/components'

const pxToRem = (px, base = 16) => `${px / base}rem`

const contrast = numericMapper('contrast', 'gray')
const primary = numericMapper('primary', 'blue')
const warning = numericMapper('warning', 'yellow')
const danger = numericMapper('danger', 'red')
const success = numericMapper('success', 'green')
const info = numericMapper('info', 'blue')

const contrastDark = numericMapper('contrast', 'grayDark')
const primaryDark = numericMapper('primary', 'blueDark')
const warningDark = numericMapper('warning', 'yellowDark')
const dangerDark = numericMapper('danger', 'redDark')
const successDark = numericMapper('success', 'greenDark')
const infoDark = numericMapper('info', 'blueDark')

module.exports = {
	tokens: {
		base: {
			color: {
				...contrast,
				...primary,
				...warning,
				...danger,
				...success,
				...info
			},
			opacity: {
				0: '0',
				25: '0.25',
				50: '0.5',
				75: '0.75',
				100: '1'
			},
			shadow: {
				default: '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
				md: '0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08)',
				lg: '0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)',
				inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
				outline: '0 0 0 3px rgba(52, 144, 220, 0.5)',
				none: 'none'
			},
			transitionEasing: {
				linear: 'linear',
				in: 'cubic-bezier(0.4, 0, 1, 1)',
				out: 'cubic-bezier(0, 0, 0.2, 1)',
				inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			transitionProperty: {
				none: 'none',
				all: 'all',
				default: 'background-color, border-color, color, fill, outline-color, stroke, opacity, box-shadow, transform',
				colors: 'background-color, border-color, color, fill, outline-color, stroke',
				opacity: 'opacity',
				shadow: 'box-shadow',
				transform: 'transform'
			},
			transitionDuration: {
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
			},
			borderWidth: {
				default: '1px',
				0: '0'
			},
			radii: {
				none: 0,
				small: '.25em',
				default: '.5em',
				extra: '.75em',
				ultra: '1em',
				circle: '50%',
				pill: '50em'
			},
			screen: {
				xs: pxToRem(32),
				sm: pxToRem(48),
				md: pxToRem(64),
				lg: pxToRem(80),
				xl: pxToRem(96)
			},
			spacing: {
				px: '1px',
				0: '0',
				1: pxToRem(4),
				2: pxToRem(8),
				3: pxToRem(12),
				4: pxToRem(16),
				5: pxToRem(20),
				6: pxToRem(24),
				8: pxToRem(32),
				10: pxToRem(40),
				12: pxToRem(48),
				16: pxToRem(64),
				20: pxToRem(80),
				24: pxToRem(96),
				32: pxToRem(128),
				block: 'var(--spacing-6)'
			},
			sizing: {
				auto: 'auto',
				px: '1px',
				1: pxToRem(4),
				2: pxToRem(8),
				3: pxToRem(12),
				4: pxToRem(16),
				5: pxToRem(20),
				6: pxToRem(24),
				8: pxToRem(32),
				10: pxToRem(40),
				12: pxToRem(48),
				16: pxToRem(64),
				20: pxToRem(80),
				24: pxToRem(96),
				32: pxToRem(128),
				48: pxToRem(192),
				64: pxToRem(256)
			},
			z: {
				auto: 'auto',
				0: 0,
				10: 10,
				20: 20,
				30: 30,
				40: 40,
				50: 50
			},
			fonts: {
				mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
				sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
				serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`
			},
			fontSizes: {
				xs: pxToRem(12),
				sm: pxToRem(14),
				base: pxToRem(16),
				lg: pxToRem(18),
				xl: pxToRem(20),
				'2xl': pxToRem(24),
				'3xl': pxToRem(30),
				'4xl': pxToRem(36),
				'5xl': pxToRem(48),
				'6xl': pxToRem(60),
				'7xl': pxToRem(72),
				'8xl': pxToRem(96),
				'9xl': pxToRem(128)
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900'
			},
			tracking: {
				tighter: '-0.05em',
				tight: '-0.025em',
				normal: '0em',
				wide: '0.025em',
				wider: '0.05em',
				widest: '0.1em'
			},
			leading: {
				none: '1',
				tight: '1.25',
				snug: '1.375',
				normal: '1.5',
				relaxed: '1.625',
				loose: '2'
			}
		},
		dark: {
			color: {
				...contrastDark,
				...primaryDark,
				...warningDark,
				...dangerDark,
				...successDark,
				...infoDark
			}
		}
	},
	mediaQueries: {
		sm: 'min-width: 768px',
		md: 'min-width: 1024px'
	},
	selectors: {
		navbar: '.navbar'
	}
}
