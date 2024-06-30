'use client';
import { useState, useEffect } from 'react';

const Card = ({ food }) => {
	return (
		<div className='block rounded-lg p-0 shadow-cards w-full h-full flex flex-col items-center bg-white transition-transform duration-500 ease-in-out transform'>
			<div className='relative w-full  flex flex-1 items-center justify-center overflow-hidden '>
				<img
					src={'/plate.jpg'}
					className={'w-full absolute object-cover z-0'}
				/>

				<img
					src={`/foods/${food.image}`}
					className={
						'absolute object-cover z-2 w-1/2  rounded-full shadow-xl'
					}
				/>
			</div>
			<div className='h-1/8 pt-0 p-6 font-crimson-pro flex text-left w-full flex-col gap-2'>
				<div className='font-medium '>{food.name}</div>
				<div className='text-sm'>{food.desc}</div>
			</div>
		</div>
	);
};

export default function Menu() {
	const foods = [
		{
			name: 'Pancit Bihon',
			image: 'pancit.jpg',
			desc: 'A classic Filipino noodle dish made with thin rice noodles stir-fried with a mix of savory vegetables, tender chicken, and seasoned with soy sauce and citrus.',
		},
		{
			name: 'Bicol Express',
			image: 'bcolexpress.jpg',
			desc: 'A spicy Filipino stew made from pork, coconut milk, shrimp paste, and an abundance of chili peppers. This rich and flavorful dish hails from the Bicol region.',
		},
		{
			name: 'Sweet and Sour',
			image: 'sweetansour.jpg',
			desc: 'A dish featuring meat fried and simmered in a vibrant sauce made of vinegar, ketchup, sugar, and pineapple, creating a balance of tangy and sweet flavors.',
		},
		{
			name: 'Dinakdakan',
			image: 'dinakdakan.jpg',
			desc: 'A savory Ilocano delicacy made from grilled pig parts, usually seasoned with vinegar, calamansi, and spices, resulting in a flavorful and creamy dish.',
		},
		{
			name: 'Pata Tim',
			image: 'patatim.jpg',
			desc: 'A sumptuous Filipino-Chinese dish featuring braised pork hock cooked slowly until tender in a rich, flavorful sauce made from soy sauce, sugar, and spices',
		},
		{
			name: 'Karekare',
			image: 'karekare.jpg',
			desc: 'A beloved Filipino stew known for its rich and creamy peanut sauce. Typically made with vegetables,  and served with a side of bagoong (fermented shrimp paste).',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(3);

	useEffect(() => {
		const updateItemsPerPage = () => {
			if (window.innerWidth < 640) {
				setItemsPerPage(1);
			} else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
				setItemsPerPage(3);
			} else {
				setItemsPerPage(4);
			}
		};

		window.addEventListener('resize', updateItemsPerPage);
		updateItemsPerPage();

		return () => {
			window.removeEventListener('resize', updateItemsPerPage);
		};
	}, []);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			Math.min(prevIndex + itemsPerPage, foods.length - itemsPerPage)
		);
	};

	return (
		<section
			id='menu'
			className='bg-secondary relative w-full h-screen py-8 px-4 text-dark flex align-center items-center text-center flex-col gap-4 justify-center'
		>
			<div>
				<div className='font-outfit text-sm '>
					GER SALAKOT RESTAURANT
				</div>
				<div className='font-goudy font-semibold text-lg '>
					Popular Menu
				</div>
			</div>
			<div className='flex flex-row justify-between w-full items-center gap-3 h-4/5  overflow-hidden'>
				<button
					className='flex justify-center items-center border-primary-25 border rounded-full border-solid w-10 h-9 bg-white-50 shadow-lg disabled:opacity-50'
					onClick={handlePrev}
					disabled={currentIndex === 0}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='#4B5234'
						className='size-4'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M15.75 19.5 8.25 12l7.5-7.5'
						/>
					</svg>
				</button>

				<div className='w-full h-full relative flex flex-row gap-4 overflow-hidden'>
					<div
						className='flex w-full h-full transition-transform duration-500 ease-in-out'
						style={{
							transform: `translateX(-${(100 / itemsPerPage) * currentIndex}%)`,
						}}
					>
						{foods.map((item, index) => (
							<div
								key={index}
								className='w-full md:w-1/3 lg:w-1/4 flex flex-shrink-0  p-2 '
							>
								<Card food={item} />
							</div>
						))}
					</div>
				</div>
				<button
					className='flex justify-center items-center bg-primary-75 rounded-full w-10 h-9 shadow-lg disabled:opacity-50'
					onClick={handleNext}
					disabled={
						currentIndex >=
						Math.ceil(foods.length / itemsPerPage) - 1
					}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='white'
						className='size-4'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='m8.25 4.5 7.5 7.5-7.5 7.5'
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}
