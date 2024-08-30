import React, { useState } from 'react';
import logo from '../assets/images/nav/logo.svg';
import headerImage from '../assets/images/header/header_image_view.png';
import vector from '../assets/images/header/vector.svg';
import vector0 from '../assets/images/contact/Vector.svg';
import vector1 from '../assets/images/contact/Vector-1.svg';
import vector2 from '../assets/images/contact/Vector-2.svg';
import vector3 from '../assets/images/contact/Vector-3.svg';
import hamburger from '../assets/images/nav/hamburger.svg';
const Header = () => {
	// State to manage menu visibility
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Toggle the menu visibility
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
    // alert('it is open!')
	};

	return (
		<header
			id='home'
			className='bg-secondary px-8 max-w-screen-2xl mx-auto font-poppins'>
			<div className='container flex justify-between items-center max-w-screen-2xl mx-auto p-20 gap-x-15'>
				{/* Logo */}
				<div className='flex items-center'>
					<img src={logo} alt='Logo' className='h-12' />
				</div>

				{/* Hamburger Menu Button (Visible on mobile only) */}
				<button
					className='md:hidden text-secondary focus:outline-none'
					onClick={toggleMenu}>
					{/* <img src={hamburger} alt='hamburger menu'/> */}
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16m-7 6h7'></path>
					</svg>
				</button>
				{/* Navigation */}
				<div className='relative left-1/3 transform -translate-x-1/3'>
					<nav
						className={`${isMenuOpen ? 'block' : 'hidden'} hidden md:flex space-x-8 text-black flex-grow justify-center`}>
						<a
							href='#home'
							className='hover:text-red-400  hover:underline  text-black focus:bg-gray-400 active:bg-gray-600'>
							Home
						</a>
						<a
							href='#contributors'
							className='hover:text-red-400 hover:underline text-black'>
							Contributors
						</a>
						<a
							href='#about'
							className='hover:text-red-400 hover:underline  text-black'>
							About me
						</a>
						<a
							href='#services'
							className='hover:text-red-400 hover:underline  text-black'>
							Services
						</a>
						<a
							href='#portfolio'
							className='hover:text-red-400 hover:underline text-black'>
							Portfolio
						</a>
						<a
							href='#contact'
							className='hover:text-red-400 hover:underline  text-black'>
							Contact
						</a>
					</nav>
				</div>
				{/* Portfolio Button (Visible on desktop) */}
				<button className='flex-shrink-0 ml-auto hidden md:block'>
					<a
						href='#portfolio'
						className='bg-black text-white px-4 py-2 rounded-lg'>
						Portfolio Here
					</a>
				</button>
			</div>
			<div className='container mx-auto p-20 flex flex-col md:flex-row items-center justify-between bg-headerPattern relative'>
				{/* Left Content */}
				<div className='flex-1'>
					<p className='text-black  text-sm font-bold'>Hola! I'm</p>
					<h4 className=' text-primary font-bold py-4'>Justin Vaccaro</h4>
					<h2 className='text-5xl font-semibold text-black mt-4'>
						Creative <br />
						<span className='indent-8'>Designer</span>{' '}
						<span className='text-primary text-5xl font-bold'>.</span>
					</h2>
					<p className='text-gray-600 mt-4 max-w-md'>
						Since creative designers often interact with creative teams,
						managers, and clients, they need strong communication skills.
					</p>
					{/* social icons*/}
					<div className=' flex py-8 gap-4'>
						<img src={vector0} />
						<img src={vector1} />
						<img src={vector2} />
						<img src={vector3} />
					</div>
					<button className='bg-primary text-white px-6 py-2 mt-6 rounded shadow hover:bg-red-500'>
						CV Here
					</button>

					{/* dotted lines */}
					<div className='py-20'>
						<img src={vector} />
					</div>
				</div>
				{/* Right Image */}
				<div className='flex-1 mt-10 md:mt-0'>
					<div className='relative'>
						<img
							src={headerImage}
							alt='Justin Vaccaro'
							className='relative z-10 w-full max-w-sm rounded-lg'
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
