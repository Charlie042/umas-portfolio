"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { aboutMeText } from "../shared-components/components/data";

const About = () => {
  const images = [
    { src: "/umasimage2.webp", className: "w-[60px] h-[76px] absolute -right-8 top-[60px] -rotate-5" },
    { src: "/umasimage4.webp", className: "w-[60px] h-[76px] absolute -left-8 top-[360px] -rotate-9" },
    { src: "/umasimage5.webp", className: "w-[60px] h-[76px] absolute -left-8 bottom-0 rotate-9" },
    { src: "/umaimage1.webp", className: "w-[60px] h-[76px] absolute -right-7 bottom-20 rotate-3" },
  ];

  return (
    <section className="mx-5 mb-10 md:mx-20 lg:mx-40 xl:mx-70 sm:mt-20 sm:mb-20 lg:mb-0 text-center font-sotashi text-sm md:text-lg lg:text-xl flex flex-col gap-5 relative">
      {/* Floating images */}
      <div className="w-full h-full absolute md:hidden">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt="About Me Picture"
            width={1000}
            height={1000}
            className={img.className}
          />
        ))}
      </div>

      {/* Gradient background */}
      <div className="md:hidden w-[338px] h-[738px] bg-gradient-to-b from-[#FFE3E300]/30 via-[#56CCF24D]/30 to-[#FFE3E34D]/30 blur-xs rounded-full absolute -top-19 -left-1" />

      {/* About text */}
      {aboutMeText.map((paragraph) => (
        <motion.p
          key={paragraph.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative w-[300px] sm:w-full mx-auto text-base"
        >
          {paragraph.text}
        </motion.p>
      ))}
    </section>
  );
};

export default About;
