"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";
import MenuBar from "./components/menu-bar";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "motion/react";
import { handleResumeView } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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
      <div className="lg:hidden mx-5">
        <Drawer direction="right">
          <DrawerTrigger>
            <MenuBar />
          </DrawerTrigger>
          <DrawerContent className="p-5">
            <DrawerTitle className="text-center text-2xl font-bold hidden">
              Menu
            </DrawerTitle>
            <DrawerClose className="flex justify-end">
              <RiCloseLargeFill className="text-xl text-[#2f7d96]" />
            </DrawerClose>
            <div className="flex flex-col justify-center items-center my-auto gap-10 ">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`hover:bg-[#F4F4F4] w-full text-center p-3 rounded-lg text-[#2f7d96] hover:text-[#56CCF2] ${
                    pathname === item.href
                      ? "text-white bg-[#56CCF2] font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
