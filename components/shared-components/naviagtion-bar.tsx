"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const NavigationBar = () => {

    const [active, setActive] = useState("Works");

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
    <nav className="flex justify-between items-center max-w-[1400px] mx-auto py-5">
      <div>
        <Image src="/umaanidi.png" alt="logo" width={100} height={100} />
      </div>
      <div>
        <ul className="flex gap-4 bg-[#F4F4F4] py-2 px-2 rounded-full">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`cursor-pointer text-[14px] px-4  ${
                active === item.label
                  ? "bg-[#56CCF2] rounded-full px-4 font-medium"
                  : "text-black font-extralight"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/resume" className="text-medium font-medium text-[#1E1E1E]">
          Resume
        </Link>
        <FaLinkedin className="text-xl" />
        <MdEmail className="text-xl" />
      </div>
    </nav>
  );
};

export default NavigationBar;