import * as palettes from '@radix-ui/colors'

const lightPaletteTokens = {
	...palettes.tomato,
	...palettes.tomatoA,
	...palettes.red,
	...palettes.redA,
	...palettes.crimson,
	...palettes.crimsonA,
	...palettes.pink,
	...palettes.pinkA,
	...palettes.plum,
	...palettes.plumA,
	...palettes.purple,
	...palettes.purpleA,
	...palettes.violet,
	...palettes.violetA,
	...palettes.indigo,
	...palettes.indigoA,
	...palettes.blue,
	...palettes.blueA,
	...palettes.cyan,
	...palettes.cyanA,
	...palettes.teal,
	...palettes.tealA,
	...palettes.green,
	...palettes.greenA,
	...palettes.grass,
	...palettes.grassA,
	...palettes.brown,
	...palettes.brownA,
	...palettes.orange,
	...palettes.orangeA,
	...palettes.sky,
	...palettes.skyA,
	...palettes.mint,
	...palettes.mintA,
	...palettes.lime,
	...palettes.limeA,
	...palettes.yellow,
	...palettes.yellowA,
	...palettes.amber,
	...palettes.amberA,
	...palettes.gold,
	...palettes.goldA,
	...palettes.bronze,
	...palettes.bronzeA,
	...palettes.gray,
	...palettes.grayA,
	...palettes.mauve,
	...palettes.mauveA,
	...palettes.slate,
	...palettes.slateA,
	...palettes.olive,
	...palettes.oliveA,
	...palettes.sand,
	...palettes.sandA,
	...palettes.sage,
	...palettes.sageA,
	...palettes.blackA
}

const darkPaletteTokens = {
	...palettes.tomatoDark,
	...palettes.tomatoDarkA,
	...palettes.redDark,
	...palettes.redDarkA,
	...palettes.crimsonDark,
	...palettes.crimsonDarkA,
	...palettes.pinkDark,
	...palettes.pinkDarkA,
	...palettes.plumDark,
	...palettes.plumDarkA,
	...palettes.purpleDark,
	...palettes.purpleDarkA,
	...palettes.violetDark,
	...palettes.violetDarkA,
	...palettes.indigoDark,
	...palettes.indigoDarkA,
	...palettes.blueDark,
	...palettes.blueDarkA,
	...palettes.cyanDark,
	...palettes.cyanDarkA,
	...palettes.tealDark,
	...palettes.tealDarkA,
	...palettes.greenDark,
	...palettes.greenDarkA,
	...palettes.grassDark,
	...palettes.grassDarkA,
	...palettes.brownDark,
	...palettes.brownDarkA,
	...palettes.orangeDark,
	...palettes.orangeDarkA,
	...palettes.skyDark,
	...palettes.skyDarkA,
	...palettes.mintDark,
	...palettes.mintDarkA,
	...palettes.limeDark,
	...palettes.limeDarkA,
	...palettes.yellowDark,
	...palettes.yellowDarkA,
	...palettes.amberDark,
	...palettes.amberDarkA,
	...palettes.goldDark,
	...palettes.goldDarkA,
	...palettes.bronzeDark,
	...palettes.bronzeDarkA,
	...palettes.grayDark,
	...palettes.grayDarkA,
	...palettes.mauveDark,
	...palettes.mauveDarkA,
	...palettes.slateDark,
	...palettes.slateDarkA,
	...palettes.oliveDark,
	...palettes.oliveDarkA,
	...palettes.sandDark,
	...palettes.sandDarkA,
	...palettes.sageDark,
	...palettes.sageDarkA
}

