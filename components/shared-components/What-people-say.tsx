"use client"
import Card from "./components/card";
import { data } from "./components/data";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

const WhatPeopleSay = () => {
  return (
    <section className="mx-0  mt-10  bg-white">
      <h2 className="font-bricolage text-[#1E1E1E] text-3xl font-bold text-center">
        What people that I’ve worked with had to say
      </h2>
      <div className="flex justify-center relative my-30  max-w-400 mx-auto px-10 sm:px-0 isolate">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10 hidden md:block" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10 hidden md:block" />
        <Swiper
          modules={[ A11y, Autoplay]}
          spaceBetween={0}

          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default WhatPeopleSay;
