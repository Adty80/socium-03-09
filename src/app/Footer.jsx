"use client"
import React from 'react';
import Image from 'next/image';
import logo from '/public/Socium-Logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (



    <div className='h-fit mt-10 bg-gradient-to-r from-[#02175d] to-[#3953b3]'>
   <div className='h-fit bg-gradient-to-r from-[#02175d] to-[#3953b3]'>
  <div className="flex flex-wrap justify-center p-10 md:justify-between lg:justify-around">
    <div className="text-white w-full sm:w-1/2 md:w-auto mb-6 md:mb-0 px-4">
      <h1 className='font-bold text-2xl'>Company</h1>
      <ul className='mt-5 my-5'>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>About</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Portfolio</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Terms & Conditions</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Privacy Policy</li>
      </ul>
    </div>
    <div className="text-white w-full sm:w-1/2 md:w-auto mb-6 md:mb-0 px-4">
      <h1 className='font-bold text-2xl'>Services</h1>
      <ul className='mt-5'>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Website Development</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Mobile Development</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Hire Developer</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Digital Marketing</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Cyber Security Services</li>
      </ul>
    </div>
    <div className="text-white w-full sm:w-1/2 md:w-auto mb-6 md:mb-0 px-4">
      <h1 className='font-bold text-2xl'>Resources</h1>
      <ul className='mt-5'>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Blogs</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Case Study</li>
      </ul>
    </div>
    <div className="text-white w-full sm:w-1/2 md:w-auto mb-6 md:mb-0 px-4">
      <h1 className='font-bold text-2xl'>Contact</h1>
      <ul className='mt-5'>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>11 West Port Plaza, 6TH Floor, St. Louis, Missouri 63146, US</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>+1 (402) 968-0326</li>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>contact@sociumservices.com</li>
      </ul>
    </div>
    <div className="text-white w-full sm:w-1/2 md:w-auto px-4">
      <h1 className='font-bold text-2xl'>Subscribe Newsletter</h1>
      <ul className='mt-5'>
        <li className='my-3 cursor-pointer hover:text-yellow-600'>Subscribe to be the first one to know about updates.</li>
        <div className='mt-2 flex flex-col md:flex-row items-center'>
          <input type="text" className='border border-white rounded-lg p-2 text-black md:mr-2' placeholder="Your email" />
          <button className='bg-yellow-600 rounded-lg p-2 mt-2 md:mt-0'>Subscribe</button>
        </div>
      </ul>
    </div>
  </div>
</div>

      

      <div className=" flex justify-between mx-20 flex-wrap items-center  mt-6">
      <div className="mb-4 md:mb-0">
        <Image src={logo} height={100} alt="Company Logo" />
      </div>
      <p className='text-white text-center md:text-left mb-4 md:mb-0'>
        Privacy Policy | Copyright @ Socium Partners
      </p>
      <div className="flex space-x-4 mr-32 ">
        <FaLinkedin className='text-white text-2xl cursor-pointer' />
        <FaSquareXTwitter  className='text-white text-2xl cursor-pointer'  />
      </div>
    </div>
    
    </div>
  );
};

export default Footer;
