import { use } from "react";
import type { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import FeaturedWorks from "@/components/Home/featured-works";
import { fetchFeaturedWorkData } from "@/components/apiAction";

export const metadata: Metadata = {
  title: "Umas Portfolio",
  description: "Umas Portfolio",
};

export default async function Home() {
  const featuredCards = use(fetchFeaturedWorkData());

  return (
    <section>
      <Hero />
      <FeaturedWorks featuredWork={featuredCards} />
    </section>
  );
}
