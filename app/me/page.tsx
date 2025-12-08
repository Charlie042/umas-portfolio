import Hero from "@/components/Home/Hero";
import FeaturedWorks from "@/components/Home/featured-works";
import { NavigationBar } from "@/components/shared-components";
import { client } from "@/sanity/lib/client";
import { getFeaturedCards } from "@/sanity/lib/queries";
export default async function Home() {
  const featuredCard = await client.fetch(getFeaturedCards);
  return (
    <section>
      <Hero />
      <FeaturedWorks featuredWork={featuredCard} />
    </section>
  );
}
