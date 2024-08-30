import React from 'react';
import logo from '../assets/images/nav/logo.svg';
import headerImage from '../assets/images/header/header_image_view.png';
import vector from '../assets/images/header/vector.svg';
const Header = () => {
  return (
    <header className="bg-secondary px-8 max-w-screen-2xl mx-auto font-poppins">
      <div className="container flex justify-between items-center max-w-screen-2xl mx-auto p-20 gap-x-15">
        {/* Logo */}
        <div className="flex items-center"> 
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        {/* Navigation */}
				<div className="relative left-1/2 transform -translate-x-1/2">
        <nav className="hidden md:flex space-x-8 text-black flex-grow justify-center">
          <a href="#home" className="hover:text-red-400  hover:underline decoration-solid text-black">Home</a>
          <a href="#contributors" className="hover:text-red-400 hover:underline decoration-solid text-black">Contributors</a>
          <a href="#about" className="hover:text-red-400 hover:underline decoration-solid text-black">About me</a>
          <a href="#services" className="hover:text-red-400 hover:underline decoration-solid text-black">Services</a>
          <a href="#portfolio" className="hover:text-red-400 hover:underline decoration-solid text-black">Portfolio</a>
          <a href="#contact" className="hover:text-red-400 hover:underline decoration-solid text-black">Contact</a>
        </nav>
				</div>
        {/* Portfolio Button */}
        <button className="flex-shrink-0 ml-auto">
          <a href="#portfolio" className="bg-black text-white px-4 py-2 rounded-lg">Portfolio Here</a>
        </button>
      </div>
      <div className="container mx-auto p-20 flex flex-col md:flex-row items-center justify-between bg-headerPattern relative">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-gray-500 text-sm">Hola! I'm</p>
          <h1 className="text-5xl font-bold text-black">
            Justin Vaccaro
            <span className="text-red-400">.</span>
          </h1>
          <h2 className="text-3xl font-semibold text-black mt-4">
            Creative Designer
          </h2>
          <p className="text-gray-600 mt-4 max-w-md">
            Since creative designers often interact with creative teams, managers, and clients, they need strong communication skills.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-black hover:text-gray-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-black hover:text-gray-600"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-black hover:text-gray-600"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-black hover:text-gray-600"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <button className="bg-primary text-white px-6 py-3 mt-6 rounded shadow hover:bg-red-500">
            CV Here
          </button>

					{/* dotted lines */}
					<div className='py-20'>

					<img
						src={vector}
					/>
					</div>
        </div>
        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0">
          <div className="relative">
            <img
              src={headerImage}
              alt="Justin Vaccaro"
              className="relative z-10 w-full max-w-sm rounded-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
