import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import "./About.css"; 
const About = () => {
  return (
    <div id="aboutContainer">
      <SectionHeading>About Me</SectionHeading>
      <div id="aboutGridContainer">
        <div>
          <h1
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            id="aboutTitle"
          >
            {aboutInfo.title}
          </h1>
          <p id="aboutDescription">{aboutInfo.description}</p>
          <div id="skillContainer">
            <div className="skill">
              <div className="skillBox skillBoxBlue">
                <FaCheck className="text-white" />
              </div>
              <p className="skillText">Frontend Developer</p>
            </div>
            <div className="skill">
              <div className="skillBox skillBoxOrange">
                <FaCheck className="text-white" />
              </div>
              <p className="skillText">Backend Developer</p>
            </div>
            <div className="skill">
              <div className="skillBox skillBoxGreen">
                <FaCheck className="text-white" />
              </div>
              <p className="skillText">Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          id="statisticsContainer"
        >
          <div id="statistic">
            <Image
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="statisticImage"
            />
            <p className="statisticText">{aboutInfo.client}</p>
            <p className="statisticSubText responsiveText">
              Satisfied Customers
            </p>
          </div>
          <div id="statistic">
            <Image
              src="/images/experience.png"
              alt="image"
              width={80}
              height={80}
              className="statisticImage"
            />
            <p className="statisticText">{aboutInfo.experience}</p>
            <p className="statisticSubText responsiveText">Years Experienced</p>
          </div>
          <div id="statistic">
            <Image
              src="/images/completed.png"
              alt="image"
              width={80}
              height={80}
              className="statisticImage"
            />
            <p className="statisticText">{aboutInfo.project}</p>
            <p className="statisticSubText responsiveText">Completed Project</p>
          </div>
          <div id="statistic">
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="statisticImage"
            />
            <p className="statisticText">{aboutInfo.website}</p>
            <p className="statisticSubText responsiveText">Website Launched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
