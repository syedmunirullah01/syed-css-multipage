import SectionHeading from "@/components/Helper/SectionHeading";
import { blogs } from "@/Data/data";
import React from "react";
import BlogCard from "./BlogCard";
import "./Blog.css"

const Blog = () => {
  return (
    <div className="custom-container">
      <SectionHeading>Our Blog</SectionHeading>
      <div className="custom-grid-container">
        {blogs.map((blog, i) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={blog.id}
            >
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
