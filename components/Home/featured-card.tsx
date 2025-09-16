"use client";
import Image from "next/image";
import { useRef } from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { IoMdArrowForward } from "react-icons/io";
import { StaticImageData } from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Shape from "../ui/shape";
import SShape from "../ui/sshape";
import { useMediaQuery } from "usehooks-ts";
import { Pointer } from "../magicui/pointer";
import { ImArrowUpRight2 } from "react-icons/im";
import { TiCancel } from "react-icons/ti";




export interface featuredCardProps {
  id: number;
  bgColor: string;
  badgeColor: string;
  badgeYear: string;
  badgeTitle: string;
  cardTitle: string;
  description: string;
  cardImage: string | StaticImageData;
  percentSixty: string;
  percentForty: string;
  textColor?: string;
  titleColor?: string;
  percent1: string;
  percent2: string;
  idx: number;
  range: [number, number];
  target: number;
  progress: MotionValue<number>;
  shapeColor: string;
  shapeColor2: string;
  shapeName: string;
  shapeImage: string | StaticImageData;
  link?: string;
  cursorColor: string;
  comingSoon?: boolean;
}
const FeaturedCard = ({
  id,
  bgColor,
  badgeColor,
  badgeYear,
  badgeTitle,
  cardImage,
  cardTitle,
  description,
  percentForty,
  percentSixty,
  percent1,
  percent2,
  textColor,
  titleColor,
  idx,
  range,
  target,
  progress,
  shapeColor,
  shapeColor2,
  shapeName,
  shapeImage,
  link,
  cursorColor,
  comingSoon,
}: featuredCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const ImageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, target]);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <div
      ref={ref}
      className={cn(
        " max-w-[102vw] h-[70vh] mx-auto sticky top-10 cursor-pointer"
      )}
    >
      <Pointer>
        <div
          className={`flex items-center justify-center rounded-full p-2 ${!link ? "" : cursorColor}`}
        >
          {link ? (
            <ImArrowUpRight2 className={`text-sm`} />
          ) : (
            <TiCancel className={`text-3xl text-white`} />
          )}
        </div>
      </Pointer>
      <motion.div
        onClick={handleClick}
        className={cn(
          "group my-10 space-y-5 md:w-[85vw] xl:w-[1020px] md:mx-20 mx-2  xl:mx-auto px-2 py-3  md:p-5  lg:px-5 lg:pt-5 lg:pb-10  rounded-lg md:rounded-tl-none relative",
          bgColor,
          textColor
        )}
        style={{
          top: isMobile
            ? `calc(2% + ${idx * 50}px)`
            : `calc(2% + ${idx * 50}px)`,
          scale: scale,
        }}
      >
        <div className="hidden md:flex justify-between item-center relative">
          <div className="absolute isolate">
            <div className=" top-30 -left-27 z-10 rotate-90 text-2xl font-bold font-bricolage flex items-center justify-center relative  w-30">
              <h2 className="text-2xl font-bold font-bricolage">{shapeName}</h2>
              <div className="absolute isolate  z-50">
                <Image
                  src={shapeImage}
                  alt="shape"
                  width={50}
                  height={50}
                  className="relative z-50 top-2 right-22 rotate-270 w-6 h-6"
                />
                <SShape
                  className="absolute -top-1 -left-25  rotate-270"
                  color={shapeColor2}
                />
              </div>
            </div>
            <Shape className="absolute -top-5 -left-25" color={shapeColor} />
          </div>
          <Badge
            className={cn(
              "flex justify-center rounded-full text-xs xl:text-base  px-2 xl:px-5 py-1",
              badgeColor
            )}
          >
            {badgeYear}
          </Badge>
          {comingSoon && (
            <div className="relative w-50 ml-20">
              <div className="absolute -top-8 flex justify-center items-center bg-[#B0F9A5] text-[#213E1C] text-xs xl:text-sm  font-semibold px-2 xl:px-5 py-1 rounded-full">
                Coming Soon
              </div>
            </div>
          )}
          <Badge
            className={cn(
              "flex justify-center rounded-full text-xs xl:text-base px-2 xl:px-5 py-1",
              badgeColor
            )}
          >
            {badgeTitle}
          </Badge>
        </div>
        <div className="flex justify-between item-center px-2">
          <div className="md:max-w-[895px] w-full space-y-5">
            <h1
              className={cn(
                titleColor,
                "text-md leading-tight md:text-2xl xl:text-3xl font-semibold font-bricolage flex items-center justify-between"
              )}
            >
              {cardTitle}
              {!comingSoon && (
              <span className="text-sm md:hidden self-start">
                <IoMdArrowForward className="text-lg" />
              </span>
              )}
            </h1>
            <p className=" text-xs md:text-sm lg:text-base font-medium ">
              {description}
            </p>
          </div>
          {!comingSoon && (
          <IoMdArrowForward className="text-5xl hidden md:block group-hover:translate-x-2 transition-all duration-300" />
          )}
        </div>
        <div className="flex justify-between gap-10 max-w-[725px] w-full ">
          <div className="flex flex-col lg:gap-3">
            <p className={cn(titleColor, "text-lg lg:text-2xl font-bold")}>
              {percent1}
            </p>
            <p className="text-sm lg:text-base font-medium">{percentSixty}</p>
          </div>
          <div className="flex flex-col lg:gap-3">
            <p className={cn(titleColor, "text-lg lg:text-2xl font-bold")}>
              {percent2}
            </p>
            <p className="text-sm lg:text-base font-medium">{percentForty}</p>
          </div>
        </div>
        <motion.div className="max-w-[800px] lg:max-w-[1089px] min-h-[200px] lg:min-h-[300px] rounded-lg mx-auto my-10 w-full relative isolate overflow-hidden">
          <motion.div
            style={{ scale: ImageScale }}
            className="absolute top-0 left-0 w-full h-full "
          >
            <Image
              src={cardImage}
              alt="Featured work"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeaturedCard;

export const Spine = () => {
  return (
    <div className="w-[79px] h-[270px] bg-[#FF8D8D] flex items-center relative overflow-hidden ">
      <div className="w-[125px] bg-white h-[70px] rotate-155 absolute -top-10 -left-10  "></div>
      <div className="w-[125px] bg-white h-[70px] rotate-15 absolute -bottom-10 -left-10  "></div>
      <div className="w-[25px] bg-[#FF8D8D] h-[80px] rounded-lg  rotate-67 absolute  top-0  left-[25px] "></div>
    </div>
  );
};
