import { cn } from "@/lib/utils";

const AboutMeCard = ({title,description, className,titleColor, descriptionColor}:{title:string,description:string, className:string,titleColor: string, descriptionColor: string}) => {
  return (
    <div className={cn("flex flex-col gap-5 px-10 py-7 rounded-2xl", className)}>
      <h3 className={cn("font-bricolage text-xl font-semibold", titleColor)}>{title}</h3>
      <p className={cn("font-sotashi text-base", descriptionColor)}>{description}</p>
    </div>
  );
};
export default AboutMeCard;