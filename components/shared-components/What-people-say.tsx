"use client"
import Card from "./components/card";
import { data } from "./components/data";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Marquee } from "../ui/marquee";

const WhatPeopleSay = () => {
  return (
    <section className="mx-0  mt-10  bg-white">
      <h2 className="font-bricolage text-[#1E1E1E] text-3xl font-bold text-center">
        What people that I’ve worked with had to say
      </h2>
      <div
        suppressHydrationWarning={true}
        className="flex justify-center relative my-30  max-w-400 mx-auto px-10 sm:px-0 isolate"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-[rgba(255, 255, 255, 0)] to-[rgba(255, 255, 255, 1)] z-10 hidden md:block" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-[rgba(255, 255, 255, 0)]  to-[rgba(255, 255, 255, 1)] z-10 hidden md:block" />
        <Marquee pauseOnHover className="[--duration:25s]">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
export default WhatPeopleSay;
