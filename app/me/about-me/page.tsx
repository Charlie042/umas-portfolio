import type { Metadata } from "next";
import FourPhase from "@/components/About-me/Four-phase";
import About from "@/components/About-me/about";
import ImageGallery from "@/components/About-me/components/image-gallery";
import { use } from "react";
import { fetchAboutMeData } from "@/components/apiAction";

const AboutMe = () => {
  const data = use(fetchAboutMeData());

  return (
    <section className="">
      <About aboutMe={data[0]?.paragraphs} />
      <ImageGallery />
      <FourPhase />
    </section>
  );
};

export default AboutMe;

export const metadata: Metadata = {
  title: "Umas About Me",
  description: "Umas About Me",
};
