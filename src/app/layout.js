import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Ger Salakot Restaurant | Authentic Filipino Cuisine at Canada',
	description:
		'Discover the flavors of the Philippines at Ger Salakot Restaurant, located at 737 Keewatin St., Winnipeg, Manitoba, Canada. Indulge in traditional Filipino dishes in the Philippine Canadian Centre of Manitoba (PCCM).',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
