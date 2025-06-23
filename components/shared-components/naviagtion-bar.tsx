"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";
import MenuBar from "./components/menu-bar";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { RiCloseLargeFill } from "react-icons/ri";



const NavigationBar = () => {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        {
            label: "Works",
            href: "/"
        },
        
        {
            label: "About me",
            href: "/about-me"
        },
        {
            label: "Playground",
            href: "/playground"
        }
        
    ]

  return (
    <nav className="flex justify-between items-center max-w-[1400px] mx-auto py-5 px-5">
      <div className="mx-5 lg:mx-0">
        <Image
          src="/umaanidi.png"
          alt="logo"
          width={100}
          height={100}
          className="max-sm:w-20 "
        />
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-4 bg-[#F4F4F4] py-2 px-2 rounded-full">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`cursor-pointer text-[14px] px-4  ${
                pathname === item.href
                  ? "bg-[#56CCF2] rounded-full px-4 font-medium"
                  : "text-black font-extralight"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className=" items-center gap-5 hidden lg:flex">
        <Link href="/resume" className="text-medium font-medium text-[#1E1E1E]">
          Resume
        </Link>
        <FaLinkedin className="text-xl" />
        <MdEmail className="text-xl" />
      </div>
      <div className="lg:hidden mx-5">
        <Drawer direction="right">
          <DrawerTrigger>
            <MenuBar />
          </DrawerTrigger>
          <DrawerContent className=" p-5">
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
                    pathname === item.href ? "text-white bg-[#56CCF2] font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default NavigationBar;