const themeColorTokens = {
	// Contrast Theme Colors
	'contrast-contrast': 'var(--colors-slate1)',
	'contrast-bg-subtle': 'var(--colors-slate2)',
	'contrast-bg': 'var(--colors-slate3)',
	'contrast-bg-hover': 'var(--colors-slate4)',
	'contrast-bg-active': 'var(--colors-slate5)',
	'contrast-border-subtle': 'var(--colors-slate6)',
	'contrast-border': 'var(--colors-slate7)',
	'contrast-border-hover': 'var(--colors-slate8)',
	contrast: 'var(--colors-slate9)',
	'contrast-hover': 'var(--colors-slate10)',
	'contrast-text-subtle': 'var(--colors-slate11)',
	'contrast-text': 'var(--colors-slate12)',
	'contrast-shadow': 'var(--colors-slate-a9)',

	// Primary Theme Colors
	'primary-contrast': 'var(--colors-amber1)',
	'primary-bg-subtle': 'var(--colors-amber2)',
	'primary-bg': 'var(--colors-amber3)',
	'primary-bg-hover': 'var(--colors-amber4)',
	'primary-bg-active': 'var(--colors-amber5)',
	'primary-border-subtle': 'var(--colors-amber6)',
	'primary-border': 'var(--colors-amber7)',
	'primary-border-hover': 'var(--colors-amber8)',
	primary: 'var(--colors-amber9)',
	'primary-hover': 'var(--colors-amber10)',
	'primary-text-subtle': 'var(--colors-amber11)',
	'primary-text': 'var(--colors-amber12)',
	'primary-shadow': 'var(--colors-amber-a9)',

	// Secondary Theme Colors
	'secondary-contrast': 'var(--colors-sky1)',
	'secondary-bg-subtle': 'var(--colors-sky2)',
	'secondary-bg': 'var(--colors-sky3)',
	'secondary-bg-hover': 'var(--colors-sky4)',
	'secondary-bg-active': 'var(--colors-sky5)',
	'secondary-border-subtle': 'var(--colors-sky6)',
	'secondary-border': 'var(--colors-sky7)',
	'secondary-border-hover': 'var(--colors-sky8)',
	secondary: 'var(--colors-sky9)',
	'secondary-hover': 'var(--colors-sky10)',
	'secondary-text-subtle': 'var(--colors-sky11)',
	'secondary-text': 'var(--colors-sky12)',
	'secondary-shadow': 'var(--colors-sky-a9)',

	// Warning Context Colors
	'warning-contrast': 'var(--colors-yellow1)',
	'warning-bg-subtle': 'var(--colors-yellow2)',
	'warning-bg': 'var(--colors-yellow3)',
	'waring-bg-hover': 'var(--colors-yellow4)',
	'warning-bg-active': 'var(--colors-yellow5)',
	'warning-border-subtle': 'var(--colors-yellow6)',
	'warning-border': 'var(--colors-yellow7)',
	'warning-border-hover': 'var(--colors-yellow8)',
	warning: 'var(--colors-yellow9)',
	'warning-hover': 'var(--colors-yellow10)',
	'warning-text-subtle': 'var(--colors-yellow11)',
	'warning-text': 'var(--colors-yellow12)',
	'warning-shadow': 'var(--colors-yellow-a9)',

	// Danger Context Colors
	'danger-contrast': 'var(--colors-red1)',
	'danger-bg-subtle': 'var(--colors-red2)',
	'danger-bg': 'var(--colors-red3)',
	'danger-bg-hover': 'var(--colors-red4)',
	'danger-bg-active': 'var(--colors-red5)',
	'danger-border-subtle': 'var(--colors-red6)',
	'danger-border': 'var(--colors-red7)',
	'danger-border-hover': 'var(--colors-red8)',
	danger: 'var(--colors-red9)',
	'danger-hover': 'var(--colors-red10)',
	'danger-text-subtle': 'var(--colors-red11)',
	'danger-text': 'var(--colors-red12)',
	'danger-shadow': 'var(--colors-red-a9)',

	// Succcess Context Colors
	'success-contrast': 'var(--colors-green1)',
	'success-bg-subtle': 'var(--colors-green2)',
	'success-bg': 'var(--colors-green3)',
	'success-bg-hover': 'var(--colors-green4)',
	'success-bg-active': 'var(--colors-green5)',
	'success-border-subtle': 'var(--colors-green6)',
	'success-border': 'var(--colors-green7)',
	'success-border-hover': 'var(--colors-green8)',
	success: 'var(--colors-green9)',
	'success-hover': 'var(--colors-green10)',
	'success-text-subtle': 'var(--colors-green11)',
	'success-text': 'var(--colors-green12)',
	'success-shadow': 'var(--colors-green-a9)',

	// Info Context Colors
	'info-contrast': 'var(--colors-blue1)',
	'info-bg-subtle': 'var(--colors-blue2)',
	'info-bg': 'var(--colors-blue3)',
	'info-bg-hover': 'var(--colors-blue4)',
	'info-bg-active': 'var(--colors-blue5)',
	'info-border-subtle': 'var(--colors-blue6)',
	'info-border': 'var(--colors-blue7)',
	'info-border-hover': 'var(--colors-blue8)',
	info: 'var(--colors-blue9)',
	'info-hover': 'var(--colors-blue10)',
	'info-text-subtle': 'var(--colors-blue11)',
	'info-text': 'var(--colors-blue12)',
	'info-shadow': 'var(--colors-blue-a9)'
}

export const colorTokens = {
	...lightPaletteTokens,
	...themeColorTokens
}

export const darkColorTokens = {
	...darkPaletteTokens,
	...themeColorTokens
}

export const opacityTokens = {
	0: '0',
	5: '0.05',
	10: '0.1',
	20: '0.2',
	25: '0.25',
	30: '0.3',
	40: '0.4',
	50: '0.5',
	60: '0.6',
	70: '0.7',
	75: '0.75',
	80: '0.8',
	90: '0.9',
	95: '0.95',
	100: '1'
}

export const shadowTokens = {
	color: 'var(--colors-black-a9)',
	xs: '0 1px 2px 0 var(--shadows-color)',
	sm: '0 1px 3px 0 var(--shadows-color), 0 1px 2px -1px var(--shadows-color)',
	md: '0 4px 6px -1px var(--shadows-color), 0 2px 4px -2px var(--shadows-color)',
	lg: '0 10px 15px -3px var(--shadows-color), 0 4px 6px -4px var(--shadows-color)',
	xl: '0 20px 25px -5px var(--shadows-color), 0 8px 10px -6px var(--shadows-color)',
	'2xl': '0 25px 50px -12px var(--shadows-color)',
	inner: 'inset 0 2px 4px 0 var(--shadows-color)',
	none: 'none'
}
