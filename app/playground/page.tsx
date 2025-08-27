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
    const scale = useTransform(progress1, [0, 1], [0.8, 1]);



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
      <div className="flex flex-col gap-5">
        <h3 className="font-bricolage text-[#1E1E1E] text-3xl font-bold">
          My Playground
        </h3>
        <p className="font-sotashi text-lg text-[#696969] font-normal">Just a bunch of things that i’ve worked on over time.</p>
      </div>
      <div className="flex flex-col gap-30 mt-20">
        <motion.div ref={ref} style={{scale: scale}} initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: -5}} transition={{duration: 0.5, ease: "easeOut"}}>
          <Playground1 />
        </motion.div>
        <motion.div ref={ref2} style={{scale: x}} initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}}>
          <Playground2 />
        </motion.div>
        <motion.div ref={ref3} style={{scale: y}} initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}}>
          <Playground3 />
        </motion.div>
      </div>
    </section>
  );
};

export default Playground;