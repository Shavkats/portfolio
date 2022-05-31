import React, { useState } from "react";
import data_skills from "./data/skills_data";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState(data_skills);
  const [active, setActive] = useState("All");

  const handleFilterCategory = (name) => {
    const new_array = data_skills.filter((skills) =>
      skills.category.includes(name)
    );
    setSkills(new_array);
    setActive(name);
  };

  const project_variants = {
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
      className="container skills"
      variants={project_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="skills__navbar">
        <div
          className={active === "All" ? "skills__navbar-active" : ""}
          onClick={() => {
            setSkills(data_skills);
            setActive("All");
          }}
        >
          All
        </div>
        <div
          className={active === "frontend" ? "skills__navbar-active" : ""}
          onClick={() => handleFilterCategory("frontend")}
        >
          Frontend
        </div>
        <div
          className={active === "backend" ? "skills__navbar-active" : ""}
          onClick={() => handleFilterCategory("backend")}
        >
          Backend
        </div>
        <div
          className={active === "languages" ? "skills__navbar-active" : ""}
          onClick={() => handleFilterCategory("languages")}
        >
          Languages
        </div>
        <div
          className={active === "tools" ? "skills__navbar-active" : ""}
          onClick={() => handleFilterCategory("tools")}
        >
          Tools
        </div>
      </div>
      <div className="row">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
