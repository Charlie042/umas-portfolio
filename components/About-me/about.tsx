"use client"
import { motion } from "motion/react";
import Image from "next/image";
import { aboutMeText } from "../shared-components/components/data";

const About = () => {
  return (
    <div className="mx-5 md:mx-20 lg:mx-40 xl:mx-70 mt-20 mb-20 lg:mb-0 text-center font-sotashi  text-sm md:text-lg lg:text-xl flex flex-col gap-5">
        {aboutMeText.map((paragraph) => (
    <motion.p key={paragraph.id} initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeInOut"}} className="relative">
          {paragraph.text}
      </motion.p>
        ))}
    </div>
  );
};
export default About;