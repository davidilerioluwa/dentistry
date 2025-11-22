"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ShowCasePin = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={targetRef} className="h-[500vh] relative w-screen bg-white">
      <div
        className="
          sticky top-0 h-screen w-screen flex justify-center items-center
        "
      >
        <motion.img
          src={"circularBubbles.png"}
          className="h-full object-contain"
          alt="Circular Bubbles"
          style={{
            rotate: rotation,
            y: "-50%",
            x: "-50%",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      </div>
      <div className="absolute top-[100vh] left-0 w-full p-10 z-10">
        <h2>Content scrolls behind the rotating image!</h2>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-10 z-10">
        <h2>End of Pinning Effect. Image will scroll away now.</h2>
      </div>
    </div>
  );
};

export default ShowCasePin;
