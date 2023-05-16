$colors: contrast, primary, secondary, info, warning, danger, success, tomato, tomato-a, red, red-a,
crimson, crimson-a, pink, pink-a, plum, plum-a, purple, purple-a, violet, violet-a, indigo,
indigo-a, blue, blue-a, cyan, cyan-a, teal, teal-a, green, green-a, grass, grass-a, brown, brown-a,
orange, orange-a, sky, sky-a, mint, mint-a, lime, lime-a, yellow, yellow-a, amber, amber-a, gold,
gold-a, bronze, bronze-a, gray, gray-a, mauve, mauve-a, slate, slate-a, olive, oliveA, sand,
sand-a, sage, sage-a;

@each $color in $colors {
	@for $i from 1 through 12 {
		.color-#{$color}-#{$i} {
			color: var(--colors-#{$color}#{$i});
		}
		.background-#{$name}-#{$i} {
			background-color: var(--colors-#{$color}-#{$i});
}
}
}
