import Image from "next/image";
import React from "react";
import "./SkillCard.css"; // Import the custom CSS

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
      {/* Use custom class for the main container */}
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="skill-card__image"
      />
      <h1 className="skill-card__title">{title}</h1>{" "}
      {/* Use custom class for title */}
      <div className="skill-card__percent">{percent}</div>{" "}
      {/* Use custom class for percent */}
    </div>
  );
};

export default SkillCard;
