import FourPhase from "@/components/About-me/Four-phase";
import About from "@/components/About-me/about";
import ImageGallery from "@/components/About-me/components/image-gallery";

const AboutMe = () => {
  return (
    <section className="">
      <About />
      <ImageGallery />
      <FourPhase />
    </section>
  );
};

export default AboutMe;