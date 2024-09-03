"use client"
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '/public/Socium-Logo.png'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className='bg-[#00145b]  fixed top-0  flex justify-between items-center px-10 h-24 z-20 w-full mx-auto  text-white'>
      {/* Logo */}
    <Link href='/Home'> <Image src={logo} alt="Logo"height={200} width={200}/></Link>

      {/* Desktop Navigation */}
      <ul className='hidden lg:flex '>
      
          <li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>
          <Link href="/Home">   Home</Link>
          </li>
         <li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>
         <Link href="\About">    About Us</Link>
          </li>
          <li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>
         <Link href="\Services">   Services</Link>
          </li>
          <li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>
          <Link href="\Blog">  Blogs </Link>
          </li>
          <li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>
           <Link href="\Portfolio" >Portfolio</Link>
          </li>
          <li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-700'>
          <Link href="\Contact" >  Contact Us</Link>
          </li>
          <Link href="\Home" >   <button className='p-3 rounded-xl m-2 cursor-pointer duration-300 bg-yellow-700'>
           Get a Quote
          </button></Link>
      
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed lg:hidden left-0 top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <Image src={logo} alt="Logo"height={200} width={200} className='mt-8 mx-auto'/>

        {/* Mobile Navigation Items */}
        <div className="text-center">
        <li className='p-4 mt-10 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>
        Home
        </li>
        <li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>
        About Us
        </li>
        <li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>
        Services
        </li>
        <li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>
        Resources
        </li>
        <li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>
        Portfolio
        </li>
        <li className='p-4 border-b rounded-xl duration-300 hover:text-yellow-700 cursor-pointer border-gray-600'>
        Contact Us
        </li>
        <button className='p-4 mt-6 border-b rounded-xl duration-300 bg-yellow-700 cursor-pointer border-gray-600'>
        Get a Quote
        </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;