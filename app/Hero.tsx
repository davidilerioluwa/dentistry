import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-screen max-h-screen overflow-y-hidden h-screen fixed top-0 z-10">
      <div className="absolute w-screen h-screen bg-black/40 top-0 pt-10 flex flex-col gap-5 text-white justify-center items-center">
        <h1 className="lg:text-7xl w-3/5 text-center">
          AWARDED AS THE BEST DENTAL CLINIC IN INDIA
        </h1>
        <div className="flex gap-4">
          <button className="bg-white text-yellow-600 rounded-[23px] p-1 flex items-center">
            <span className="px-4">Get a Consult</span>
            <span className="bg-yellow-600 text-white p-2.5 rounded-full">
              <FaArrowRight />
            </span>
          </button>
          <button className="bg-yellow-600 text-white-600 rounded-[23px] p-1 flex items-center ">
            <span className="px-4">Get a Consult</span>
            <span className="bg-white text-yellow-600 p-2.5 rounded-full">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <p className="absolute bottom-10 left-10 w-60 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil,
          eveniet cumque molestiae natus ratione. Debitis iure hic cum omnis.
        </p>
      </div>
      <img className="w-screen h-screen object-cover" src={"dentist.jpg"} />
    </div>
  );
};

export default Hero;
