import React from 'react'
import behance from '../assets/images/contributors/behance.png';
import behance1 from '../assets/images/contributors/behance-1.png';
import behance2 from '../assets/images/contributors/behance-2.png';
import behance3 from '../assets/images/contributors/behance-3.png';
import behance4 from '../assets/images/contributors/behance-4.png';


const Contributors = () => {
	return (
		<>
			<section className='bg-secondary py-20 font-poppins'>
				<div className=" mx-auto text-center">
						{/* Contributors Heading */}
						<h2 className="text-4xl font-bold text-black mb-4">
							Contributors<span className='text-primary'>.</span>
						</h2>
						<p className="text-gray-600 max-w-xl mx-auto">
						They support products that simplify and automate decent mechanic processes saving time for activities.
						</p>
				</div>

				{/* display logos */}
				<div className='container mx-auto px-20 py-8 max-w-none'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 py-12'>
						<img src={behance}/>
						<img src={behance1}/>
						<img src={behance2}/>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-2 px-15 py-12' >
						<img src={behance3}/>
						<img src={behance4}/>
					</div>
				</div>
				
			</section>
		</>
	)
}

export default Contributors