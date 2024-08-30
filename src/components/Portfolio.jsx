import React from 'react';
import image1 from '../assets/images/portfolio/unsplash_nDd3dIkkOLo.png';
import image2 from '../assets/images/portfolio/unsplash_3pR7d-tIRx8.png';
import image3 from '../assets/images/portfolio/unsplash_PxypFiQMkIk.png';
import image4 from '../assets/images/portfolio/unsplash_EfX1g5d9T3I.png';
import image5 from '../assets/images/portfolio/unsplash_9IcKPSQ9G5Q.png';

const Portfolio = () => {
	return (
		<>
			<section className='bg-secondary py-20 font-poppins'>
				<div className=' mx-auto text-center'>
					<h2 className='text-2xl'>Our Regurlar Updated</h2>
					{/* Portfolio Heading */}
					<h2 className='text-4xl font-bold text-primary mb-4 py-4'>
						Portfolio
					</h2>
				</div>

				{/* images */}
				<div className='container mx-auto px-20 py-8 max-w-none'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
						{/* column 1 */}
						<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-2 px-15 py-12'>
							<img src={image1} />
						</div>
						{/* column 2 */}
						<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-2 px-15 py-12'>
							<img src={image2} />
							<img src={image3} />
							<img src={image4} />
							<img src={image5} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
