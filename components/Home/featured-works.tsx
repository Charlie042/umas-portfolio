import FeaturedCard from "./featured-card";
import { featuredWorksData } from "../shared-components/components/data";
const FeaturedWorks = () => {
  return (
    <section className="xl:mx-40 lg:mx-20 md:mx-10 sm:mx-5 min-h-lvw relative overflow-hidden">
      <h3 className="font-bricolage text-[#1E1E1E] text-3xl font-bold ">
        Featured Works
      </h3>
      <div className="flex">
        <p className=" text-xl text-[#696969] max-w-245 mt-5 font-medium">
          Here are some of my best works so far.
        </p>
      </div>
      <div className="my-20 flex flex-col gap-3 relative h-full isolate">
        <div className="flex flex-col gap-3">
          {featuredWorksData.map((item) => (
            <FeaturedCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
