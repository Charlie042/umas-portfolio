import Hero from "@/components/Home/Hero";
import FeaturedWorks from "@/components/Home/featured-works";
import { NavigationBar } from "@/components/shared-components";
import { client } from "@/sanity/lib/client";
import { FEATURE_CARD } from "@/sanity/lib/query";

export default async function Home() {

  const featuredCards = await client.fetch(FEATURE_CARD);

  const user = await featuredCards;


  return (
    <section>
    <Hero/>
    <FeaturedWorks featuredCard={user}/>
    </section>
  );
}
