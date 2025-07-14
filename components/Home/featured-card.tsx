import Image from "next/image";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { IoMdArrowForward } from "react-icons/io";
import { StaticImageData } from "next/image";


export interface featuredCardProps {
  id: number;
  bgColor: string;  
  badgeColor: string
  badgeYear: string;
  badgeTitle: string;
  cardTitle: string;
  description: string;
  cardImage: string | StaticImageData;
  percentSixty: string;
  percentForty: string;
  textColor?: string;
  titleColor?: string;
  percent1: string;
  percent2: string;
}
const FeaturedCard = ({
  id,
  bgColor,  
  badgeColor,
  badgeYear,
  badgeTitle,
  cardImage,
  cardTitle,
  description,
  percentForty,
  percentSixty,
  percent1,
  percent2,
  textColor,
  titleColor,
}: featuredCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 max-w-[1160px] min-h-[900px]",
        bgColor,
        textColor
      )}
    >
      <div className="my-10 space-y-5 max-w-[1090px] w-full mx-auto">
        <div className="flex justify-between item-center">
          <Badge
            className={cn(
              "flex justify-center rounded-full text-base px-5 py-1",
              badgeColor
            )}
          >
            {badgeYear}
          </Badge>
          <Badge className={cn("flex justify-center rounded-full text-base px-5 py-1", badgeColor)}>
            {badgeTitle}
          </Badge>
        </div>
        <div className="flex justify-between item-center">
          <div className="max-w-[918px] w-full space-y-5">
            <h1 className={cn(titleColor, "text-4xl font-bold font-bricolage")}>{cardTitle}</h1>
            <p className="text-base font-medium ">{description}</p>
          </div>
          <IoMdArrowForward className="text-7xl" />
        </div>
        <div className="flex justify-between gap-10 max-w-[725px] w-full ">
          <div className="flex flex-col gap-3">
            <p className={cn(titleColor,"text-2xl font-bold")}>{percent1}</p>
            <p className="text-base font-medium">{percentSixty}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className={cn(titleColor,"text-2xl font-bold")}>{percent2}</p>
            <p className="text-base font-medium">{percentForty}</p>
          </div>
        </div>
        <div className="max-w-[1089px] min-h-[400px] rounded-lg mx-auto my-10 w-full">
          <Image
            src={cardImage}
            alt="Featured work"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
