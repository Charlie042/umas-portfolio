import AboutMeCard from "./components/About-me-card";

const FourPhase = () => {
  return (
    <div>
      <h3 className="font-bricolage text-[#1E1E1E] text-3xl font-bold ">
        My Four-Phase Design Process
      </h3>
      <div className="flex">
        <p className="font-sotashi text-xl text-[#696969] max-w-245 mt-5 ">
          After 3+ years of sketching interfaces, shipping apps, and
          (occasionally) designing doodles that never see the light of day, I’ve
          settled into a four-step rhythm that feels both human and focused.
          It’s flexible enough to bend around tight deadlines, but structured
          enough to keep us honest.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 my-20">
        <AboutMeCard
          title="Discover & Connect"
          description="I start by chatting with anyone who’ll talk, real users, support folks, stakeholders, even that one friend who “just pokes around apps.” I jot down frustrations, delights, and wild ideas. By the end of this phase, we have a clear problem statement and a handful of “aha” insights."
          className="bg-[#1E1E1E]"
          titleColor="text-[#FFFFFF]"
          descriptionColor="text-[#BDBDBD]"
        />
        <AboutMeCard
          title="Explore & Sketch"
          description="Next, I let ideas loose on paper or in Figma: rough flows, scribbled screens, and goofy side-by-side options. This is where I gather teammates for quick feedback (“Love that!” or “Hmm—what if we tried…?”). It’s messy, but it uncovers the gems worth polishing."
          className="bg-[#FFE66D]"
          titleColor="text-[#1E1E1E]"
          descriptionColor="text-[#363013]"
        />
        <AboutMeCard
          title="Prototype & Test"
          description="I turn the best sketches into clickable prototypes with just-enough UI and micro-interactions to feel real. Then I send them out, to five coworkers, five random friends, or five users, and watch where they hesitate. The biggest stumbles get fixed first."
          className="bg-[#F2EAE2]"
          titleColor="text-[#1E1E1E]"
          descriptionColor="text-[#352F2A]"
        />
        <AboutMeCard
          title="Launch & Learn"
          description="When it’s time to build, I hand off specs, assets, and any quirky notes, partner closely with dev during QA, and track post-release metrics (drop-off rates, engagement, support tickets). These real-world numbers feed back into the next cycle, because great design never really stops."
          className="bg-[#C8B6FF]"
          titleColor="text-[#1E1E1E]"
          descriptionColor="text-[#282338]"
        />
      </div>
      </div>
  );
};
export default FourPhase;