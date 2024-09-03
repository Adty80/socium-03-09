"use client";
import React from 'react';
import Image from 'next/image';
import Discovery from '/public/Discovery.png';
import Development from '/public/Development.png';
import Design from '/public/Design.png';
import Partner from '/public/partner.png';
import { FaPiggyBank } from "react-icons/fa";
import Footer from '../Footer';
// import Footer from '/Footer';

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-[70vh] bg-[#00145b] flex justify-center text-center px-4 mt-24">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl pb-5 pt-10 text-white font-bold leading-tight ">
            Problem-Solving Powerhouse <br />
            <span className="text-[#6ec1e4]">for Your Web and Mobile <br /> Needs</span>
          </h1>
          <p className="mt-4 text-white text-sm sm:text-base md:text-lg">
            Refrain from settling for the norm – choose Socium. <br />
            Help us help you transform your business with our robust <br /> web and mobile development solutions.
          </p>
        </div>
      </div>

      {/* Our Approach Section */}
      <h1 className="text-2xl sm:text-3xl text-center mt-10 font-bold">Our Approach</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20 mt-10">
        <div className="flex flex-col items-center">
          <Image src={Discovery} height={500} width={400} alt="Discovery" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
          <p className="text-xs sm:text-sm text-center mt-4">
            Discover Your Goals, Users, and Market. <br />
            Tailored Solutions for Your Success. <br />
            Customized Solutions that Fit Perfectly.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Design} height={500} width={400} alt="Design" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
          <p className="text-xs sm:text-sm text-center mt-4">
            Intuitive UI for Enhanced Experience. <br />
            Beautiful and Functional Designs. <br />
            Crafting User-Friendly Experiences.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Development} height={500} width={400} alt="Development" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
          <p className="text-xs sm:text-sm text-center mt-4">
            Expert Developers. Scalable Solutions. <br />
            Robust & Secure Development. <br />
            Latest Technologies. Superior Results.
          </p>
        </div>
      </div>

      {/* Partner Section */}
      <div className="h-auto bg-[#fff] sm:bg-[#00145b] mt-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-8 items-center px-4">
          <div className="flex justify-center items-center">
            <Image src={Partner} className="h-auto max-w-full w-[250px] sm:w-[200px] md:w-[300px] lg:w-[350px]" alt="Partner Image" />
          </div>
          <div className="flex flex-col justify-center items-start px-4">
            <h1 className="text-4xl my-5 font-bold text-[#00145b] sm:text-white lg:text-white md:text-white">Why Partner With Socium?</h1>
            <p className="my-2 text-[#00145b] sm:text-white lg:text-white md:text-white">Turn your problems into possibilities with our people-centered solutions.</p>
            <p className="my-2 text-[#00145b] sm:text-white lg:text-white md:text-white">Break the boundaries and reach new heights with our custom web and mobile development solutions that exceed expectations.</p>
            <p className="my-2 text-[#00145b] sm:text-white lg:text-white md:text-white">With a dedicated team of experts, we provide personalized, people-centered products that set you apart.</p>
          </div>
        </div>
      </div>

      {/* Specialization Section */}
      <h1 className="text-2xl sm:text-3xl text-center mt-10 font-bold">Our Specialization</h1>
      <div className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 lg:mx-20 place-content-center mt-10">

          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>
          <div className="h-32 w-full max-w-xs shadow-lg border border-black my-auto text-center rounded-lg flex flex-col items-center justify-center">
            <FaPiggyBank className="text-4xl md:text-5xl lg:text-6xl mx-auto mt-2" />
            <p className="mt-2 text-sm md:text-base">Banking and Finance</p>
          </div>      
      </div>
    {/* --------Our Mission --------- */}
      <div className="h-fit p-10 bg-[#00145b] mt-10 text-center">
        <h1 className='text-2xl font-bold text-orange-400'>Our Mission</h1>
        <p className='text-white mt-4'>We don’t just build apps and websites – we help you bring your vision to life. Whether it’s a complex iOS or Android app, a trailblazing webpage, <br /> or a unique blend of technologies, we are committed to delivering exceptional products that help achieve your goals.</p>
      </div>
{/* --------Our Values --------- */}
      <div className="h-fit p-10 mt-4 text-center">
        <h1 className='text-2xl font-bold text-orange-400'>Our Values</h1>
        <p className='mt-4'>Our values define us. We’re not just builders but cultivators of lasting relationships built on innovation, integrity, an open mind, and teamwork. <br /> We push boundaries to deliver scalable solutions. We prioritize data protection and always “do the right thing.” <br /> Curiosity drives us to stay ahead. Together, we’ll achieve long-term success in technology.</p>
      </div>

      <div className="h-fit grid grid-cols-2 p-10 bg-[#00145b] mt-5 text-center">
      <div className="text-white text-2xl "><span className='text-5xl lg:text-6xl font-bold text-orange-400'>8+</span> <br />Apps Deployed</div>
      <div className="text-white text-2xl "><span className='text-5xl lg:text-6xl font-bold text-orange-400'>15+</span> <br />Projects Delivered</div>
      </div>

      {/* --------Management Team----------- */}
      <div className="">
        
      </div>

      <Footer/>
    </>
  );
};

export default Page;