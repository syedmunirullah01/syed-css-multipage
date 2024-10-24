import Image from "next/image";
import React from "react";
import "./SkillCard.css"; 
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, percent, title } = skill;

  return (
    <div className="skill-card">
      {" "}
    
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="skill-card__image"
      />
      <h1 className="skill-card__title">{title}</h1>{" "}
      
      <div className="skill-card__percent">{percent}</div>{" "}
     
    </div>
  );
};

export default SkillCard;
