import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
 return(
  <div className="mt-20 xl:mx-40 lg:mx-20 md:mx-10 sm:mx-5 flex flex-col gap-5 px-5 lg:px-0">
    <div className="flex items-center  ">
      <h1 className="font-bricolage xl:text-[90px] lg:text-[70px] md:text-[50px] text-[30px] leading-tight">
        Hey, I’m Uma
        <span className="inline-block align-middle ml-1">
          <Image
            src="/cartoon.png"
            alt="uma"
            width={50}
            height={50}
            className="md:w-15 md:h-15 sm:w-10 sm:h-10 w-7 h-7"
          />
        </span>
        I design things that feel like a friendly chat
        <span className="inline-block align-middle ml-1">
          <Image
            src="/smile.png"
            alt="uma"
            width={50}
            height={50}
            className="md:w-20 md:h-20 sm:w-10 sm:h-10 w-7 h-7"
          />
        </span>
      </h1>
    </div>
    <p className=" text-xl text-[#696969] font-[450]">
      Three <span className="font-bricolage font-light ">(3+)</span> years of
      designing apps, websites, and moments that just click.
    </p>
    <div className="flex items-center gap-4">
      <p className="text-[#8B8B8B] text-lg">Say Hello!</p>
      <span className="bg-[#DDF5FC] flex items-center justify-center w-10 h-10 rounded-full">
        <FaLinkedin className="w-5 h-5" />
      </span>
      <span className="flex items-center justify-center gap-4 bg-[#DDF5FC] w-10 h-10 rounded-full">
        <IoMdMail className="w-5 h-5" />
      </span>
    </div>
  </div>
  )
};

export default Hero
