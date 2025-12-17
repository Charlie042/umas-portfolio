import {
  NavigationBar,
  ConditionalWhatIKnow,
  WhatPeopleSay,
  Footer,
} from "@/components/shared-components";
import { fetchSkillBadgeData } from "@/components/apiAction";
import { use } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const skillBadgeData: SkillBadgeProps[] = use(fetchSkillBadgeData());

  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <NavigationBar />
        <main>{children}</main>
      </div>

      <footer className="h-screen isolate">
        <ConditionalWhatIKnow skillBadgeData={skillBadgeData} />
        <WhatPeopleSay />
        <Footer />
      </footer>
    </div>
  );
}
