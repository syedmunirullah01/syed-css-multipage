import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.css"; // Import the custom CSS

const Skills = () => {
  return (
    <div className="skills-container">
      {" "}
      {/* Use custom class for container */}
      <SectionHeading>My Skills</SectionHeading>
      <div className="skills-heading">
        {" "}
        {/* Use custom class for the grid container */}
        {skillsData.map((skill, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
