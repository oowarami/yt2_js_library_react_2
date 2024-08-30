import React from 'react';
import uiux from  '../assets/images/services/ui_ux.svg'
import wpdesign from  '../assets/images/services/wpdesign.svg'
import wpdeveloping from  '../assets/images/services/wpdeveloping.svg'

const Services = () => {
	return (
		<>
			<section id='services' className='bg-secondary py-20 font-poppins'>
				<div className=" mx-auto text-center">
					{/* Services Heading */}
					<h2 className="text-4xl font-bold text-black mb-4">
						Services<span className='text-primary'>.</span>
					</h2>
					<p className="text-gray-600 max-w-xl mx-auto">
					Our team members are experts in all facets of the design industry including: print design, illustration, branding, identity and more.
					</p>
				</div>
				<div className='container mx-auto px-20 py-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
					{/* card 1 */}
						<div className='bg-secondary shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img src={uiux} alt='ui/ux design icon'/>
							<h4 className='font-bold py-8'>UI/UX Design</h4>
							<p>Why money's in that office, 
								right If she start giving me 
									some bullshit about it ain't 
										there someplace or anywhere.</p>
						</div>
						{/* card 2 */}
						<div className='bg-secondary shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img src={wpdesign} alt='wp design icon'/>
							<h4 className='font-bold py-8'>Web Design</h4>
							<p>Why money's in that office, 
								right If she start giving me 
									some bullshit about it ain't 
										there someplace or anywhere.</p>
						</div>
						{/* card 3 */}
						<div className='bg-secondary shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
							<img src={wpdeveloping} alt='wp developing icon'/>
							<h4 className='font-bold py-8'>WP Developing</h4>
							<p>Why money's in that office, 
								right If she start giving me 
									some bullshit about it ain't 
										there someplace or anywhere.</p>
						</div>
				</div>
				</div>
			</section>
		</>
	)
}

export default Services;