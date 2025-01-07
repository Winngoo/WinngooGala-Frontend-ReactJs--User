import React, { useEffect, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import Container from "../../components/container/Container";
import EventBanner from "./EventBanner";
import EventCard from "./EventCard";
import bg1 from "../../assets/about/events.jpg";
import bg2 from "../../assets/about/food.jpg";
import bg3 from "../../assets/about/hobby.jpg";
import bg4 from "../../assets/about/nature.jpg";

import logo from "../../assets/logo/gala.png";
import { Link, useNavigate } from "react-router-dom";

// Sample static data for events with image URLs, date, and available seats
const mockEvents = [
  {
    _id: "1",
    title: "Birthday Celebration",
    category: "celebration",
    image: bg1,
    date: "2024-12-15",
    seats: 100,
  },
  {
    _id: "2",
    title: "Summer Festival",
    category: "festival",
    image: bg2,
    date: "2024-06-20",
    seats: 200,
  },
  {
    _id: "3",
    title: "Corporate Meeting",
    category: "business",
    image: bg3,
    date: "2024-03-10",
    seats: 50,
  },
  {
    _id: "4",
    title: "Tech Seminar",
    category: "seminar",
    image: bg4,
    date: "2024-04-25",
    seats: 150,
  },
  // Add more mock events with images as needed
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredEvents(mockEvents);
  }, []);

  const Celebration = mockEvents.filter(
    (item) => item.category === "celebration"
  );
  const Festival = mockEvents.filter((item) => item.category === "festival");
  const Business = mockEvents.filter((item) => item.category === "business");
  const Seminar = mockEvents.filter((item) => item.category === "seminar");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchResult = mockEvents.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(searchResult);
  };

  return (
    <div>
      <EventBanner />
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white pt-10 uppercase">
          All Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 md:my-20 gap-6">
          <div className="md:col-span-1">
            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="flex bg-gray-50 p-5 shadow-md rounded-md">
              <input
                type="text"
                name="search"
                placeholder="Search by name"
                className="w-full px-4 py-3 border rounded-3xl outline-none border-none bg-gray-200 text-black"
                onInput={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="bg-primary text-white py-3 px-8 rounded-3xl rounded-tl-none -ml-8 text-2xl font-bold">
                <FaSearch />
              </button>
            </form>

            {/* category */}
            <div className="bg-gray-50 shadow-md rounded-md mt-8">
              <div className="pt-6">
                <span className="bg-primary inline-flex gap-2 items-center text-white text-xl font-bold p-5 rounded-r-xl">
                  <TbCategory2 /> Category
                </span>
              </div>
              <div className="mt-3">
                <button
                  className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl border-b"
                  onClick={() => setFilteredEvents(mockEvents)}>
                  All
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl border-b"
                  onClick={() => setFilteredEvents(Celebration)}>
                  Celebration
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl border-b"
                  onClick={() => setFilteredEvents(Festival)}>
                  Festival
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl border-b"
                  onClick={() => setFilteredEvents(Business)}>
                  Business
                </button>
                <button
                  className="block w-full text-left p-5 hover:bg-secondary hover:text-white text-xl"
                  onClick={() => setFilteredEvents(Seminar)}>
                  Seminar
                </button>
              </div>
            </div>
          </div>

          {/* cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event._id} event={event}></EventCard>
            ))}
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
                    navigate("/");
                    window.scrollTo(0, 0);
                  }}
                  src={logo}
                  alt="Winngoo Gala Logo"
                  className="w-96 cursor-pointer" // Adjust size as per your logo's dimensions
                />
                <p className="text-sm leading-relaxed">
                  Join us to experience a night of networking, entertainment,
                  and recognition for outstanding achievements.
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
    </div>
  );
};

export default Events;
