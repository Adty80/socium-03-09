import React from "react";
import { Carousel } from "react-responsive-carousel";
import Tilt from 'react-parallax-tilt';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
  <>
  <h2 className="mx-10 lg:mx-36 text-3xl font-bold my-5 font-serif">Our Recent Work</h2>
 <Tilt>
  <Carousel autoPlay infiniteLoop>
    
    <div>
    <div className="lg:mx-36 mx-5">
          <div style={{ backgroundColor: "#cc6975" }} className="rounded-2xl  mx-auto p-10 border-2 grid grid-cols-12 ">
            <div className="grid sm:col-span-8 col-span-12">
              <h1 className="text-3xl text-white">Hangry with Friends</h1>
              <h4 className="text-white">
                Hangry With Friends is the result of the frustration that many people face when trying to decide where to dine with their kids, family, friends, coworkers, and others. The founders recognized this common challenge and set out to create a solution to make the dining decision process more enjoyable.
              </h4>
              <button type="button" className="p-2 rounded-lg bg-white text-black w-44 mt-4">
                <a href="#">View Details</a>
              </button>
            </div>
            <div className="hidden sm:grid col-span-4">
              <img src="./girl.png" className="h-64 w-full object-cover" alt="Hangry with Friends" />
            </div>
          </div>
        </div>
    </div>
    <div className="lg:mx-36 mx-5">
          <div className="rounded-2xl bg-blue-400  mx-auto p-10 border-2 grid grid-cols-12 ">
            <div className="grid sm:col-span-8 col-span-12">
              <h1 className="text-3xl text-white">Pointse</h1>
              <h4 className="text-white">
              At its completion, Pointse will be the first-ever platform designed exclusively for retail vendors, offering the seamless integration of three essential components: a loyalty program, human resource management, and business analytics.
              </h4>
              <button type="button" className="rounded-lg bg-white text-black w-44 mt-4">
                <a href="#">View Details</a>
              </button>
            </div>
            <div className="hidden sm:grid col-span-4">
              <img src="./p-2.webp" className="h-64 w-full object-cover" alt="Hangry with Friends" />
            </div>
          </div>
        </div>
    <div>
    <div className=" lg:mx-36 mx-5">
          <div  className="rounded-2xl bg-purple-500 mx-auto p-10 border-2 grid grid-cols-12 ">
            <div className="grid sm:col-span-8 col-span-12">
              <h1 className="text-3xl text-white">Share & Care</h1>
              <h4 className="text-white">
              Our mission is to empower individuals to freely share their thoughts, feelings, and experiences without fear of judgment. We strive to create a supportive and inclusive community where people care for each other, every voice is heard, and every person is valued. By fostering a culture of care, openness, and empathy, we aim to improve well-being for all.              </h4>
              <button type="button" className="p-2 rounded-lg bg-white text-black w-44 mt-4">
                <a href="#">View Details</a>
              </button>
            </div>
            <div className="hidden sm:grid col-span-4">
              <img src="./3.png" className="h-64 w-full object-fit" alt="Hangry with Friends" />
            </div>
          </div>
        </div>
    </div>
   
  </Carousel>
  </Tilt>
  </>
);
