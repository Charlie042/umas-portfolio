import { NavigationBar, ConditionalWhatIKnow, WhatPeopleSay,Footer } from "@/components/shared-components";
import { TESTIMONIALS } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";

export default async function MainLayout({children}: Readonly<{
  children: React.ReactNode;
}>){

  const testimonials = await client.fetch(TESTIMONIALS);

    return (
        <div>
         <div className="max-w-[1200px] mx-auto">
          <NavigationBar />
          <main>{children}</main>
        </div>

        <footer className="h-screen isolate">
          <ConditionalWhatIKnow />
          <WhatPeopleSay data={testimonials}/>
          <Footer />
        </footer>
        </div>
    )
}