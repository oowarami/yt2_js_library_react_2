import React from 'react';
import ornament from '../assets/images/contact/ornament.svg';
import logo from '../assets/images/nav/logo.svg';
import vector from '../assets/images/contact/Vector.svg';
import vector1 from '../assets/images/contact/Vector-1.svg';
import vector2 from '../assets/images/contact/Vector-2.svg';
import vector3 from '../assets/images/contact/Vector-3.svg';

const Contact = () => {
	return (
		<>
			<section id='contact' className='bg-secondary py-15 font-poppins'>
			{/* image */}
			<div className='flex justify-center items-center'>
				<img src={ornament}/>
			</div>
			{/* Contact Heading */}
			<div className='mx-auto text-center py-10'>
				<h2 className='text-4xl font-bold text-primary mb-4 py-4'>
						Contact.
				</h2>
				<p className='text-gray-600 max-w-xl mx-auto'>Truth is a deep kindness that teaches us to be content in our everyday life and share with the people the same happiness. the feeling of sunday is the same everywhere: heavy, melancholy, standing still.</p>
			</div>
			{/* logo*/}
			<div className='flex justify-center items-center py-12'>
				<img src={logo}/>
			</div>
			{/* social icons*/}
			<div className='flex justify-center items-center py-8 gap-4'>
			<img src={vector}/>
			<img src={vector1}/>
			<img src={vector2}/>
			<img src={vector3}/>
			</div>

			<p className='mx-auto text-center'>© 2021 AbbVie Inc. . All rights reserved</p>

			</section>
		</>
	)
}

export default Contact