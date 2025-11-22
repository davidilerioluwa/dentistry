"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

export default function ScrollRevealFM() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress → 100 → 0
  const percent = useTransform(scrollYProgress, [0, 0.75], [0, 100]);

  // Create a MotionValue for "100 - percent"
  const inversePercent = useTransform(percent, (p) => 100 - p);

  // Build clip-path templates
  const leftClip = useMotionTemplate`inset(0 ${percent}% 0 0)`;
  const rightClip = useMotionTemplate`inset(0 0 0 ${inversePercent}%)`;

  return (
    <div className="px-20 pb-10 bg-yellow-50">
      <div className="text-5xl py-10 w-1/2 mx-auto text-center text-yellow-600 ">
        TRANSFORMATIONS THAT WILL BLOW YOUR MIND
      </div>
      <div
        ref={ref}
        className="relative w-full aspect-video overflow-hidden rounded-lg"
      >
        {/* Left image */}
        <div className="absolute top-0 left-0 flex z-10 justify-around py-16 w-full h-full text-white text-5xl">
          <span>Before</span>
          <span>After</span>
        </div>
        <motion.img
          src="/badTeeth.png"
          className="absolute w-full h-full object-cover"
          style={{ clipPath: leftClip }}
        />

        {/* Right image */}
        <motion.img
          src="/goodTeeth.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: rightClip }}
        />
      </div>
    </div>
  );
}
