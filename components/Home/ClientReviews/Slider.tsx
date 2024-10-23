"use client";
import { clientReviews } from "@/Data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Keep the original styles for carousel functionality
import ReviewCard from "./ReviewCard";
import "./Slider.css"; // Import the custom CSS

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  return (
    <div className="carousel-container">
      <Carousel
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        responsive={responsive}
      >
        {clientReviews.map((review) => (
          <div className="carousel-item" key={review.image}>
            <ReviewCard review={review} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
