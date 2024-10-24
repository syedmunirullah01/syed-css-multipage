import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import "./Hero.css"; // Import the new CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-grid">
          {/* text content  */}
          <div>
            <h1 data-aos="fade-left" className="hero-title">
              I am {BaseInfo.name}
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="hero-subtitle text-bg"
            >
              {BaseInfo.position}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="hero-description"
            >
              {BaseInfo.description}
            </p>
          </div>

          {/* image content */}
          <div data-aos="zoom-in" data-aos-delay="400" className="hero-image">
            <Image
              src={BaseInfo.profilePic}
              alt="profilePic"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
