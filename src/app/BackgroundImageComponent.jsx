"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

const BackgroundImageComponent = () => {
  // Replace 'your-image-url.jpg' with the actual path to your image

  return (
    <Tilt>
    <div className="grid-cols-1 sm:my-20">
      <div
        style={{
          backgroundImage: "url(./bgim.png)",
          backgroundSize: "cover", // Adjust the size of the image
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent repeating of the image
          height: "380px",
          position: "relative", // Set a height for the div
        }}
      >
        <div
          style={{}}
          className="absolute top-24  sm:end-96 shadow-2xl rounded-xl  bg-blue-300 p-10"
        >
          <span className="text-white font-bold text-3xl">Take the First </span>{" "}
          <span className="text-blue-900  font-bold text-3xl">Step</span>{" "}
          <span className="text-white font-bold text-3xl">Towards Online </span>
          <span className="text-blue-900 font-bold text-3xl">Success</span>
          <div className="text-center">
            <button
              type="button"
              className="sm:mx-auto sm:block btn bg-orange-400 sm:px-8 text-white sm:p-3 rounded-full mt-6 "
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
    </Tilt>
  );
};

export default BackgroundImageComponent;
