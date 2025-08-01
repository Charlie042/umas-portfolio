'use client'
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
    const scrollToFeatured = () => {
        const featuredElement = document.getElementById('featured-works');
        if (featuredElement) {
            featuredElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

 return (
   <div className="mt-20 xl:mx-40 lg:mx-20 md:mx-10 sm:mx-5 flex flex-col gap-5 px-5 lg:px-0 h-[70vh]">
     <div className="flex items-center  ">
       <h1 className="font-bricolage max-w-[1200px] xl:text-[90px] lg:text-[70px] md:text-[50px] text-[30px] leading-tight font-medium text-[#1E1E1E] tracking-[-6px]">
         Hey, I’m Uma
         <span className="inline-block align-middle ml-1">
           <Image
             src="/cartoon.png"
             alt="uma"
             width={50}
             height={50}
             className=" sm:w-12 sm:h-12 w-7 h-7 mx-2"
           />
         </span>
         I design things that feel like a friendly chat
         <span className="inline-block align-middle ml-1">
           <Image
             src="/smile.png"
             alt="uma"
             width={50}
             height={50}
             className=" sm:w-11 sm:h-11 w-7 h-7"
           />
         </span>
       </h1>
     </div>

     <p className=" text-xl text-[#696969] font-medium">
       Three <span className="font-bricolage font-medium ">(3+)</span> years of
       designing apps, websites, and moments that just click.
     </p>
     <div className="flex  justify-between relative">
       <div className="flex  gap-4  w-full">
         <p className="text-[#8B8B8B] font-medium text-lg">Say Hello!</p>
         <span className="bg-[#DDF5FC] flex items-center justify-center w-10 h-10 rounded-full">
           <FaLinkedin className="w-5 h-5" />
         </span>
         <span className="flex items-center justify-center gap-4 bg-[#DDF5FC] w-10 h-10 rounded-full">
           <IoMdMail className="w-5 h-5" />
         </span>
       </div>
       <div className="w-150">
         <video
           src="/219615.mp4"
           autoPlay
           muted
           loop
           className="object-cover"
         />
       </div>
     </div>
     <div className="flex justify-center">
        <button onClick={scrollToFeatured} className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5  shadow-lg rounded-full flex items-center justify-center cursor-pointer">
            <FaArrowDown className="w-6 h-6 text-[#1E1E1E]" />
        </button>
     </div>
   </div>
 );
};

export default Hero


