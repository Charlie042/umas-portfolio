"use client";

import { usePathname } from "next/navigation";
import WhatIKnow from "@/components/About-me/what-i-know";

const ConditionalWhatIKnow = () => {
  const pathname = usePathname();
  const isAboutMe = pathname === "/about-me";

  return isAboutMe ? <WhatIKnow /> : null;
};

export default ConditionalWhatIKnow;
