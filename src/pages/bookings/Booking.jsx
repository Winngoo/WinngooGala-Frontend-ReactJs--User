import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo/gala.png";
import Container from "../../components/container/Container";

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-100 dark:text-white">
              Celebrate with Winngoo Gala
            </h2>
            <p className="mb-5 font-light text-gray-400 sm:text-xl dark:text-gray-400">
              Experience the ultimate virtual celebration with interactive
              features, customizable themes, and seamless connectivity.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Basic Invite Plan */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Basic Invite</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Join the celebration and enjoy the core features.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">Free</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <span>Access to public celebrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>Interactive games and activities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>Basic chat and video options</span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Join the Party
              </a>
            </div>

            {/* Exclusive Host Plan */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Exclusive Host</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Host your personalized virtual celebration.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$49</span>
                <span className="text-gray-500 dark:text-gray-400">/event</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <span>Private celebration room</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>Custom themes and branding</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>Moderation tools</span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Host Now
              </a>
            </div>

            {/* VIP Celebration Plan */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">VIP Celebration</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Premium access for large-scale celebrations.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$199</span>
                <span className="text-gray-500 dark:text-gray-400">/event</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>Enhanced interaction features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>Unlimited participants</span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Celebrate Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <div>
        <footer className="text-white pt-12 px-6">
          {/* Top Divider */}
          <div className="border-t border-white mb-14"></div>

          {/* Main Grid Container */}
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Winngoo Gala */}
            <div className="space-y-4">
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
                Join us to experience a night of networking, entertainment, and
                recognition for outstanding achievements.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 lg:pl-20 lg:pt-16">
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
            <div className="space-y-4 lg:pl-20 lg:pt-16">
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
            <div className="space-y-4 lg:pl-20 lg:pt-16">
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
            <div className="space-y-4 lg:pl-20 lg:pt-16">
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
  );
};

export default Pricing;
