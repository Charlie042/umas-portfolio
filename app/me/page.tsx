import Hero from "@/components/Home/Hero";
import FeaturedWorks from "@/components/Home/featured-works";
import { NavigationBar } from "@/components/shared-components";
import { client } from "@/sanity/lib/client";
import { getFeaturedCards } from "@/sanity/lib/queries";

export default async function Home() {
  let featuredCard = [];

  try {
    featuredCard = await client.fetch(getFeaturedCards);
  } catch (error) {
    console.warn("Failed to fetch featured cards during build:", error);
    // Fallback to empty array during build failures
    featuredCard = [];
  }

  return (
    <section>
      <Hero />
      <FeaturedWorks featuredWork={featuredCard} />
    </section>
  );
}
