"use client"
import { motion } from "motion/react";

export function LoadersAdmin(){
    return (
        <div className="mt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">     
        <motion.div animate={{
            opacity: [0.5, 1, 0.5],
        }} transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0,
        }} className="relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl p-8 bg-[#ffa1a1]">
            
        </motion.div>
        <motion.div animate={{
            opacity: [0.5, 1, 0.5],
        }} transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.5,
        }} className="relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl p-8 bg-[#95ddf5]">
            
        </motion.div>
        <motion.div animate={{
            opacity: [0.5, 1, 0.5],
        }} transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.7,
        }} className="relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl p-8 bg-[#f7e99e]">
            
        </motion.div>
        <motion.div animate={{
            opacity: [0.5, 1, 0.5],
        }} transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.9,
        }} className="relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl p-8 bg-[#F2EAE2]">
            
        </motion.div>
        </div>
    )
}