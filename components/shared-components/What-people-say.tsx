import Card from "./components/card";
import { data } from "./components/data";
const WhatPeopleSay = () => {
  return (
    <section className="mx-40  my-10">
      <h2 className="font-bricolage text-[#1E1E1E] text-3xl font-bold text-center">What people that I’ve worked with had to say</h2>
      <div className="flex gap-10 my-10">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default WhatPeopleSay;
