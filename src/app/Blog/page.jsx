"use client";
import React, { useState } from 'react';
import Flip from '../Components/Flip';
import './blog.css';

const Page = () => {
  // State to manage the visibility of the Flip component and the selected category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Function to handle the button click
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  // Function to determine which content to show based on the selected category
  const getContent = () => {
    if (selectedCategory === 'all') {
      return <Flip />; // Show all content
    }
    // Add logic for other categories here
    // For example, if you have different components for different categories, render them here
    return <Flip/>;
  };

  return (
    <>
      <div className='bg-container mt-24'>
        <div className='content-container flex items-center justify-center h-full'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold text-blue-400'>Blog</h2>
            <p className='text-white mt-5'>
              Insights that inspire, Ideas that innovate <br />
              Embark on a journey of discovery, inspiration, and education.<br />
              Find answers that’ll fuel your curiosity with Socium Blogs.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-12 mx-10 mt-4 sm:mx-36'>
          <div className='lg:col-span-1 md:col-span-2 col-span-4'>
            <button
              className={`py-3 sm:mt-5 px-5 bg-white text-black rounded-full border border-violet-900 font-bold ${selectedCategory === 'all' ? 'bg-violet-200' : ''}`}
              type="button"
              onClick={() => handleButtonClick('all')}
            >
              ViewAll
            </button>
          </div>
          <div className='lg:col-span-1 md:col-span-2 col-span-4'>
            <button
              className={`py-3 sm:mt-5 px-5 bg-white text-black rounded-full border border-violet-900 font-bold ${selectedCategory === 'app' ? 'bg-violet-200' : ''}`}
              type="button"
              onClick={() => handleButtonClick('app')}
            >
              Apps
            </button>
          </div>
          <div className='lg:col-span-1 md:col-span-2 col-span-4'>
            <button
              className={`py-3 sm:mt-5 px-5 bg-white text-black rounded-full border border-violet-900 font-bold ${selectedCategory === 'mobile' ? 'bg-violet-200' : ''}`}
              type="button"
              onClick={() => handleButtonClick('mobile')}
            >
              Mobile
            </button>
          </div>
          <div className='lg:col-span-1 md:col-span-2 col-span-4'>
            <button
              className={`py-3 sm:mt-5 px-5 bg-white text-black rounded-full border border-violet-900 font-bold ${selectedCategory === 'viewAll' ? 'bg-violet-200' : ''}`}
              type="button"
              onClick={() => handleButtonClick('viewAll')}
            >
              Tabs
            </button>
          </div>
          <div className='lg:col-span-1 md:col-span-2 col-span-4'>
            <button
              className={`py-3 sm:mt-5 px-5 bg-white text-black rounded-full border border-violet-900 font-bold ${selectedCategory === 'websites' ? 'bg-violet-200' : ''}`}
              type="button"
              onClick={() => handleButtonClick('websites')}
            >
              Websites
            </button>
          </div>
          <div className='lg:col-span-6 lg:ms-36 md:col-span-12 md:text-center col-span-12'>
            <input
              type="search"
              placeholder='Search'
              className="py-3 sm:mx-0 md:mx-0 w-full sm:mt-5 sm:text-center bg-white text-black border border-black rounded-lg"
            />
          </div>
        </div>

        {/* Conditional rendering based on selected category */}
        <div className='flip-container'>
          {getContent()}
        </div>
      </div>
    </>
  );
};

export default Page;
