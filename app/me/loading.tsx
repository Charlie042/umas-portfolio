"use client";
import { motion } from "motion/react"
import Image from "next/image";
export default function Loading() {
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
  )
}