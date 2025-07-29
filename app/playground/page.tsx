import { Spine } from "@/components/Home/featured-card";

  const Playground = () => {
  return (
    <section className="mx-40 my-20">
      <div className="flex flex-col gap-5">
        <h3 className="font-bricolage text-[#1E1E1E] text-3xl font-bold">
          My Playground
        </h3>
        <p className="font-sotashi text-xl text-[#696969] font-extralight">Just a bunch of things that i’ve worked on over time.</p>
      </div>
      <Spine />
    </section>
  );
};

export default Playground;