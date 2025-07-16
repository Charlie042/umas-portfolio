"use client"
import FeaturedCard from "./featured-card";
import { featuredWorksData } from "../shared-components/components/data";
import {motion, useScroll} from "motion/react"
import { useEffect, useRef } from "react";
import Lenis from "lenis";
const FeaturedWorks = () => {
const ref = useRef(null);
const {scrollYProgress} = useScroll({
  target: ref,
  offset: ["start start", "end end"]
})

useEffect(() => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}, []);



  return (
    <section className="xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 min-h-lvw relative ">
      <h3 className="font-bricolage text-[#1E1E1E] text-3xl font-bold ">
        Featured Works
      </h3>
      <div className="flex">
        <p className=" text-xl text-[#696969] max-w-245 mt-5 font-medium">
          Here are some of my best works so far.
        </p>
      </div>
      <div id="featured-works" ref={ref} className=" mt-[30vh] mb-[100vh]">
        {featuredWorksData.map((item, idx) => {
          const target = 1 - (featuredWorksData.length - idx) * 0.05;
          return (
            <FeaturedCard
              key={idx}
              {...item}
              idx={idx}
              range={[idx * 0.2, 1]}
              target={target}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedWorks;
