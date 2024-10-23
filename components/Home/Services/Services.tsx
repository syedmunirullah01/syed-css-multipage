import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/Data/data";
import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css"; // Import the custom CSS

const Services = () => {
  return (
    <div className="services-container">
      {" "}
      {/* Use custom class here */}
      <SectionHeading>Services</SectionHeading>
      <div className="services-grid">
        {" "}
        {/* Use custom class for grid */}
        {servicesData.map((service, i) => {
          return (
            <div
              key={service.id}
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
            >
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
