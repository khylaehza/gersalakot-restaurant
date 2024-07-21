export default function Services() {
	return (
		<section
			id='services'
			className='bg-primary relative w-full p-8 text-dark flex align-center items-center text-center flex-col md:flex-row md:h-screen md:p-16'
		>
			<div className='flex flex-grow flex-col gap-3 md:flex-row md:h-full md:gap-8'>
				<div className='relative w-full h-52 bg-dark rounded-xl shadow-lg hidden md:block md:w-1/4 md:h-full'>
					<img
						src={'/filipino-foods-crop.jpg'}
						className={'w-full h-full object-cover rounded-xl'}
					/>
				</div>
				<div className='flex flex-grow flex-col gap-3 md:w-1/3 md:justify-center lg:gap-8'>
					<div className='text-white text-left'>
						<div className='font-outfit text-sm xl:text-lg'>
							SERVICES
						</div>
						<div className='font-goudy font-medium text-lg  w-3/4  xl:text-2xl'>
							Filipino Cuisine, Taste of Home
						</div>
					</div>
					<div className='relative w-full h-52 bg-dark rounded-xl shadow-lg md:hidden'>
						<img
							src={'/filipino-foods.jpg'}
							className={'w-full h-full object-cover rounded-xl'}
						/>
					</div>
					<div className='font-crimson-pro text-sm text-left text-white font-light lg:text-base'>
						<p>
							Indulge in the rich and comforting flavors of
							Filipino cuisine that bring the warmth of home to
							every bite.
						</p>{' '}
						<p className='mb-4'></p>
						<p>
							Whether you're longing for the familiar taste of
							Adobo or the savory goodness of Sinigang, our dishes
							are crafted to make you feel right at home.
						</p>
					</div>
					<div className='flex flex-col gap-3'>
						<div className='flex flex-row w-full text-xs justify-between gap-3 font-outfit lg:text-sm'>
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
						<div className='flex flex-row w-full text-xs justify-between gap-3 font-outfit lg:text-sm'>
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
				</div>
				<div className='flex flex-row md:w-1/4'>
					<div className='relative flex flex-row w-full h-28 rounded-xl  gap-0 md:flex-col md:h-full md:gap-2'>
						<img
							src={'/filipino-restaurant.jpg'}
							className={
								'w-1/2 h-full object-cover rounded-md pr-1 md:w-full md:pr-0'
							}
						/>
						<img
							src={'/filipino-catering.jpg'}
							className={
								'w-1/2 h-full object-cover rounded-md pl-1 md:w-full md:pl-0'
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
