'use client';
import { Hero, Menu, Services, Contact } from './sections';
import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import './globals.css';

export default function Index() {
	useEffect(() => {
		document.body.classList.add('page-loaded');
	}, []);

	return (
		<div className='container-fluid text-white bg-dark transition-all duration-500 ease-in-out'>
			<Hero />
			<Menu />
			<Services />
			<Contact />
		</div>
	);
}
