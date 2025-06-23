import FourPhase from "@/components/About-me/Four-phase";
import About from "@/components/About-me/about";
import WhatIKnow from "@/components/About-me/what-i-know";

const AboutMe = () => {
  return (
    <section className="xl:mx-40 lg:mx-20 mx-5">
      <About />
      <FourPhase />
      <WhatIKnow/>
    </section>
  );
};

export default AboutMe;