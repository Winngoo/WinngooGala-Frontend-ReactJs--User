import React from "react";
import { Link } from "react-router-dom";
import { IoPlayOutline } from "react-icons/io5";

const EventBanner = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-[30vh] sm:h-[50vh] md:h-[30vh] lg:h-[30vh]"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/tech-innovation-unveiling-event-dynamic-presentation-highenergy-atmosphere-product-launch_416256-82635.jpg?w=900')`,
      }}
    >
      {/* Overlay with text */}
      <div className="bg-black bg-opacity-70 h-full flex items-center">
        <div className="px-4 sm:px-8 lg:px-20">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Events
          </h2>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mt-3 text-sm sm:text-lg md:text-xl font-medium text-primary">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <IoPlayOutline className="text-red-500" />
            <Link to="/events" className="text-white hover:underline">
              Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
