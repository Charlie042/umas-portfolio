"use client"
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Playground1, Playground2, Playground3 } from "@/components/playground";
  const Playground = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
  

    const { scrollYProgress: progress1 } = useScroll({
      target: ref,
      offset: ["0 1", "1 1"], 
    });
    const scale = useTransform(progress1, [0, 1], [0.5, 1]);



    const { scrollYProgress: progress2 } = useScroll({
      target: ref2,
      offset: ["0 1", "1 1"],
    });
    const x = useTransform(progress2, [0, 1], [0.8, 1]);

    const { scrollYProgress: progress3 } = useScroll({
      target: ref3,
      offset: ["0 1", "1 1"],
    });
    const y = useTransform(progress3, [0, 1], [0.8, 1]);

  return (
    <section  className=" my-20">
      <motion.div className="flex flex-col gap-2 lg:gap-5  px-5 lg:px-0">
        <motion.h3 initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}} className="font-bricolage text-[#1E1E1E] text-2xl lg:text-3xl font-bold">
          My Playground
        </motion.h3>
        <motion.p initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}} className="font-sotashi pr-5 lg:pl-0 text-base lg:text-lg text-[#696969] font-normal">Just a bunch of things that i’ve worked on over time.</motion.p>
      </motion.div>
      <div className="flex flex-col gap-30 mt-20">
        <motion.div ref={ref} style={{scale: scale}} initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: -5}} transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}>
          <Playground1 />
        </motion.div>
        <motion.div ref={ref2} style={{scale: x}} initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}>
          <Playground2 />
        </motion.div>
        <motion.div ref={ref3} style={{scale: y}} initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}>
          <Playground3 />
        </motion.div>
      </div>
    </section>
  );
};

export default Playground;