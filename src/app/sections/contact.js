export default function Contact() {
	return (
		<section id='contact'>
			<div className='bg-secondary relative w-full p-8 py-16 justify-center align-center text-center flex flex-col gap-3 min-h-screen'>
				<div className='font-goudy font-semibold text-lg  xl:text-2xl text-primary text-base'>
					KNOW MORE ABOUT US
				</div>
				<div className='flex flex-grow flex-col gap-8'>
					<div className='flex flex-col text-outfit text-dark text-xs gap-1'>
						<div>
							<div>204-414-451</div>
							<div>204-898-0318</div>
						</div>
					</div>

					<div className='h-auto flex flex-col gap-1'>
						<img
							src={'/map-min.gif'}
							className={'w-full h-full rounded-xl'}
						/>
						<div className='text-outfit text-dark text-xs'>
							<div>You may also dine with us at</div>
							<div>737 Keewatin St., Winnipeg, MB (at PCCM)</div>
						</div>
					</div>
					<div className='text-outfit text-dark text-xs'>
						<div>Visit our facebook page</div>
						<div>Gersalakot Restaurant</div>
					</div>
					<div>
						2024 © Ger Salakot Restaurant. All Rights Reserved.
					</div>
				</div>
			</div>
		</section>
	);
}
