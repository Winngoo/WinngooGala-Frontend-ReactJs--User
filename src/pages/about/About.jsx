import bg from "../../assets/about/istockphoto-1137054887-2048x2048.jpg";
import img1 from "../../assets/about/events.jpg";
import img2 from "../../assets/about/food.jpg";
import img3 from "../../assets/about/hobby.jpg";
import img4 from "../../assets/about/nature.jpg";
import img5 from "../../assets/about/technology.jpg";
import OurStory from "./OurStory";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from "../../components/container/Container";
import logo from "../../assets/logo/gala.png";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img className="w-full h-60" src={bg} alt="Winngoo Gala Celebration" />
        <div className="-mt-[15vh] md:-mt-40 text-center">
          <h2 className="text-xl md:text-4xl">
            Welcome to Winngoo Gala Celebration
          </h2>
          <h3 className="text-xl md:text-3xl font-semibold text-primary font-serif">
            Where Dreams Come to Life
          </h3>
          <p className="uppercase text-center md:text-2xl">
            Crafting Unforgettable Experiences
          </p>
        </div>
      </div>
      <div className="p-3 space-y-7 mt-5 md:mt-20 md:max-w-6xl mx-auto">
        <h2 className="text-center text-3xl underline">Why Choose Us?</h2>

        {/* 1 - Originality */}
        <div className="md:flex gap-5">
          <div className="h-full w-full">
            <img
              className="h-[250px] w-[350px] object-cover"
              src={img5}
              alt="Originality"
            />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2">Original Ideas</h4>
            <p className="text-sm">
              At Winngoo Gala Celebration, we pride ourselves on our unique
              approach to event planning. Our innovative ideas and creative
              solutions ensure that your event is not only memorable but also
              distinctly original. We believe every event should tell a story,
              and we’re here to craft yours.
            </p>
          </div>
        </div>

        {/* 2 - Creativity */}
        <div className="md:flex flex-row-reverse gap-5">
          <div className="h-full w-full">
            <img
              className="h-[250px] w-[350px] object-cover"
              src={img4}
              alt="Creativity"
            />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2">Unleashing Creativity</h4>
            <p>
              Creativity is at the heart of what we do. From planning to
              execution, our team brings fresh perspectives to every aspect of
              your event. We strive to create an experience that captivates your
              audience and leaves a lasting impression.
            </p>
          </div>
        </div>

        {/* 3 - Meticulous Planning */}
        <div className="md:flex gap-5">
          <div className="h-full w-full">
            <img
              className="h-[250px] w-[350px] object-cover"
              src={img1}
              alt="Meticulous Planning"
            />
          </div>
          <div className="lg:-ml-32">
            <h4 className="text-2xl mb-2 mt-2">Meticulous Planning</h4>
            <p>
              Every detail matters. Our meticulous planning ensures that your
              event runs smoothly and efficiently. From logistics to design, we
              handle everything with precision, allowing you to enjoy the
              occasion without any worries.
            </p>
          </div>
        </div>

        {/* 4 - Comprehensive Event Services */}
        <div className="md:flex gap-5 flex-row-reverse justify-center">
          <div className="h-full w-full">
            <img
              className="h-[250px] w-[350px] object-cover"
              src={img2}
              alt="Event Services"
            />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2">Comprehensive Event Services</h4>
            <p>
              With years of experience in the industry, we offer a full spectrum
              of event services. From sponsorship and marketing to event
              merchandising, we ensure every aspect is managed expertly,
              resulting in a seamless and successful event.
            </p>
          </div>
        </div>

        {/* 5 - Client Satisfaction */}
        <div className="md:flex gap-5">
          <div className="h-full w-full">
            <img
              className="h-[250px] w-[350px] object-cover"
              src={img3}
              alt="Client Satisfaction"
            />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2">Client Satisfaction</h4>
            <p>
              Our ultimate goal is your satisfaction. We believe that happy
              clients are our best marketing. We listen to your needs,
              collaborate closely, and go the extra mile to exceed your
              expectations, ensuring your event is nothing short of spectacular.
            </p>
          </div>
        </div>
      </div>
      <OurStory />

      {/*Footer*/}
      <Container>
        <div>
          <footer className="text-white pt-12 px-6">
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
            <div className="pt-16 text-left text-sm text-white">
              © 2024 Winngoo Consultancy Services. All Rights Reserved.
              Unauthorized use or duplication of this content is prohibited.
            </div>
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default About;
