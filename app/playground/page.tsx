import { Playground1, Playground2, Playground3 } from "@/components/playground";
  const Playground = () => {
  return (
    <section className="mx-40 my-20">
      <div className="flex flex-col gap-5">
        <h3 className="font-bricolage text-[#1E1E1E] text-3xl font-bold">
          My Playground
        </h3>
        <p className="font-sotashi text-lg text-[#696969] font-normal">Just a bunch of things that i’ve worked on over time.</p>
      </div>
      <div className="flex flex-col gap-40 mt-20">
        <div>
          <Playground1 />
        </div>
        <div>
          <Playground2 />
        </div>
        <div>
          <Playground3 />
        </div>
      </div>
    </section>
  );
};

export default Playground;