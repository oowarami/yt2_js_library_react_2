import React from 'react';
import ornament from '../assets/images/about/ornament.svg';
import aboutImage from '../assets/images/about/image-model.png'
// import abstractImage from '../assets/images/about/abstract-background-model.png'

const AboutMe = () => {
  return (
		<>
    	<section className="bg-secondary py-20 font-poppins">
      <div className=" mx-auto text-center">
        {/* About Me Heading */}
        <h2 className="text-4xl font-bold text-black mb-4">
          About  me<span className='text-primary'>.</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          I'm Justin Vaccaro and I do web design, Graphic Design, User Experiences. Habitasse et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.
        </p>
      </div>
      <div className="container mx-auto mt-16 flex justify-center items-center relative">
        {/* ornaments on the Left */}
        <div className="absolute left-0 top-1/4 hidden md:block">
          <img
						src={ornament}
					/>
        </div>
        {/* Main Image */}
        <div className="relative z-10">
          <div className="relative bg-contain bg-center">

					{/* <img
              src={abstractImage}
              alt="abstract"
              className=" w-full max-w-md"
            /> */}
    
            <img
              src={aboutImage}
              alt="Justin Vaccaro"
              className="relative z-10 w-full max-w-md"
            /> 
          </div>
        </div>
        {/* Decorative Line */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <svg className="w-3/4 h-3/4">
            <path
              d="M 0 200 Q 150 100 300 200 T 600 200"
              fill="none"
              stroke="#FF6B6B"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>
    	</section>
		</>
  );
}

export default AboutMe;
