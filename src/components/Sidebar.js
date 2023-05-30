import React from "react";
import github from "../assets/icons/github.svg";
import photo1 from "../assets/photo1.png";
import { motion } from "framer-motion";

const Sidebar = () => {
  const sidebar_variants = {
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
      className="sidebar"
      variants={sidebar_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <img src={photo1} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">Shavkat Ortikov</div>
      <div className="sidebar__item sidebar__title">
        Frontend / SharePoint Developer
      </div>
      <div className="sidebar__item sidebar__email">
        Email: shavkatjon@msn.com
      </div>
      <div className="sidebar__item sidebar__github">
        <a
          href="https://github.com/Shavkats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" className="sidebar__icon mr-3" />
          Github
        </a>
      </div>
    </motion.div>
  );
};

export default Sidebar;
