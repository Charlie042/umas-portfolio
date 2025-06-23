import FourPhase from "@/components/About-me/Four-phase";
import About from "@/components/About-me/about";
import WhatIKnow from "@/components/About-me/what-i-know";

const AboutMe = () => {
  return (
    <section className="mx-40">
      <About />
      <FourPhase />
      <WhatIKnow/>
    </section>
  );
};

export default AboutMe;