"use client"
import { motion } from "motion/react";
const About = () => {
  return (
    <div className="mx-5 md:mx-20 lg:mx-40 xl:mx-70 my-20 text-center font-sotashi  text-sm md:text-lg lg:text-xl flex flex-col gap-5">
      <motion.p initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}}>
        I’ve always been that kid who jumps into everything, product design,
        sewing, a little writing… even tried web dev once (lol, don’t ask 😭).
        Most of it stayed at surface level until a friend recommended me for a
        social media manager role at a design school. Suddenly, I was helping
        promote a course in something I’d always had an interest in (product
        design).{" "}
      </motion.p>
      <motion.p initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}}>
        Week after week, I heard student success stories, graduates landing jobs
        within six months of learning product design, with solid salaries to
        match.
      </motion.p>
      <motion.p initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}}>
        That got me thinking: “Why not me?” I quit, dove headfirst into product
        design, and this time, because I already had some basic knowledge, I was
        less focused on just making things look nice, I cared more about solving
        real problems in the simplest way possible.
      </motion.p>
      <motion.p initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}}>
        Since then, I’ve completed a nine-month internship (won Product Design
        Student of the Year!), collaborated on team projects, and taken solo
        ideas from sketch to prototype. Each one taught me more about empathy,
        clarity, and keeping things simple.
      </motion.p>
      <motion.p initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}}>
        When I’m not wireframing or polishing micro-interactions, I’m nose-deep
        in a novel or binge-watching a series to reboot my brain. And I’ll never
        say no to a good chat, hearing people’s stories is my secret to
        designing with heart.
      </motion.p>
    </div>
  );
};
export default About;