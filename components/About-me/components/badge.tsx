import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";
const Badge = ({ name, icon }: { name: string; icon: SanitySkillImage[] }) => {
  return (
    <div className="flex gap-3 items-center justify-center border px-5 py-5 rounded-lg border-[#D9D8D8] bg-[#F8F8F8] shadow-[5px_5px_0px_0px_#00000033] my-10">
      <Image
        src={urlFor(icon as SanityImageSource)
          .width(1000)
          .height(600)
          .url()}
        alt="icons"
        width={100}
        height={100}
        className="w-10 h-7"
      />
      <p className="text-2xl font-medium">{name}</p>
    </div>
  );
};
export default Badge;
