import React from "react";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";
import competencies from "./data/competencies_data.js";

const About = () => {
  const about_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="about"
      variants={about_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="about__intro">
        Highly skilled developer with experience developing, implementing, and
        maintaining Web frontend and SharePoint solutions, responsive, reusable
        and modular user interface components with JavaScript, Vue, HTML, CSS/SCSS, and a wide range of other frontend technologies, tools and services.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">Competencies</h6>
        <div className="row">
          {competencies.map((competency) => (
            <AboutCard key={competency.title} competency={competency} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
