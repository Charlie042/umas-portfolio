"use client"
import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";




const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <footer className="bg-[#FAFAFA] border-[#F1F1F1]">
      <div className="flex  justify-between mx-40 my-10 py-10">
        <div className="w-1/2 flex flex-col gap-5">
          <h2 className="text-4xl font-bricolage font-medium leading-tight w-140">
            Got a question or just want to say hi? I will be so happy to hear
            from you! 😊
          </h2>
          <Image src="/umaanidi.png" alt="cartoon" width={100} height={100} />
        </div>
        <div className="w-1/2 flex flex-col items-end ">
          <h4 className="text-4xl font-bricolage font-medium">
            Let’s connect here
          </h4>
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
      </div>
      <div className="flex justify-between items-center mx-40 ">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[#828282] text-lg hover:bg-[#F4F4F4] p-2 rounded-full cursor-pointer"
        >
          Back to top <IoIosArrowRoundUp className="w-5 h-5" />
        </button>
        <div>
          <h4 className="text-lg text-[#828282] flex gap-3">
            Designed with
            <span className=" align-middle ml-1 bg-[#ECE6FF] w-7 h-7 rounded-full flex items-center justify-center">
              <Image src="/coffee.png" alt="heart" width={20} height={20} />
            </span>
            <span> + </span>
            <span className=" align-middle ml-1 bg-[#FFE66D] w-7 h-7 rounded-full flex items-center justify-center">
              <Image src="/music.png" alt="heart" width={20} height={20} />
            </span>
            in Abuja, Nigeria
          </h4>
        </div>
        <div className="flex items-center gap-2 text-[#828282] text-lg my-10">
          <p className="flex items-center gap-2">
            <span>
              <Link href="https://www.linkedin.com/in/umaanidi/">Behance</Link>
            </span>
            <HiArrowUpRight className="w-5 h-5" />
          </p>
          <p className="flex items-center gap-2">
            <span>
              <Link href="https://www.linkedin.com/in/umaanidi/">Dribbble</Link>
            </span>
            <HiArrowUpRight className="w-5 h-5" />
          </p>
          <p className="flex items-center gap-2">
            <span>
              <Link href="https://www.linkedin.com/in/umaanidi/">Resume</Link>
            </span>
            <HiArrowUpRight className="w-5 h-5" />
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
