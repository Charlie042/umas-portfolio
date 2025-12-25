import { featuredCardProps } from "@/components/Home/featured-card";
import { cn } from "@/lib/utils";
import { IoIosArrowForward } from "react-icons/io";

export function FeaturedWorkEdit({ featuredCards }: { featuredCards: featuredCardProps[] }){

    return (
        <div className="flex flex-wrap gap-5">
            {featuredCards.map((card, idx) => (
                <div  key={idx} className={cn("flex flex-wrap border p-4 mt-5 w-70 rounded-xl cursor-pointer items-center justify-between group ", card.bgColor)}>
                    <h1 className={cn("text-md font-bold ", card.titleColor)}>Edit {card.shapeName}</h1>
                    <IoIosArrowForward className={cn("text-2xl ml-auto group-hover:translate-x-2 transition-all duration-300", card.textColor)} />
                </div>
            ))}
        </div>
    )
}