/* eslint-disable no-unused-vars */
import React from "react";
import { InputFields } from "../components";
import main from "../assets/images/main.png";
import bg from "../assets/images/bg.png";
const Hero = () => {
  return (
    <>
      <div className="h-[500px] bg-[#173535] grid lg:grid-cols-2 grid-cols-1 ">
        <div className="text-white flex flex-col justify-center ml-20">
          <h1 className="xl:text-6xl text-4xl font-serif ">
            Plan your love journey with us right by your side
          </h1>
          <div className="flex my-10 flex-col xl:flex-row ">
            <InputFields text="Venues" title="Category" />
            <InputFields text="Gujarat" title="City" />
          </div>
          <button
            type="button"
            className="focus:outline-none text-[#173535] bg-white font-medium rounded-sm text-md px-6 py-2 ml-auto mr-12"
          >
            View results
          </button>
        </div>
        <div className="abolute bg-gradient-to-r from-[#064646] to-[#091a1a94] w-4/5 ml-auto hidden lg:block">
          <div>
            <img
              src={bg}
              alt="background image"
              className="absolute right-0 top-40"
            />
            <img
              src={main}
              alt="main image"
              className="absolute bottom-32 right-64 hidden xl:block  "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
