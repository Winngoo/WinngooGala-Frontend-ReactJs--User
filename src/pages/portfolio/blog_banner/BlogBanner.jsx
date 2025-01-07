import React from "react";
import backgroundImage from "../images/img1.png"; // Update the image path as needed

const BlogBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:h-[70vh] text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, height: `35.5vh` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center w-[80%] lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Winngoo Gala Blog
        </h1>
        <p className="lg:text-xl text-slate-100">
          Discover the latest trends, tips, and inspiration for your gala
          celebrations. From planning the perfect event to unique decoration
          ideas, our blog has everything you need to create unforgettable
          experiences.
        </p>
      </div>
    </div>
  );
};

export default BlogBanner;
