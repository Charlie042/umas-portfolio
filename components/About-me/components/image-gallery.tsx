"use client";
import Image from "next/image";
import ImageContainer from "./image-container";

export default function ImageGallery() {
    return (
        <div className="hidden lg:block mb-70 relative">
            <div className="relative lg:px-2 xl:px-0">
            <Image src="/lines.svg" alt="gallery lines" width={1000} height={200} className="w-[90%]"/>
            <ImageContainer containerClassName="lg:top-10 xl:top-17 xl:left-20" borderClassName="right-27 rotate-20" src="/umaimage1.webp"/>
            <ImageContainer containerClassName="lg:top-25 lg:left-50 xl:top-30 xl:left-70" borderClassName="right-25 -top-1" src="/umasimage2.webp"/>
            <ImageContainer containerClassName= "lg:top-25 lg:left-100  xl:top-30 xl:left-125" borderClassName="right-25" src="/umasimage3.webp"/>
            <ImageContainer containerClassName="lg:top-22 lg:left-150 xl:top-27  xl:left-175" borderClassName="left-15 rotate-170" src="/umasimage4.webp"/>
            <ImageContainer containerClassName="lg:top-6 lg:left-195 xl:top-13 xl:left-220" borderClassName="right-30 top-3 rotate-170" src="/umasimage5.webp"/>
            </div>
        </div>
    )
}