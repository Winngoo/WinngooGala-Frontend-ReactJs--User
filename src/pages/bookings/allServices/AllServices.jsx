import React, { useEffect } from "react";
import {
  FaApple,
  FaCalendarAlt,
  FaEnvelope,
  FaGlassCheers,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaMoneyCheckAlt, // Ensure this is included
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/container/Container";
import { AiOutlineFieldTime } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCookies } from "react-cookie";

import event1 from "../../../assets/events/wedding.jpg";
import event2 from "../../../assets/events/birthday.jpg";
import event3 from "../../../assets/events/mehandi.jpg";
import event4 from "../../../assets/events/haldi.jpg";
import event5 from "../../../assets/events/photoshoot.jpg";
import event6 from "../../../assets/events/parties.jpg";
import event7 from "../../../assets/events/dinner.jpg";
import event8 from "../../../assets/events/get-together.jpg";

import logo from "../../../assets/logo/gala.png";

import movkup from "../../../assets/events/phone-mockup.png";

const AllServices = () => {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const nav = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Allow animations to trigger every time they come into view
    });

    // Refresh AOS when scrolling back to top
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePlanPersonal = () => {
    if (cookies.access_token) {
      nav("/create-your-event");
    } else {
      nav("/login");
    }
  };

  const events = [
    {
      title: "Anniversary",
      image: event1,
    },
    {
      title: "Birthday",
      image: event2,
    },
    {
      title: "Mehendi",
      image: event3,
    },
    {
      title: "Haldi",
      image: event4,
    },
  ];

  const additionalEvents = [
    {
      title: "Photoshoot",
      image: event5,
    },
    {
      title: "Parties",
      image: event6,
    },
    {
      title: "Dinner",
      image: event7,
    },
    {
      title: "Get-Together",
      image: event8,
    },
  ];

  return (
    <Container>
      <div>
        <h3 className="pt-28 mb-5 text-center uppercase text-white gap-5 text-xl  md:text-3xl font-sans">
          We create unforgettable experiences for every event
        </h3>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-24 m-3 lg:m-12">
          {/* Card 1 */}
          <section className="p-6 bg-gray-50 rounded-md">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
              Personal Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white overflow-hidden"
                  data-aos="fade-up">
                  <div className="relative h-60">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 text-white px-6 py-3 font-semibold flex items-center gap-3">
                      <AiOutlineFieldTime /> {event.title}
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-secondary font-medium mb-2">
                      <FaCalendarAlt className="inline text-primary mr-2" />
                      Set your Date
                    </p>
                    <p className="text-secondary font-medium mb-4">
                      <CiLocationOn className="inline text-primary mr-2" />
                      At Your Desired Location
                    </p>
                  </div>
                </div>
              ))}

              {/* Single Button */}
              <div className="col-span-full flex justify-center mt-6">
                <button
                  onClick={handlePlanPersonal}
                  className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-violet-300 shadow-lg font-medium rounded-lg text-lg px-10 py-3">
                  Plan Your Event
                </button>
              </div>
            </div>
          </section>
          {/* Card 1 End */}

          {/* Card 2 */}
          <section className="p-6 bg-gray-50 rounded-md">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
              Professional Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {additionalEvents.map((event, index) => (
                <div
                  key={index}
                  className="rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white overflow-hidden"
                  data-aos="fade-up">
                  <div className="relative h-60">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 text-white px-6 py-3 font-semibold flex items-center gap-3">
                      <AiOutlineFieldTime /> {event.title}
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-secondary font-medium mb-2">
                      <FaCalendarAlt className="inline text-primary mr-2" />
                      Set your Date
                    </p>
                    <p className="text-secondary font-medium mb-4">
                      <CiLocationOn className="inline text-primary mr-2" />
                      At Your Desired Location
                    </p>
                    {/* <button
                      onClick={handlePlanPersonal}
                      className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-violet-300 shadow-lg font-medium rounded-lg text-lg px-5 py-2.5">
                      Plan {event.title}
                    </button> */}
                  </div>
                </div>
              ))}
              <div className="col-span-full flex justify-center mt-6">
                <button
                  onClick={handlePlanPersonal}
                  className="text-white bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-violet-300 shadow-lg font-medium rounded-lg text-lg px-10 py-3">
                  Plan Your Event
                </button>
              </div>
            </div>
          </section>
          {/* Card 2 End */}
        </div>
      </div>
      {/* Grid Box */}
      <div>
        {/* Heading */}
        <h3
          className="pt-28 mb-8 text-center uppercase text-white text-xl md:text-3xl font-sans"
          data-aos="fade-down">
          Celebrate Without the Hassle
        </h3>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-3 lg:m-12">
          {/* Box 1 */}
          <section
            className="p-6 bg-gray-50 rounded-md shadow-md"
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="p-4 text-center">
              {/* Icon Placeholder */}
              <FaCalendarAlt className="inline text-primary mb-3 text-3xl" />
              <p className="text-primary font-bold mb-2 text-2xl font-sans">
                Register & Login
              </p>
              <p className="text-secondary text-sm">
                Get in touch to start planning your perfect event.
              </p>
            </div>
          </section>

          {/* Box 2 */}
          <section
            className="p-6 bg-gray-50 rounded-md shadow-md"
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="p-4 text-center">
              {/* Icon Placeholder */}
              <FaMoneyCheckAlt className="inline text-primary mb-3 text-3xl" />
              <p className="text-primary font-bold mb-2 text-2xl font-sans">
                Pick & Pay
              </p>
              <p className="text-secondary text-sm">
                Choose a plan that matches your needs and budget.
              </p>
            </div>
          </section>

          {/* Box 3 */}
          <section
            className="p-6 bg-gray-50 rounded-md shadow-md"
            data-aos="fade-up"
            data-aos-delay="300">
            <div className="p-4 text-center">
              {/* Icon Placeholder */}
              <FaEnvelope className="inline text-primary mb-3 text-3xl" />
              <p className="text-primary font-bold mb-2 text-2xl font-sans">
                Invite Your Guests
              </p>
              <p className="text-secondary text-sm">
                Send out personalized invitations effortlessly.
              </p>
            </div>
          </section>

          {/* Box 4 */}
          <section
            className="p-6 bg-gray-50 rounded-md shadow-md"
            data-aos="fade-up"
            data-aos-delay="400">
            <div className="p-4 text-center">
              {/* Icon Placeholder */}
              <FaGlassCheers className="inline text-primary mb-3 text-3xl" />
              <p className="text-primary font-bold mb-2 text-2xl font-sans">
                Celebrate
              </p>
              <p className="text-secondary text-sm">
                Enjoy your day while we handle every detail seamlessly.
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* Download Link */}
      <div>
        <h3
          className="pt-28 mb-8 text-center uppercase text-white text-xl md:text-3xl font-sans"
          data-aos="fade-down" // AOS effect for the heading
          data-aos-duration="1000" // Optional: Adds duration for the animation
        >
          Experience the Future - Download Our App Today
        </h3>

        <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-center gap-8 rounded-lg">
          {/* Left Side: Images */}
          <div
            className="flex justify-center lg:justify-start w-full lg:w-1/2"
            data-aos="fade-right" // Animation when the image appears
            data-aos-duration="1500">
            <img
              src={movkup}
              alt="Mobile Mockup 1"
              className="w-96 lg:w-full h-auto object-cover"
            />
          </div>

          {/* Right Side: Content */}
          <div
            className="max-w-lg bg-white bg-opacity-10 p-6 rounded-lg w-full lg:w-1/2"
            data-aos="fade-up" // Animation for the content section
            data-aos-duration="1500">
            <h1
              className="text-white text-4xl font-bold tracking-wider uppercase mb-4 text-center lg:text-left"
              data-aos="zoom-in" // Zoom-in effect for the heading
              data-aos-duration="1000">
              Download Now!
            </h1>
            <h2
              className="text-white text-2xl font-normal mb-6 text-center lg:text-left"
              data-aos="zoom-in-up" // Zoom-in-up effect for the subheading
              data-aos-duration="1200">
              Try our new app
            </h2>
            <p
              className="text-white text-sm mb-6 leading-relaxed text-center lg:text-left"
              data-aos="fade-up" // Fade-up effect for the paragraph
              data-aos-duration="1300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            {/* Store Buttons */}
            <div
              className="flex gap-4 justify-center lg:justify-start"
              data-aos="fade-up" // AOS fade-up for the button section
              data-aos-duration="1500">
              {/* Google Store */}
              <a
                href="#"
                className="flex items-center gap-2 justify-center w-44 py-3 text-white text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-700 rounded-lg hover:opacity-90 transition">
                <FaGooglePlay size={28} />
                Google Store
              </a>

              {/* Apple Store */}
              <a
                href="#"
                className="flex items-center gap-2 justify-center w-44 py-3 text-white text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-700 rounded-lg hover:opacity-90 transition">
                <FaApple size={28} />
                Apple Store
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*Footer*/}
      <div>
        <footer className="text-white pt-28 px-6">
          {/* Top Divider */}
          <div className="border-t border-white mb-14"></div>

          {/* Main Grid Container */}
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Winngoo Gala */}
            <div
              className="space-y-4"
              data-aos="fade-up"
              data-aos-duration="1000">
              <img
                onClick={() => {
                  nav("/");
                  window.scrollTo(0, 0);
                }}
                src={logo}
                alt="Winngoo Gala Logo"
                className="w-96 cursor-pointer" // Adjust size as per your logo's dimensions
              />
              <p className="text-sm leading-relaxed">
                Join us to experience a night of networking, entertainment, and
                recognition for outstanding achievements.
              </p>
            </div>

            {/* Quick Links */}
            <div
              className="space-y-4 lg:pl-20 lg:pt-16"
              data-aos="fade-up"
              data-aos-duration="1200">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/events" className="hover:text-gray-400">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-gray-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-gray-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Know About Us */}
            <div
              className="space-y-4 lg:pl-20 lg:pt-16"
              data-aos="fade-up"
              data-aos-duration="1400">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Know About Us
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div
              className="space-y-4 lg:pl-20 lg:pt-16"
              data-aos="fade-up"
              data-aos-duration="1600">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Contact
              </h3>
              <address className="not-italic text-sm leading-relaxed">
                Winngoo Consultancy Services <br />
                123 High Street <br />
                London, SW1A 1AA <br />
                United Kingdom
              </address>
            </div>

            {/* Get in Touch */}
            <div
              className="space-y-4 lg:pl-20 lg:pt-16"
              data-aos="fade-up"
              data-aos-duration="1800">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Get in Touch
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-gray-400">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaYoutube size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div
            className="pt-16 text-left text-sm text-white"
            data-aos="fade-up"
            data-aos-duration="2000">
            © 2024 Winngoo Consultancy Services. All Rights Reserved.
            Unauthorized use or duplication of this content is prohibited.
          </div>
        </footer>
      </div>
    </Container>
  );
};

export default AllServices;
