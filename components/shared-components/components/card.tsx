import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

interface CardProps {
    description: string;
    name: string;
    job: string;
    image: string;
    bgColor: string;
    borderColor: string;
}

const Card = ({description, name, job, image, bgColor, borderColor}: CardProps) => {
  return (
    <div
      className={`${bgColor} ${borderColor} max-w-[281px] h-[360px] border rounded-xl px-3 py-5 flex flex-col justify-between`}
    >
      <div className="flex flex-col gap-4  ">
        <FaQuoteLeft className="w-7 h-7 text-[#DCDCDC]" />
        <p className="font-sotashi font-[510] text-[#1E1E1E] text-base">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-15 h-15"
        />
        <div>
          <p className="font-sotashi text-[#1E1E1E] font-bold">{name}</p>
          <p className="font-sotashi text-[#4F4F4F] font-normal">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;