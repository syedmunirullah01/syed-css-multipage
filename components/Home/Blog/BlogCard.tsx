import Image from "next/image";
import React from "react";
import "./BlogCard.css"; // Import the custom CSS

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
    <div className="blog-card">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="blog-image"
      />
      <div className="p-6">
        <p className="blog-label">News</p>
        <h1 className="blog-title">{title}</h1>
        <p className="blog-summary">{summary}</p>
        <div className="blog-divider">
          <div className="blog-footer">
            <h1 className="blog-date">{date}</h1>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
