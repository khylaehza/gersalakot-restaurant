'use client';
import { useState } from 'react';

export default function Hero() {
	const [openNav, setOpenNav] = useState(false);

	return (
		<section className='relative h-screen'>
			<div>
				<img
					src={'/filfoods-bg.jpg'}
					alt={'Filipino Foods'}
					className={
						'absolute object-cover blur-sm w-full h-full opacity-80'
					}
				/>
				<div
					className={'absolute bg-[#4B5234] w-full h-full opacity-70'}
				/>
			</div>
			<div
				className={
					'relative flex flex-col h-screen w-full justify-between'
				}
			>
				<header
					className={`relative flex flex-col font-crimson-pro text-xl m-3 md:h-32 ${openNav ? 'h-full' : 'h-2'}`}
				>
					<div className='flex flex-row'>
						<div className='basis-1/5' />

						<nav className={'basis-3/5 hidden md:block'}>
							<ul
								className={
									'flex flex-row flex-nowrap justify-between items-center'
								}
							>
								<li>HOME</li>
								<li>MENU</li>
								<li>
									<a href={'#'}>
										<img
											src={'/logo.png'}
											className={'w-24 h-24'}
										/>
									</a>
								</li>
								<li>SERVICES</li>
								<li>CONTACT</li>
							</ul>
						</nav>

						<div className='basis-1/5 z-20'>
							<input
								type='checkbox'
								className='peer hidden'
								id='navbar-open'
								onClick={() => setOpenNav(!openNav)}
							/>
							<label
								className='absolute top-6 right-6 cursor-pointer md:hidden'
								htmlFor='navbar-open'
							>
								<span className='sr-only'>
									Toggle Navigation
								</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 z-20'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</label>
						</div>
					</div>
					<div
						className={`md:hidden h-full ${openNav ? 'block' : 'hidden'}`}
					>
						<nav className='flex flex-col h-full'>
							<div className='w-full mx-auto border-t-[1px] border-accent-25 mt-20' />
							<ul className='flex flex-col flex-nowrap h-full justify-between items-center py-16'>
								<li>
									<a href='#'>
										<img
											src='/logo.png'
											className='w-24 h-24'
										/>
									</a>
								</li>
								<li>HOME</li>
								<li>MENU</li>
								<li>SERVICES</li>
								<li>CONTACT</li>
							</ul>
						</nav>
					</div>
					<div className='w-4/5 mx-auto border-t-[1px] border-accent-25 mt-5 hidden md:block'></div>
				</header>
				<div
					className={`relative h-full px-6 sm:px-10 py-2 md:py-0 md:px-24 xl:px-40 2xl:px-48 flex flex-col justify-center ${openNav ? 'hidden' : 'block'}`}
				>
					<div
						className={
							'flex flex-col justify-center items-center gap-0 sm:flex-row md:-mt-14'
						}
					>
						<div
							className={
								'font-crimson-pro font-semibold text-4xl sm:text-5xl italic text-center sm:text-left md:-mt-14 lg:text-6xl xl:text-7xl'
							}
						>
							Where Filipino family style dishes are its best!
						</div>
						<div
							className={
								'relative flex flex-1 sm:flex-none w-40 sm:w-48 sm:top-24 sm:z-30 md:top-10 md:w-52 md:left-12 xl:w-60'
							}
						>
							<img
								src={'/gerome-labial.png'}
								alt={'Gerome Labial'}
								className={'w-full h-auto '}
							/>
						</div>
					</div>

					<div
						className={
							'bg-secondary rounded-2xl lg:rounded-3xl shadow-custom p-4 lg:p-6 sm:p-5 text-dark flex flex-col gap-1 z-20 -mt-14 sm:w-4/5 md:-mt-28 md:w-full lg:-mt-24 xl:-mt-28'
						}
					>
						<div
							className={
								'font-outfit font-medium text-base xl:text-lg'
							}
						>
							11 years of serving.
						</div>
						<div className='font-goudy text-sm xl:text-base w-full md:w-3/5 lg:w-full'>
							Experience the vibrant flavors of Filipino cuisine
							at Ger Salakot Restaurant in Canada.
						</div>
						<div className='mt-1 flex flex-row gap-4 font-outfit text-xs xl:text-sm'>
							<button className='bg-primary text-white rounded-xl shadow-btn-primary font-medium w-1/2 sm:w-36 p-2'>
								ORDER NOW
							</button>
							<button className='bg-white text-dark p-2 rounded-xl shadow-btn w-1/2 sm:w-36'>
								VIEW MENU
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
