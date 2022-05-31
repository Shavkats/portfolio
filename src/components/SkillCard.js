import React from "react";

const SkillCard = ({ skill: { name, icon } }) => {
  return (
    <div className="skillCard">
      <div className="skillCard__wrapper">
        <img src={icon} title={name} alt={name} className="skillCard__image" />
        <div className="skillCard__title">{name}</div>
      </div>
    </div>
  );
};

export default SkillCard;
