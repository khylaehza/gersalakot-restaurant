import { useRef, useEffect } from 'react';
export default function Services() {
	const sectionRef = useRef(null);
	useEffect(() => {
		const handleScroll = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
					sectionRef.current.classList.add('in-view');
				} else {
					sectionRef.current.classList.remove('in-view');
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section
			id='services'
			ref={sectionRef}
			className='bg-primary relative w-full xs:p-5 p-10 text-dark flex align-center items-center text-center flex-col md:flex-row min-h-screen md:p-16 md:h-screen transition-opacity duration-500 ease-in-out opacity-100'
		>
			<div className='flex flex-grow flex-col xs:gap-3 gap-7 md:flex-row md:h-full md:gap-8 '>
				<div className='relative w-full xs:h-52 h-auto rounded-xl shadow-lg hidden md:block md:w-1/3 md:min-h-full'>
					<img
						src={'/filipino-foods-crop.jpg'}
						className={'w-full h-full object-cover rounded-xl'}
					/>
				</div>
				<div className='md:flex md:h-full md:w-2/3 lg:gap-4'>
					<div className='flex flex-grow flex-col gap-3 md:w-1/3 md:justify-center lg:gap-8 md:h-full'>
						<div></div>
						<div className='text-white text-left md:h-auto'>
							<div className='font-outfit xs:text-sm text-lg xl:text-xl'>
								SERVICES
							</div>
							<div className='font-goudy font-medium xs:text-lg text-3xl  xl:text-3xl'>
								Filipino Cuisine, Taste of Home
							</div>
						</div>
						<div className='relative w-full h-52 rounded-xl shadow-lg md:hidden'>
							<img
								src={'/filipino-foods.jpg'}
								className={
									'w-full h-full object-cover rounded-xl'
								}
							/>
						</div>
						<div className='font-crimson-pro xs:text-sm text-xl text-left text-white font-light md:text-lg md:h-auto'>
							<p>
								Indulge in the rich and comforting flavors of
								Filipino cuisine that bring the warmth of home
								to every bite.
							</p>{' '}
							<p className='mb-4'></p>
							<p>
								Whether you're longing for the familiar taste of
								Adobo or the savory goodness of Sinigang, our
								dishes are crafted to make you feel right at
								home.
							</p>
						</div>
						<div className='flex flex-col gap-3  md:h-auto'>
							<div className='flex flex-row w-full xs:text-xs text-sm lg:text-md justify-between gap-3 font-outfit'>
								<div className='flex flex-row w-full  justify-between gap-3 '>
									<div className='flex flex-row gap-1 bg-white p-2 w-1/2 rounded-lg'>
										<img
											width='16'
											height='16'
											src='https://img.icons8.com/color/48/internet--v1.png'
											alt='internet--v1'
										/>

										<span>Order Online</span>
									</div>
									<div className='flex flex-row  gap-1 bg-white p-2 w-1/2 rounded-lg'>
										<img
											width='16'
											height='16'
											src='https://img.icons8.com/color/48/shopaholic.png'
											alt='shopaholic'
										/>
										<span>Take Out</span>
									</div>
								</div>
							</div>
							<div className='md:h-auto flex flex-row w-full xs:text-xs text-sm lg:text-md justify-between gap-3 font-outfit '>
								<div className='flex flex-row gap-1 bg-white p-2 w-1/2 rounded-lg'>
									<img
										width='16'
										height='16'
										src='https://img.icons8.com/color/48/tear-off-calendar--v1.png'
										alt='tear-off-calendar--v1'
									/>
									<span>Event Catering</span>
								</div>
								<div className='flex flex-row gap-1 bg-white p-2 w-1/2 rounded-lg'>
									<img
										width='16'
										height='16'
										src='https://img.icons8.com/color/48/dining-room.png'
										alt='dining-room'
									/>

									<span>Dine In</span>
								</div>
							</div>
						</div>
						<div className='flex flex-col xs:flex-row md:flex-col xs:gap-0 gap-2 w-full h-auto md:h-1/3 p-0 lg:hidden'>
							<img
								src='/filipino-restaurant.jpg'
								className='w-full xs:w-1/2 md:w-full h-1/2 md:h-1/2 object-cover rounded-md pr-0 xs:pr-1 md:pr-0'
							/>
							<img
								src='/filipino-catering.jpg'
								className='w-full xs:w-1/2 md:w-full h-1/2 md:h-1/2 object-cover rounded-md pl-0 xs:pl-1 md:pl-0'
							/>
						</div>
					</div>
					<div className='flex flex-col xs:flex-row md:flex-col xs:gap-0 lg:gap-4 w-1/3 h-full p-0 hidden lg:block'>
						<img
							src='/filipino-restaurant.jpg'
							className='w-full xs:w-1/2 md:w-full h-full md:h-1/2 object-cover rounded-md pr-0 pb-1 md:pr-0'
						/>
						<img
							src='/filipino-catering.jpg'
							className='w-full xs:w-1/2 md:w-full h-1/2 md:h-1/2 object-cover rounded-md pl-0 pt-1 md:pl-0'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
