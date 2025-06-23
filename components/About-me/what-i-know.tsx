"use client";
import Badge from "./components/badge";
import { badgeData } from "../shared-components/components/data";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useRef } from "react";

const WhatIKnow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      AutoScroll({
        stopOnMouseEnter: false,
        playOnInit: true,
      }),
    ]
  );

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!emblaApi || !containerRef.current) return;

    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return;

    const handleMouseEnter = () => autoScroll.stop();
    const handleMouseLeave = () => autoScroll.play();

    const node = containerRef.current;
    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [emblaApi]);

  return (
    <section className="my-10">
      <h2 className="font-bricolage text-[#1E1E1E] text-3xl font-bold text-center">
        What I know how to do best
      </h2>

      <div
        className="embla mt-10 max-w-300 mx-auto relative"
        ref={containerRef}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10 hidden md:block" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10 hidden md:block" />
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-20">
            {badgeData.map((item) => (
              <div key={item.id} className="embla__slide flex-[0_0_auto] px-4">
                <Badge name={item.name} icon={item.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIKnow;
