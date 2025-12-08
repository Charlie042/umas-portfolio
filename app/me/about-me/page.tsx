import FourPhase from "@/components/About-me/Four-phase";
import About from "@/components/About-me/about";
import ImageGallery from "@/components/About-me/components/image-gallery";
import { client } from "@/sanity/lib/client";
import { aboutMeContent } from "@/sanity/lib/queries";

const AboutMe = async () => {
  const data = await client.fetch(aboutMeContent);
  return (
    <section className="">
      <About aboutMe={data[0]?.paragraphs} />
      <ImageGallery />
      <FourPhase />
    </section>
  );
};

export default AboutMe;
