import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/container/Container";
import organizer from "../../../assets/Organizer/organizer.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const Organizer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Set to false to trigger on every scroll
    });

    // Refresh AOS on component updates or scroll events to ensure animations reset
    window.addEventListener("scroll", AOS.refresh);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  return (
    <div className="bg-gray-200 py-16">
      <Container>
        <div className="flex flex-col md:flex-row md:gap-10 items-center">
          <div className="flex-1" data-aos="fade-right">
            <img className="rounded-md" src={organizer} alt="" />
          </div>
          <div
            className="flex-1 bg-white md:-ml-20 p-12 rounded-md"
            data-aos="fade-up">
            <h2 className="text-2xl text-dark_01 md:text-3xl font-semibold">
              Make your event unforgettable with Winngoo Gala :
            </h2>
            <p className="text-secondary my-4 text-justify">
              Interested in hosting a stunning Winngoo gala with us? Let’s
              discuss your event needs and collaborations.
            </p>
            <Link to="request-organizer">
              <button className="bg-primary px-6 py-3 rounded-md text-white uppercase">
                Request Us
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Organizer;
