import React from "react";
import { motion } from "framer-motion";

const Skills = ({ name, description, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark 
      cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
      xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      title={description} // Added hover title to show skill description
    >
      {name}
    </motion.div>
  );
};

const Skill = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]"
      >
        {/* Center item for Full-Stack Development */}
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
           dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.1 }}
        >
          Software Engineer
        </motion.div>

        {/* Programming Languages */}
        <Skills
          name="Python"
          x="-25vw"
          y="5vw"
          description="Used for data analysis, automation, and AI-based applications."
        />
        <Skills
          name="Java"
          x="-10vw"
          y="-10vw"
          description="Experience in backend development and enterprise applications."
        />
        <Skills
          name="JavaScript"
          x="22vw"
          y="6vw"
          description="Used for building interactive web applications (ReactJS, Next.js)."
        />

        {/* Frameworks & Libraries */}
        <Skills
          name="ReactJS"
          x="0vw"
          y="12vw"
          description="Built dynamic user interfaces and real-time applications."
        />
        <Skills
          name="NextJS"
          x="-22vw"
          y="-15vw"
          description="Built scalable web apps with server-side rendering."
        />
        <Skills
          name="Tailwind CSS"
          x="15vw"
          y="-12vw"
          description="Used to design modern, responsive web layouts."
        />

        {/* Databases */}
        <Skills
          name="MySQL"
          x="-30vw"
          y="18vw"
          description="Experience with relational databases for data storage and querying."
        />
        <Skills
          name="MongoDB"
          x="25vw"
          y="18vw"
          description="Experience with NoSQL databases for flexible schema design."
        />

        {/* Cloud Platforms */}
        <Skills
          name="AWS"
          x="10vw"
          y="-20vw"
          description="Deployed and managed cloud-based infrastructure and applications."
        />
        <Skills
          name="GCP"
          x="-35vw"
          y="12vw"
          description="Experience with Google Cloud services, certified in Cloud Engineering."
        />
      </div>
    </>
  );
};

export default Skill;
