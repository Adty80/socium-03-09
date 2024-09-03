"use client";
import React from 'react';
import Image from 'next/image';
import Webdesign from '/public/web-design.png';
import { GiRoundTable } from "react-icons/gi";
import { LuSearchCode } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { TbCodeCircle2Filled } from "react-icons/tb";
import { GiTabletopPlayers } from "react-icons/gi";
import { TbSettingsPause } from "react-icons/tb";
import { TfiRocket } from "react-icons/tfi";
import { TbSettingsHeart } from "react-icons/tb";
import BackgroundImageComponent from '../BackgroundImageComponent';
import Tilt from "react-parallax-tilt";
import Crousel from "../Crousel";
import Footer from '../Footer';

const Page = () => {
    return (
        <>
            <div className="bg-[#00145b] h-fit"> 
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center px-4 md:px-8 lg:px-32 py-10">
                    <div className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">
                        Elevate Your <span className='font-bold text-blue-400'>Digital Experience</span>
                        with Our Bespoke Web Solutions.
                        <p className='text-sm mt-5'> Create a digital experience that captivates your audience and drives your business forward with Socium’s custom website development services.</p>
                        <button className='mt-10 bg-yellow-600 font-semibold text-lg px-6 py-2 rounded-full'>Request A Free Consultation</button>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <Image src={Webdesign} height={600} width={600} alt="Web Design" />
                    </div>
                </div>
            </div>
            {/* ---------------2nd section----------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 px-4 md:px-8 lg:px-32 mt-20 h-fit">
                <div className="col-span-1 lg:col-span-4 sm:col-span-12 mb-10 lg:mb-0">
                    <div className="bg-blue-200 px-6 py-4 rounded-lg sticky top-10">
                        <ul className='text-start'>
                            <li className='hover:bg-blue-300 px-6 py-3 rounded-lg cursor-pointer'>What We Do</li>
                            <li className='hover:bg-blue-300 px-6 py-3 rounded-lg cursor-pointer'>Transform Your Web Presence</li>
                            <li className='hover:bg-blue-300 px-6 py-3 rounded-lg cursor-pointer'>How We Work</li>
                            <li className='hover:bg-blue-300 px-6 py-3 rounded-lg cursor-pointer'>Planning & Strategy</li>
                            <li className='hover:bg-blue-300 px-6 py-3 rounded-lg cursor-pointer'>Our Approach</li>
                        </ul>
                    </div>
                </div>
                {/* -------------What we do-------------- */}
                <div className="col-span-1 lg:col-span-8 sm:col-span-12 text-center mx-1 lg:mx-20 sm:mx-2">
                    <div className="bg-gray-100 rounded-lg px-6 py-4">
                        <div>
                            <h1 className='text-xl font-bold'>What We Do</h1>
                            <p className="mt-5">Your website should be more than just a digital storefront. It should reflect your unique brand and personality, helping you stand out in a crowded online marketplace. Our custom website development company works with you to create a website that truly captures your vision and helps you connect with your audience meaningfully.</p>
                            <p className="mt-4">Our custom web development company and website development consultants deliver robust, captivating, functional websites that stand out. From the initial consultation to the final launch, we’ll work closely with you to ensure your website looks great and performs exceptionally well.</p>
                        </div>
                        {/* ----------------------Transform Your Web Presence------------------------ */}
                        <div className="mt-10">
                            <h1 className='text-3xl font-bold'>Transform Your Web Presence</h1>
                            <h1 className='text-lg mt-4 font-semibold'>Your Website Reflects Your Online Presence</h1>
                            <p className="mt-8">You need a well-designed website to avoid losing potential customers searching for your products or services online. You may also damage your brand's credibility and reputation.</p>
                            <p className="mt-5">But the truth is, a subpar website won't cut it in today's digital world.</p>
                            <p className="mt-5">Your website is more than just an online brochure; it's your virtual storefront, digital identity, and primary marketing tool. So, you need a website that-</p>
                            <ul className='text-start mx-10 mt-5'>
                                <li>Beautiful</li>
                                <li>Functional</li>
                                <li>Stands out</li>
                                <li>Enhances brand credibility</li>
                                <li>Optimized for search engines</li>
                                <li>Captivates potential audience</li>
                                <li>Converts them into loyal customers</li>
                            </ul>
                            <p className="mt-8">With Socium, a custom website development company, you get all this and more.</p>
                            <p className="mt-5">From full-stack web design and development to UX/UI design, integration, and testing services, our custom web development services provide end-to-end solutions that help you achieve your online objectives.</p>
                        </div>
                        {/* ---------------------How We Work----------------------------- */}
                        <div className="mt-10">
                            <h1 className='text-3xl font-bold'>How We Work</h1>
                            <p className="mt-5">Are you tired of working with disorganized and opaque development teams that leave you frustrated and over budget? <br />
                                You deserve a custom web development agency that puts you first and follows a straightforward, efficient, and transparent process to deliver high-quality web development solutions.</p>
                            <p className="mt-4">Socium understands your pain points and designs a step-by-step process that puts you in control and delivers precisely what you need. From the initial consultation to project launch and beyond, we collaborate with you at every step, leveraging our expertise and experience to create custom, people-centered solutions that make your business stand out.</p>
                            <p className='mt-4'>Why settle for mediocre web development when you can partner with Socium and achieve greatness? Let us show you the way forward and build something unique together!</p>
                        </div>
                        {/* ------------------------Planning & Strategy----------------------- */}
                        <div className="mt-10">
                            <h1 className='text-3xl font-bold'>Planning & Strategy</h1>
                            <p className="mt-5">Is your website just an online brochure or a powerful business tool? Let Socium's Planning & Strategy expertise help you turn it into a brand extension that drives success.</p>
                            <p className="mt-4">We take the time to understand your unique value proposition, business goals, and target audience to create a website that’s</p>
                            <ul className='text-start mx-10 mt-5'>
                                <li>Custom solution that perfectly fits your needs.</li>
                                <li>Visually stunning and intuitive UI that engages visitors.</li>
                                <li>Responsive, scalable, and secure beyond expectations.</li>
                                <li>Fully functional, bug-free, and flawless across devices and browsers.</li>
                            </ul>
                            <p>We perform rigorous testing, launch your website, and provide 24/7 support for continued business needs.</p>
                            <p>Partner with Socium today and let us help you build a website that connects with your customers and drives your business forward.</p>
                        </div>
                        {/* -------------------------------->Our Approach------------------------------- */}
                        <div className="mt-10">
                            <h1 className='text-3xl font-bold'>Our Approach</h1>
                            <h1 className='text-lg mt-4 font-semibold'>Revolutionize Your Web Development with Our Proven Approach</h1>
                            <p className="mt-5">At Socium, we understand that creating a successful website requires a strategic and systematic approach. That's why we've developed a proven process that ensures our clients get the best possible results.</p>
                            <div className="grid grid-cols-10 mt-10 text-start">
                                <div className="col-span-1"><GiRoundTable className='text-yellow-500 text-xl sm:text-lg lg:text-6xl md:text-4xl'/></div>
                                <div className="col-span-8">
                                    <h1 className='text-2xl font-bold'>Consultation</h1>
                                    <h1 className='text-sm mt-4 font-semibold'>Discover the Power of Collaborative Web Development</h1>
                                    <p className='mt-2'>We begin by getting to know your business and unique needs. Our experienced web developers and consultants will work closely with you to assess your goals and recommend the best approach, technologies, and strategies.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 mt-10 text-start">
                                <div className="col-span-1"><LuSearchCode className='text-yellow-500 text-xl sm:text-lg lg:text-6xl md:text-4xl'/></div>
                                <div className="col-span-8">
                                    <h1 className='text-2xl font-bold'>Discovery</h1>
                                    <h1 className='text-sm mt-4 font-semibold'>Uncover the Hidden Gems of Your Business. Create a Website that Shines</h1>
                                    <p className='mt-2'>Once we understand your goals and requirements, we research, analyze, and document them to ensure we create a website that meets your needs.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 mt-10 text-start">
                                <div className="col-span-1"><FaHandsHelping className='text-yellow-500 text-xl sm:text-lg lg:text-6xl md:text-4xl'/></div>
                                <div className="col-span-8">
                                    <h1 className='text-2xl font-bold'>Proposal & Onboarding</h1>
                                    <h1 className='text-sm mt-4 font-semibold'>Create a Web Experience that Elevates Your Business</h1>
                                    <p className='mt-2'>We ensure that you and our web development team are aligned on the project's objectives and that we can proceed efficiently and effectively. Our onboarding process is designed to ensure we have all the information we need to create a website that exceeds your expectations.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 mt-10 text-start">
                                <div className="col-span-1"><MdOutlineComputer className='text-yellow-500 text-xl sm:text-lg lg:text-6xl md:text-4xl'/></div>
                                <div className="col-span-8">
                                    <h1 className='text-2xl font-bold'>Project Kick-off</h1>
                                    <h1 className='text-sm mt-4 font-semibold'>Ready, Set, Web!</h1>
                                    <p className='mt-2'>We align everyone involved and establish a clear direction for the project. Our project managers work closely with you to ensure that we are on track to deliver a website that meets your needs.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 mt-10 text-start">
                                <div className="col-span-1"><TbCodeCircle2Filled className='text-yellow-500 text-xl sm:text-lg lg:text-6xl md:text-4xl'/></div>
                                <div className="col-span-8">
                                    <h1 className='text-2xl font-bold'>Development</h1>
                                    <h1 className='text-sm mt-4 font-semibold'>From Code to Customer, Build Web Solutions for You</h1>
                                    <p className='mt-2'>Our development process includes testing, debugging, and optimization to ensure the website is efficient, secure, and meets user needs. We use the latest tools and technologies to ensure your website is cutting-edge and built to last.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 mt-10 text-start">
                                <div className="col-span-1"><GiTabletopPlayers className='text-yellow-500 text-xl sm:text-lg lg:text-6xl md:text-4xl'/></div>
                                <div className="col-span-8">
                                    <h1 className='text-2xl font-bold'>Client Team Demo</h1>
                                    <h1 className='text-sm mt-4 font-semibold'>Transparent, Collaborative, and Customer-Focused</h1>
                                    <p className='mt-2'>We believe in transparency and accountability. That's why we provide a final product demo to ensure it meets your expectations and is ready for deployment.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 mt-10 text-start">
                                <div className="col-span-1"><TbSettingsPause className='text-yellow-500 text-xl sm:text-lg lg:text-6xl md:text-4xl'/></div>
                                <div className="col-span-8">
                                    <h1 className='text-2xl font-bold'>Pre-Launch</h1>
                                    <h1 className='text-sm mt-4 font-semibold'>Leave No Stone Unturned For a Flawless Web Experience</h1>
                                    <p className='mt-2'>Before launching your website, we conduct extensive testing to ensure it is fully functional, optimized, and ready for deployment or launch. We leave no stone unturned to ensure that your website is flawless.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 mt-10 text-start">
                                <div className="col-span-1"><TfiRocket className='text-yellow-500 text-xl sm:text-lg lg:text-6xl md:text-4xl'/></div>
                                <div className="col-span-8">
                                    <h1 className='text-2xl font-bold'>Project Launch</h1>
                                    <h1 className='text-sm mt-4 font-semibold'>Ready, Set, Launch! To Wow Your Customers</h1>
                                    <p className='mt-2'>We confidently launch your website, knowing that we have created a top-notch digi-space for your users that will achieve the project's objectives.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 mt-10 text-start">
                                <div className="col-span-1"><TbSettingsHeart className='text-yellow-500 text-xl sm:text-lg lg:text-6xl md:text-4xl'/></div>
                                <div className="col-span-8">
                                    <h1 className='text-2xl font-bold'>Support</h1>
                                    <h1 className='text-sm mt-4 font-semibold'>Say No To Standstill Websites</h1>
                                    <p className='mt-2'>As a CMS development company, we understand that creating a successful website is ongoing. That's why we provide ongoing support to ensure that your website or web application remains functional and optimized, providing a premium digital adventure to your users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------------------3rd section--------------------------- */}
            <div className="mt-20">
                <h1 className='text-4xl font-bold text-center'>Web Development Services We Offer</h1>
                {/* Additional content can go here */}
            </div>
            <BackgroundImageComponent />
            <h2 className="sm:mx-36 text-3xl"> Portfolio</h2>
      <div className="justify-center items-center flex ">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mx-10 sm:mx-20 gap-20 sm:mt-20">
          <Tilt>
            <div>
              <img
                src="./i-1.webp"
                height={210}
                width={400}
                className="h-80 rounded-xl "
                alt=""
              />
              <p className="text-center text-2xl">Share & Care </p>
              <button className="mx-auto block text-lg">Explore</button>
            </div>
          </Tilt>
          <Tilt>
            <div>
              <img
                src="./Hangry.webp"
                height={215}
                width={400}
                className="h-80 rounded-xl "
                alt=""
              />
              <p className="text-center text-2xl">Hangry</p>
              <button className="mx-auto block text-lg">Explore</button>
            </div>
          </Tilt>
          <Tilt>
            <div>
              <img
                src="./i-2.webp"
                height={400}
                width={400}
                className="h-80 rounded-xl "
                alt=""
              />
              <p className="text-center text-2xl">Pointse </p>
              <button className="mx-auto block text-lg">Explore</button>
            </div>
          </Tilt>
        </div>
      </div>
      {/* crousel  */}
      <div className="lg:mt-5 mt-5">
        <Crousel />
      </div>
      {/* crousel  */}
      <Footer/>
        </>
    );
};

export default Page;
