const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme('fontSize.2xl'), fontWeight: 'bold' },
				h2: { fontSize: theme('fontSize.xl'), fontWeight: 'bold' },
				h3: { fontSize: theme('fontSize.lg'), fontWeight: 'bold' },
			});
		}),
	],
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	darkMode: 'class',
	screens: {
		sm: '640px',
		// => @media (min-width: 640px) { ... }
		md: '768px',
		// => @media (min-width: 768px) { ... }
		lg: '1024px',
		// => @media (min-width: 1024px) { ... }
		xl: '1280px',
		// => @media (min-width: 1280px) { ... }
		'2xl': '1536px',
		// => @media (min-width: 1536px) { ... }
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['inter', 'Inter'],
			},
		},
	},
};
