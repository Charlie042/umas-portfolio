"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "motion/react";

export default function MainPageComp() {
  const router = useRouter();
  useEffect(() => {
      async function TransitionToNextPage() {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        document.body.classList.add("page-transition");
        await new Promise((resolve) => setTimeout(resolve, 500));
        router.push("/me");
        await new Promise((resolve) => setTimeout(resolve, 200));
        document.body.classList.remove("page-transition");
      }
      TransitionToNextPage();
  },[]);
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center gap-5">
       <motion.div 
         animate={{
          scale: [1,1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          times: [0.0, 0.25, 0.5, 0.75, 1.0],
          ease: "easeInOut", 
        }} >
        <Image  
        src="/cartoon.png"
        alt="uma"
        width={500}
        height={500}
        className=" sm:w-20 sm:h-20 w-7 h-7 mx-2"/>
      </motion.div>

      <h1 className="font-bricolage">Uma Anidi</h1>
    </div>
  );
}
