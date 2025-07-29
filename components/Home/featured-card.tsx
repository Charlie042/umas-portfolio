"use client"
import Image from "next/image";
import { useRef } from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { IoMdArrowForward } from "react-icons/io";
import { StaticImageData } from "next/image";
import { motion, useScroll, useTransform, MotionValue  } from "motion/react";
import Shape from "../ui/shape";
import SShape from "../ui/sshape";

export interface featuredCardProps {
  id: number;
  bgColor: string;  
  badgeColor: string
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
  shapeImage
}: featuredCardProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "start start"]
    });
    const ImageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1,target])
  return (
    <div
      ref={ref}
      className={cn(" max-w-[1160px] h-screen mx-auto sticky top-0")}
    >
      <motion.div
        className={cn(
          "my-10 space-y-5 w-[1190px] h-screen  p-5  rounded-lg rounded-tl-none relative ",
          bgColor,
          textColor
        )}
        style={{ top: `calc(2% + ${idx * 50}px)`, scale: scale }}
      >
        <div className="flex justify-between item-center relative">
          <div className="absolute isolate ">
            <div className=" top-30 -left-27 z-10 rotate-90 text-2xl font-bold font-bricolage flex items-center justify-center relative  w-30">
              <h2 className="text-2xl font-bold font-bricolage">{shapeName}</h2>
              <div className="absolute isolate  z-50">
                  <Image src={shapeImage} alt="shape" width={50} height={50} className="relative z-50 top-2 right-22 rotate-270 w-6 h-6"/>
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
              "flex justify-center rounded-full text-base px-5 py-1",
              badgeColor
            )}
          >
            {badgeYear}
          </Badge>
          <Badge
            className={cn(
              "flex justify-center rounded-full text-base px-5 py-1",
              badgeColor
            )}
          >
            {badgeTitle}
          </Badge>
        </div>
        <div className="flex justify-between item-center">
          <div className="max-w-[918px] w-full space-y-5">
            <h1 className={cn(titleColor, "text-4xl font-bold font-bricolage")}>
              {cardTitle}
            </h1>
            <p className="text-base font-medium ">{description}</p>
          </div>
          <IoMdArrowForward className="text-7xl" />
        </div>
        <div className="flex justify-between gap-10 max-w-[725px] w-full ">
          <div className="flex flex-col gap-3">
            <p className={cn(titleColor, "text-2xl font-bold")}>{percent1}</p>
            <p className="text-base font-medium">{percentSixty}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className={cn(titleColor, "text-2xl font-bold")}>{percent2}</p>
            <p className="text-base font-medium">{percentForty}</p>
          </div>
        </div>
        <motion.div className="max-w-[1089px] min-h-[400px] rounded-lg mx-auto my-10 w-full relative isolate overflow-hidden">
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