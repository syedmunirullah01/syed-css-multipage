import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import dynamic from "next/dynamic";
import "./ClientReviews.css"; // Import the custom CSS

// Dynamically import the Slider component with SSR disabled
const Slider = dynamic(() => import("./Slider"), { ssr: false });

const ClientReviews = () => {
  return (
    <div className="client-reviews-section">
      <SectionHeading>Client Reviews</SectionHeading>
      <div className="client-reviews-container">
        <Slider />
      </div>
    </div>
  );
};

export default ClientReviews;
