"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import "./ServiceCard.css"; // Import the custom CSS

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="service-card">
      {" "}
      {/* Use custom class here */}
      <Image
        src={`${service.icon}`}
        alt={service.title}
        width={50}
        height={50}
      />
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
