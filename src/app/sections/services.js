export default function Services() {
	return (
		<section
			id='services'
			className='bg-primary relative w-full h-screen p-8 text-dark flex align-center items-center text-center flex-col gap-3'
		>
			<div className='text-white text-left'>
				<div className='font-outfit text-sm xl:text-lg'>SERVICES</div>
				<div className='font-goudy font-medium text-lg  w-3/4  xl:text-2xl'>
					Filipino Cuisine, Taste of Home
				</div>
			</div>
			<div className='relative w-full h-1/4 bg-dark rounded-xl shadow-lg'>
				<img
					src={'/filipino-foods.jpg'}
					className={'w-full h-full object-cover rounded-xl'}
				/>
			</div>
			<div className='font-crimson-pro text-sm text-left text-white font-light'>
				<p>
					Indulge in the rich and comforting flavors of Filipino
					cuisine that bring the warmth of home to every bite.
				</p>{' '}
				<p className='mb-4'></p>
				<p>
					Whether you're longing for the familiar taste of Adobo or
					the savory goodness of Sinigang, our dishes are crafted to
					make you feel right at home.
				</p>
			</div>
			<div className='flex flex-row w-full text-xs justify-between gap-3 font-outfit'>
				<div className='flex flex-row w-full text-xs justify-between gap-3'>
					<div className='bg-white p-2 w-1/2 rounded-lg'>
						Order Online
					</div>
					<div className='bg-white p-2 w-1/2 rounded-lg'>Dine In</div>
				</div>
			</div>
			<div className='flex flex-row w-full text-xs justify-between gap-3 font-outfit'>
				<div className='bg-white p-2 w-1/2 rounded-lg'>
					Event Catering
				</div>
				<div className='bg-white p-2 w-1/2 rounded-lg'>Take Out</div>
			</div>
		</section>
	);
}
