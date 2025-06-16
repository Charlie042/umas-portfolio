const AboutMeCard = ({title,description, className,titleColor, descriptionColor}:{title:string,description:string, className:string,titleColor: string, descriptionColor: string}) => {
  return (
    <div className={`flex flex-col gap-5 ${className} px-10 py-7 rounded-2xl`}>
      <h3 className={`font-bricolage text-xl font-semibold ${titleColor}`}>{title}</h3>
      <p className={`font-sotashi text-base ${descriptionColor}`}>{description}</p>
    </div>
  );
};
export default AboutMeCard;