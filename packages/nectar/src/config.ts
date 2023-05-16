import { darkTokens, mediaQueries, tokens } from '@nectar-ui/tokens'
import { Configuration } from '@nectar-ui/types'

export const config: Configuration = {
	tokens: {
		base: tokens,
		dark: darkTokens
	},
	mediaQueries: mediaQueries,
	properties: {
		mt: (value: React.CSSProperties['marginTop']) => ({
			marginTop: value
		}),
		mb: (v: React.CSSProperties['marginBottom']) => ({
			marginBottom: v
		}),
		mr: (v: React.CSSProperties['marginRight']) => ({
			marginRight: v
		}),
		ml: (v: React.CSSProperties['marginLeft']) => ({
			marginLeft: v
		}),
		mx: (v: React.CSSProperties['marginLeft']) => ({
			marginLeft: v,
			marginRight: v
		}),
		my: (v: React.CSSProperties['marginTop']) => ({
			marginTop: v,
			marginBottom: v
		}),
		m: (v: React.CSSProperties['margin']) => ({
			margin: v
		}),
		pt: (v: React.CSSProperties['paddingTop']) => ({
			paddingTop: v
		}),
		pb: (v: React.CSSProperties['paddingBottom']) => ({
			paddingBottom: v
		}),
		pr: (v: React.CSSProperties['paddingRight']) => ({
			paddingRight: v
		}),
		pl: (v: React.CSSProperties['paddingLeft']) => ({
			paddingLeft: v
		}),
		px: (v: React.CSSProperties['paddingLeft']) => ({
			paddingLeft: v,
			paddingRight: v
		}),
		py: (v: React.CSSProperties['paddingTop']) => ({
			paddingTop: v,
			paddingBottom: v
		}),
		p: (v: React.CSSProperties['padding']) => ({
			padding: v
		})
	}
}
