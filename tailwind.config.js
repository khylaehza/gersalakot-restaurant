/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'crimson-pro': ['Crimson Pro', 'serif'],
				outfit: ['Outfit', 'sans-serif'],
				goudy: ['Sorts Mill Goudy', 'serif'],
			},
			boxShadow: {
				custom: '2px 4px 20px 4px rgba(0, 0, 0, 0.25)',
				btn: '1px 1px 10px 0px rgba(101, 110, 73, 0.5)',
				'btn-primary': '1px 1px 8px 0px rgba(0, 0, 0, 0.25)',
				cards: '0px 0px 14px 0px rgba(101, 110, 73, 0.1)',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#4B5234',
			'accent-25': 'rgba(193, 191, 81, 0.25)',
			secondary: '#EDEDED',
			white: '#FFF',
			'white-50': 'rgba(255, 255, 255, 0.50)',
			dark: '#000',
			'primary-75': 'rgba(75, 82, 52, 0.75)',
			'primary-25': 'rgba(75, 82, 52, 0.25)',
		},
	},
	plugins: [],
};
