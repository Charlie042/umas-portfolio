"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";
import MenuBar from "./components/menu-bar";
import { HiArrowUpRight } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion,AnimatePresence, easeInOut } from "motion/react";
import { handleResumeView } from "@/lib/utils";
import { use, useEffect, useRef, useState } from "react";

const NavigationBar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Works", href: "/" },
    { label: "About me", href: "/about-me" },
    { label: "Playground", href: "/playground" },
  ];

  const [activeTab, setActiveTab] = useState(pathname || "/");
  const activeTabElementRef = useRef<HTMLAnchorElement | null>(null);
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });
  const [isMenuOPen, setIsMenuOpen] = useState(false);

  // Update highlight position when activeTab changes
  useEffect(() => {
    const el = activeTabElementRef.current;
    if (el) {
      setIndicatorProps({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      className="flex justify-between items-center py-3 px-5 sticky bg-white top-0  z-50 w-full"
    >
      {/* Logo */}
      <Link href="/" className="mx-5 lg:mx-0">
        <Image
          src="/umaanidi.png"
          alt="logo"
          width={100}
          height={100}
          priority
          className="max-sm:w-20"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:block relative">
        <ul className="flex gap-4 py-1 px-2 rounded-full bg-[#F4F4F4] relative">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              ref={activeTab === item.href ? activeTabElementRef : null}
              onClick={() => setActiveTab(item.href)}
              className={`cursor-pointer text-[16px] px-4 py-1 font-[400] relative z-10 ${
                activeTab === item.href ? "text-black font-[400]" : "text-black font-[400]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>

        {/* Animated blue highlight */}
        <motion.div
          className="absolute top-0 h-[30px] bg-[#56CCF2] rounded-full my-1"
          animate={{ left: indicatorProps.left, width: indicatorProps.width }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Resume + Icons */}
      <div className="items-center gap-5 hidden lg:flex">
        <p
          onClick={() => handleResumeView("/updated resume.pdf")}
          className="text-medium font-medium text-[#1E1E1E] hover:text-[#FF6B6B] cursor-pointer transition-all duration-300"
        >
          Resume
        </p>
        <Link
          href="https://www.linkedin.com/in/uma-anidi-"
          target="_blank"
          className="text-xl hover:text-[#FF6B6B] cursor-pointer transition-all duration-300"
        >
          <FaLinkedin className="text-xl" />
        </Link>
        <Link
          href="mailto:umaanidi@gmail.com"
          target="_blank"
          className="text-xl hover:text-[#FF6B6B] cursor-pointer transition-all duration-300"
        >
          <MdEmail className="text-xl" />
        </Link>
      </div>

      {/* Mobile Nav */}
      <div className="relative lg:hidden mx-5 my-2">
        <MenuBar onClick={()=> setIsMenuOpen( prev=> !prev)}/>
        <AnimatePresence>
        {isMenuOPen && (
          <motion.div  className="fixed inset-0 z-30 flex">
           <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ease:easeInOut}} onClick={()=> setIsMenuOpen(false)} className="fixed inset-0 bg-black/30 z-30"/>
         <motion.div initial={{opacity: 0, x:-50}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x:-100}} transition={{ease:easeInOut}} className="fixed h-[840px] w-[313px] bg-[#FFF8F1] left-0 top-1 shadow-md z-40">
          <div className="mt-10 flex justify-between items-center mx-3">
        <Link href="/" className=" lg:mx-0">
        <Image
          src="/umaanidi.png"
          alt="logo"
          width={100}
          height={100}
          priority
          className="max-sm:w-20"
        />
      </Link>
          <RiCloseLargeFill className="text-lg text-[#AAA49E] cursor-pointer" onClick={() => setIsMenuOpen(false)}/>
          </div>
          <div className="mt-7">
          <ul className="flex flex-col gap-5 py-10 px-5 text-base font-medium font-unbounded tracking-[-0.95px]">
            <li>
              <Link href="/"  onClick={() => setIsMenuOpen(false)}>WORKS</Link>
            </li>
            <li>
              <Link href="/about-me"  onClick={() => setIsMenuOpen(false)}>ABOUT ME</Link>
            </li>
            <li>
              <Link href="/playground"  onClick={() => setIsMenuOpen(false)}>PLAYGROUND</Link>
            </li>
          </ul>
          </div>
         <div className="w-full flex flex-col justify-center items-center  h-full ">
        <div className="items-center gap-5 flex w-fit">
        <p
          onClick={() => handleResumeView("/updated resume.pdf")}
          className="text-medium font-medium text-[#3C5E67] hover:text-[#FF6B6B] cursor-pointer transition-all duration-300"
        >
          Resume
        </p>
        <Link
          href="https://www.linkedin.com/in/uma-anidi-"
          target="_blank"
          className="text-xl hover:text-[#FF6B6B] cursor-pointer transition-all duration-300 bg-[#DDF5FC] rounded-full p-2"
        >
          <FaLinkedin className="text-lg" />
        </Link>
        <Link
          href="mailto:umaanidi@gmail.com"
          target="_blank"
          className="text-xl hover:text-[#FF6B6B] cursor-pointer transition-all duration-300 bg-[#DDF5FC] rounded-full p-2"
        >
          <MdEmail className="text-lg" />
        </Link>
      </div>
        <div className="flex items-center gap-2 text-[#464646] text-base my-10">
          <p className="flex items-center gap-2 font-medium group">
            <span>
              <Link
                href="https://www.behance.net/umaanidi_"
                className="hover:text-[#56CCF2] transition-all duration-500"
              >
                Behance
              </Link>
            </span>
            <HiArrowUpRight className="w-5 h-5 group-hover:text-[#56CCF2] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
          </p>
          <p className="flex items-center gap-2 font-medium group">
            <span>
              <Link
                href="https://dribbble.com/umaanidi"
                className="hover:text-[#56CCF2] transition-all duration-500"
              >
                Dribbble
              </Link>
            </span>
            <HiArrowUpRight className="w-5 h-5 group-hover:text-[#56CCF2] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
          </p>
        </div>

          </div>
         </motion.div>
         </motion.div>

)}
         </AnimatePresence>
        
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
