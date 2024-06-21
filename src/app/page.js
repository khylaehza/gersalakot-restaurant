import Image from 'next/image';
import { Home, Menu, Services, Contact } from './sections';
export default function Index() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Home />
			<Menu />
			<Services />
			<Contact />
		</main>
	);
}
