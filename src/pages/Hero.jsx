/* eslint-disable no-unused-vars */
import React from "react";
import { InputFields } from "../components";

const Hero = () => {
  return (
    <div className="h-[500px] bg-[#173535]">
      <div className="text-white">
        <h1 className="text-6xl font-serif">
          Plan your love journey with us right by your side
        </h1>
        <div className="flex">
          <InputFields text="Venues" title="Category" />
          <InputFields text="Gujrat" title="City" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
