"use client";
import { motion } from "motion/react";
import Image from "next/image";

interface Paragraph {
  paragraphText: string;
}

interface AboutProps {
  aboutMe: Paragraph[];
}

const About = ({ aboutMe }: AboutProps) => {
  return (
    <div className=" mx-5 mb-10 md:mx-20 lg:mx-40 xl:mx-70 sm:mt-20 sm:mb-20 lg:mb-0 text-center font-sotashi text-sm md:text-lg lg:text-xl flex flex-col gap-5 relative ">
      <div className="w-full h-full absoute md:hidden">
        <Image
          src="/umasimage2.webp"
          alt="About Me Picture"
          width={1000}
          height={1000}
          className="w-[60px] h-[76px] absolute -right-8 top-15 -rotate-5"
        />
        <Image
          src="/umasimage4.webp"
          alt="About Me Picture"
          width={1000}
          height={1000}
          className="w-[60px] h-[76px] absolute -left-8 top-90 -rotate-9"
        />
        <Image
          src="/umasimage5.webp"
          alt="About Me Picture"
          width={1000}
          height={1000}
          className="w-[60px] h-[76px] absolute -left-8 bottom-0 rotate-9"
        />
        <Image
          src="/umaimage1.webp"
          alt="About Me Picture"
          width={1000}
          height={1000}
          className="w-[60px] h-[76px] absolute -right-7 bottom-20 rotate-3"
        />
      </div>
      <div className="md:hidden w-[338px] h-[738px]  bg-gradient-to-b from-[#FFE3E300]/30 via-[#56CCF24D]/30 blur-xs to-[#FFE3E34D]/30 border-none rounded-full absolute -top-19 -left-1" />
      {aboutMe?.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative w-[300px] sm:w-full mx-auto text-base"
        >
          {paragraph.paragraphText}
        </motion.p>
      ))}
    </div>
  );
};
export default About;
