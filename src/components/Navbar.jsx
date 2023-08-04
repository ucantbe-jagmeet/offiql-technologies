/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";

const navLinksData = ["Venues", "Vendors", "Blog"];

const Navbar = () => {
  return (
    <>
      <div className="h-20  flex justify-around items-center mt-1 ml-2">
        <div className="">
          <img src={logo} alt="main-img" className="h-15 object-contain" />
        </div>
        <div className="md:flex justify-between hidden  ">
          {navLinksData.map((item, index) => {
            return (
              <div key={index} className="mx-3 tracking-wide">
                {item}
              </div>
            );
          })}
        </div>
        <div className="flex items-center">
          <BiSearch className="absolute ml-3 text-gray-500 hidden lg:block " />
          <input
            type="text"
            id="input"
            className=" text-gray-900 text-sm rounded-full w-80 px-5 py-2 mr-2 border-2 hidden outline-none pl-9 lg:block"
            placeholder="Search Venues or vendors"
          />
          <button
            type="button"
            className="focus:outline-none text-white bg-[#FAAA00] font-medium rounded-md text-sm px-6 py-2 mr-2 "
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
