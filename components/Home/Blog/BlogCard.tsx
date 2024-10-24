import Image from "next/image";
import React from "react";
import "./BlogCard.css"

type Props = {
  blog: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
  };
};
const BlogCard = ({ blog }: Props) => {
  const { date, image, summary, title } = blog;
  return (
    <div className="custom-box">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="custom-image"
      />
      <div className="custom-padding">
        <p className="custom-badge">News</p>
        <h1 className="custom-heading">{title}</h1>
        <p className="custom-summary">{summary}</p>
        <div className="custom-divider">
          <div className="custom-flex-container ">
            <h1 className="custom-heading1">{date}</h1>
          <h1 className="custom-button">Read More</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
