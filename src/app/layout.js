import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Ger Salakot Restaurant | Authentic Filipino Cuisine at Canada',
	description:
		'Discover the flavors of the Philippines at Ger Salakot Restaurant, located at 737 Keewatin St., Winnipeg, Manitoba, Canada. Indulge in traditional Filipino dishes in the Philippine Canadian Centre of Manitoba (PCCM).',
	og: {
		title: 'Ger Salakot Restaurant | Authentic Filipino Cuisine in Canada',
		description:
			'Experience authentic Filipino cuisine at Ger Salakot Restaurant in Canada.',
		image: 'https://gersalakot-restaurant.vercel.app/preview.png',
		url: 'https://gersalakot-restaurant.vercel.app/',
		type: 'website',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					property='og:url'
					content='https://gersalakot-restaurant.vercel.app/'
				/>
				<meta
					property='og:title'
					content='Ger Salakot Restaurant | Authentic Filipino Cuisine at Canada'
				/>
				<meta
					property='og:description'
					content='Discover the flavors of the Philippines at Ger Salakot Restaurant, located at 737 Keewatin St., Winnipeg, Manitoba, Canada. Indulge in traditional Filipino dishes in the Philippine Canadian Centre of Manitoba (PCCM).'
				/>
				<meta
					property='og:image'
					content='https://metatags.io/images/meta-tags.png'
				/>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Outfit:wght@100..900&family=Sorts+Mill+Goudy:ital@0;1&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
