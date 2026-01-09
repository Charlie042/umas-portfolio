"use client"

import { Tabs, TabList, TabTrigger, TabContent } from "@/components/ui/tabs/tabs";
import { GalleryModal } from "../components/gallery"
import { FeaturedWorkEdit } from "./featuredWork-edit";
import { FeaturedWorkAdd } from "./featuredWorked-add";
import { featuredCardProps } from "@/components/Home/featured-card";


export function FeaturedWorkCard({ featuredCards }: { featuredCards: featuredCardProps[] }){
    return (
        <>
        <GalleryModal id="featured-works" bgColor="#ffa1a1" title="Featured Works" titleColor="text-[#4f2f2f]" >
               <div>
                <Tabs defaultValue="featured-works">
                    <TabList>
                        <TabTrigger value="featured-works">Edit</TabTrigger>
                        <TabTrigger value="featured-works-2">Add</TabTrigger>
                    </TabList>
                    <TabContent value="featured-works">
                        <FeaturedWorkEdit featuredCards={featuredCards} />
                    </TabContent>
                    <TabContent value="featured-works-2">
                        <FeaturedWorkAdd />
                    </TabContent>
                </Tabs>
               </div>
            </GalleryModal>
        </>
    )
}
