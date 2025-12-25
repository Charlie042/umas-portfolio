"use client"
import { GalleryModal } from "@/components/admin/components/gallery"
import Image from "next/image"
import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FeaturedWorkCard } from "@/components/admin/feature-work/featuredWork-card";
import { use } from "react";
import { featuredCardProps } from "@/components/Home/featured-card";


export default function AdminPageContent ({ featuredCards }: { featuredCards: Promise<featuredCardProps[]> }) {
   const featuredCardsData: featuredCardProps[] = use(featuredCards);

    return (

        <div className="mt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeaturedWorkCard featuredCards={featuredCardsData} />
            <GalleryModal id="playground-images" bgColor="#95ddf5" title="Playground Images" titleColor="text-[#334b52]" >
                <p>This content exists only in the modal view.</p>
                {/* Add your gallery images or description here */}
            </GalleryModal>
            <GalleryModal id="testimonials" bgColor="#f7e99e" title="Testimonials" titleColor="text-[#524a24]" >
                <p>This content exists only in the modal view.</p>
                {/* Add your gallery images or description here */}
            </GalleryModal>
            <GalleryModal id="testimonial" bgColor="#F2EAE2" title="Testimonials" titleColor="text-[#45392e]" >
                <p>This content exists only in the modal view.</p>
                {/* Add your gallery images or description here */}
            </GalleryModal>
        </div>

    )
}


  