import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
interface CardProps {
    description: string;
    name: string;
    job: string;
    image: string;
    bgColor: string;
    borderColor: string;
}

const Card = ({description, name, job, image, bgColor, borderColor}: CardProps) => {
console.log(bgColor, borderColor)
  return (
    
      <div className={cn("max-w-[281px] h-[360px] border rounded-xl px-3 py-5 flex flex-col justify-between", bgColor, borderColor)}>
      <div className="flex flex-col gap-4  ">
        <FaQuoteLeft className="w-7 h-7 text-[#DCDCDC]" />
        <p className="font-sotashi font-medium text-[#1E1E1E] text-base">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={urlFor(image).width(100).height(100).url()}
          alt={name}
          width={100}
          height={100}
          priority
          className="w-15 h-15  rounded-full"
        />
        <div>
          <p className="font-sotashi text-[#1E1E1E] font-semibold">{name}</p>
          <p className="font-sotashi text-[#4F4F4F] font-normal">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;