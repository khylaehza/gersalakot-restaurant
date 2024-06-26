export default function Menu() {
	return (
		<section
			id='menu'
			className='bg-secondary relative w-full h-screen py-8 px-4 text-dark flex align-center items-center text-center flex-col gap-4  justify-center'
		>
			<div>
				<div className='font-outfit text-sm'>
					GER SALAKOT RESTAURANT
				</div>
				<div className='font-goudy font-semibold text-lg '>
					Popular Menu
				</div>
			</div>
			<div className='flex flex-row justify-between w-full items-center gap-3 h-4/5'>
				<button className='flex justify-center items-center border-primary-25 border rounded-full border-solid w-10 h-9 bg-white-50 shadow-lg'>
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
				<div className='block rounded-lg p-6 shadow-cards w-full h-full flex flex-col items-center bg-white'>
					<div className='relative w-full  flex flex-1 items-center justify-center overflow-hidden'>
						<img
							src={'/plate.jpg'}
							className={'w-full absolute object-cover z-0'}
						/>

						<img
							src={'/foods/pancit.jpg'}
							className={
								'absolute object-cover z-2 w-1/2  rounded-full shadow-xl'
							}
						/>
					</div>
					<div className='h-1/8 font-crimson-pro flex text-left w-full flex-col gap-2'>
						<div className='font-medium'>Pancit Bihon</div>
						<div className='text-sm'>
							A classic Filipino noodle dish made with thin rice
							noodles stir-fried with a mix of savory vegetables,
							tender chicken, and seasoned with soy sauce and
							citrus.
						</div>
					</div>
				</div>
				<button className='flex justify-center items-center bg-primary-75 rounded-full w-10 h-9 shadow-lg'>
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
