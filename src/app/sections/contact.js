import { useRef, useEffect } from 'react';
export default function Contact() {
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
			id='contact'
			ref={sectionRef}
		>
			<div className='bg-secondary relative w-full p-8 py-16 flex flex-col items-center justify-center text-center h-screen transition-opacity duration-500 ease-in-out opacity-100'>
				<div className='font-goudy font-semibold text-base sm:text-2xl text-primary'>
					KNOW MORE ABOUT US
				</div>
				<div
					className='flex flex-grow flex-col items-center text-center
				mt-4'
				>
					<div className='flex flex-col sm:flex-row text-outfit text-dark text-xs sm:text-sm lg:text-base gap-3'>
						<div className='flex items-center justify-center gap-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1}
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
								/>
							</svg>
							204-414-451 / 204-898-0318
						</div>
						<div className='flex items-center justify-center'>
							737 Keewatin St., Winnipeg, MB (at PCCM)
						</div>
						<div className='gap-2 flex items-center justify-center'>
							<a
								href='https://www.facebook.com/profile.php?id=100057468998304'
								target='_blank'
								rel='noopener noreferrer'
								className='gap-2 flex items-center justify-center hover:text-primary'
							>
								<img
									width='23'
									height='23'
									src='https://img.icons8.com/ios/50/facebook-new.png'
									alt='facebook-new'
								/>
								Gersalakot Restaurant
							</a>
						</div>
					</div>

					<div className='w-full h-full flex flex-col sm:flex-row gap-1 p-6 sm:gap-4'>
						<div className='w-full sm:w-1/2 h-full'>
							<img
								src='/map-min.gif'
								className='w-full h-full rounded-xl shadow-lg'
								alt='Map'
							/>
						</div>
						<div className='w-full sm:w-1/2 h-full'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.028981230362!2d-97.19688452357742!3d49.935797471498496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea724375b0005d%3A0x9dc1ddee999ec14e!2s737%20Keewatin%20St%2C%20Winnipeg%2C%20MB%20R2X%203B9%2C%20Canada!5e0!3m2!1sen!2sph!4v1722137370687!5m2!1sen!2sph'
								width='600'
								height='450'
								allowFullScreen=''
								loading='lazy'
								className='w-full h-full rounded-xl shadow-lg'
							></iframe>
						</div>
					</div>
				</div>
				<div className='text-xs sm:text-sm lg:text-base text-primary'>
					2024 © Ger Salakot Restaurant. All Rights Reserved.
				</div>
			</div>
		</section>
	);
}
