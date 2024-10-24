import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Project.css"; // Import the custom CSS

const Project = () => {
  return (
    <div className="project-container">
       <SectionHeading className="blog-heading">My Projects</SectionHeading>
      <div className="project-grid">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={project.id}
              className="project-card"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt="project"
                  width={300}
                  height={200}
                  className="project-image"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default Project;
