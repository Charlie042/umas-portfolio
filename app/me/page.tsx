import { use } from "react";
import Hero from "@/components/Home/Hero";
import FeaturedWorks from "@/components/Home/featured-works";
import { NavigationBar } from "@/components/shared-components";
import { client } from "@/sanity/lib/client";
import { getFeaturedCards } from "@/sanity/lib/queries";
import { fetchFeaturedWorkData } from "@/components/apiAction";

export default  function Home() {
  const featuredCards = use(fetchFeaturedWorkData());

  

  return (
    <section>
      <Hero />
      <FeaturedWorks featuredWork={featuredCards} />
    </section>
  );
}
