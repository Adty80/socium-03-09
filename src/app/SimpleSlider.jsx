import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <h1 className="text-4xl mx-20 mb-5">Our Recent Work</h1>
      <Slider {...settings}>
        <div className=" max-w-96">
          <div style={{ backgroundColor: "#cc6975" }} className="rounded-2xl w-full mx-auto p-10 border-2 grid grid-cols-12 gap-4">
            <div className="grid sm:col-span-8 col-span-12">
              <h1 className="text-3xl text-white">Hangry with Friends</h1>
              <h4 className="text-white">
                Hangry With Friends is the result of the frustration that many people face when trying to decide where to dine with their kids, family, friends, coworkers, and others. The founders recognized this common challenge and set out to create a solution to make the dining decision process more enjoyable.
              </h4>
              <button type="button" className="p-3 bg-white text-black w-44 mt-4">
                <a href="#">View Details</a>
              </button>
            </div>
            <div className="hidden sm:grid col-span-4">
              <img src="./girl.png" className="h-64 w-full object-cover" alt="Hangry with Friends" />
            </div>
          </div>
        </div>

        <div className="p-10 border-2">
          <h1 className="text-3xl">Pointse</h1>
          <h4>
            At its completion, Pointse will be the first-ever platform designed exclusively for retail vendors, offering the seamless integration of three essential components: a loyalty program, human resource management, and business analytics.
          </h4>
          <a href="#" className="inline-block mt-4 p-3 bg-white text-black">View Details</a>
        </div>

        <div className="p-10 border-2">
          <h1 className="text-3xl">Share & Care</h1>
          <h4>
            Our mission is to empower individuals to freely share their thoughts, feelings, and experiences without fear of judgment. We strive to create a supportive and inclusive community where people care for each other, every voice is heard, and every person is valued. By fostering a culture of care, openness, and empathy, we aim to improve well-being for all.
          </h4>
          <button type="button" className="p-3 bg-white text-black mt-4">
            <a href="#">View Details</a>
          </button>
        </div>
      </Slider>
    </>
  );
}
