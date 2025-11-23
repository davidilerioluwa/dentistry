"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ShowCasePin = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Start tracking when the top of the container hits the top of the viewport
    // Stop tracking when the bottom of the container hits the top of the viewport
    offset: ["start start", "end start"],
  });

  // 1. Define the horizontal translation based on scroll progress
  // We want it to start off the screen to the left and move to the right.
  // The content has a width of w-[200vw], so we'll translate a large distance.
  const xTranslate = useTransform(
    scrollYProgress,
    // Input range (Scroll Progress)
    [0, 0.5],
    // Output range (X-axis translation)
    // Start far left (e.g., -100% of the viewport width)
    // End near the center/right (e.g., 50% of the viewport width)
    ["0%", "-39%"]
  );

  // The rotation is commented out, but you can keep it if you still want the image to spin
  // const rotation = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    // The main container that dictates the scroll duration (800vh)
    <div ref={targetRef} className="h-[300vh] relative bg-white">
      {/* The sticky container that pins its content to the viewport */}
      <div className="sticky top-0 h-screen flex justify-center items-center overflow-x-hidden">
        {/*
          Horizontal Animation Section
          We change this <div> to a <motion.div> and apply the 'x' style.
        */}
        <motion.div
          className="absolute top-0 left-0 backdrop-blur-[3p p-20 w-fit h-screen bg-black/40 z-10 flex gap-20 items-center overflow-x-hidden justify-center"
          // 2. Apply the dynamic 'x' style
          style={{ x: xTranslate }}
        >
          <h1 className="text-yellow-500 flex flex-col gap-2 text-5xl font-bold">
            <span className="whitespace-nowrap">
              MULTIPLE AWARDS AS THE BEST
            </span>
            <span>DENTISTRY CLINIC IN INDIA</span>
          </h1>
          {/* image 1 */}
          <div className="flex flex-col gap-4">
            <img
              src={"dentist.jpg"}
              className="w-[500px] rounded-lg aspect-[3/2] object-cover"
              alt="Dentist"
            />
            <div className="bg-black/5 text-center backdrop-blur-sm border border-yellow-600/60 rounded-lg flex items-center justify-center font-bold text-white w-[500px] p-6">
              <span className="text-center">
                BEST DENTAL CLINIC IN INDIA 2021
              </span>
            </div>
          </div>
          {/* image 2 */}
          <div className="flex flex-col gap-4">
            <img
              src={"dentist.jpg"}
              className="w-[500px] rounded-lg aspect-[3/2] object-cover"
              alt="Dentist"
            />
            <div className="bg-black/5 text-center backdrop-blur-md border border-yellow-600/60 rounded-lg flex items-center justify-center font-bold text-white w-[500px] p-6">
              <span className="text-center">
                BEST DENTAL CLINIC IN INDIA 2023
              </span>
            </div>
          </div>
        </motion.div>

        {/* The background image */}
        <motion.img
          src={"teeth1.jpg"}
          className="w-full object-cover h-screen"
        />
      </div>
    </div>
  );
};

export default ShowCasePin;
