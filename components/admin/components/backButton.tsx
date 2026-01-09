"use client";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export function BackButton({ href }: { href: string }) {
    const router = useRouter();
    return (
        <>
        <p 
        onClick={() => router.push(href)}
        className="text-sm text-gray-400 hover:text-[#ffa1a1] font-bold cursor-pointer flex justify-center items-center gap-2 group transition-colors duration-300"><span ><IoIosArrowBack className="w-4 h-4 mt-1 group-hover:opacity-100 group-hover:-translate-x-1 opacity-0 transition-all duration-300" /></span> go back to portfolio </p>
        </>
    )
}