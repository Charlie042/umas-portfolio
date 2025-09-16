"use client";
import FeaturedCard from "./featured-card";
import { featuredWorksData } from "../shared-components/components/data";
import { motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const FeaturedWorks = () => {
  const ref = useRef(null);
  const [marginClass, setMarginClass] = useState("mb-[60vh]"); // Default fallback

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });


  const calculateMargin = () => {
    if (typeof window === "undefined") return; // SSR safety

    const viewportHeight = window.innerHeight;

    if (viewportHeight <= 760) {
      setMarginClass("mb-[120vh]"); 
    } else if (viewportHeight <= 763) {
      setMarginClass("mb-[80vh]"); 
    } else if (viewportHeight <= 1024) {
      setMarginClass("mb-[60vh]");
    } else {
      setMarginClass("mb-[60vh]");
    }
  };

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Calculate initial margin
    calculateMargin();

    // Handle window resize
    const handleResize = () => {
      calculateMargin();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="sm:mx-5 relative ">
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
        className="px-2 md:px-0 font-bricolage text-[#1E1E1E] text-xl md:text-3xl font-bold "
      >
        Featured Works
      </motion.h3>
      <div className="flex px-2 md:px-0">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
          className=" text-sm md:text-xl text-[#696969] max-w-245 mt-2 md:mt-5 font-medium"
        >
          Here are some of my best works so far.
        </motion.p>
      </div>
      <div id="featured-works" ref={ref} className={`mt-20 ${marginClass}`}>
        {featuredWorksData.map((item, idx) => {
          // const target = 1 - (featuredWorksData.length - idx) * 0.05;
          return (
            <FeaturedCard
              key={idx}
              {...item}
              idx={idx}
              range={[idx * 0.2, 1]}
              // target={target}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedWorks;
