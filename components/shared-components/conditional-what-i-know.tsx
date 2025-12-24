"use client";

import { usePathname } from "next/navigation";
import WhatIKnow from "@/components/About-me/what-i-know";

const ConditionalWhatIKnow = ({
  skillBadgeData,
}: {
  skillBadgeData: SkillBadgeProps[];
}) => {
  const pathname = usePathname();
  const isAboutMe = pathname === "/me/about-me";

  return isAboutMe ? <WhatIKnow skillBadgeData={skillBadgeData} /> : null;
};

export default ConditionalWhatIKnow;
