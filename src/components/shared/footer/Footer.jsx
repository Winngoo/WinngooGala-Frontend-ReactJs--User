import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/gala.png";
import Container from "../../container/Container";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-1 py-8">
          <div className="flex justify-center mb-6">
            {/* Horizontal Links */}
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">
              <li onClick={scrollToTop}>
                <Link
                  to="/events"
                  className="text-gray-700 transition hover:text-gray-700/75">
                  Events
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link
                  to="/blog"
                  className="text-gray-700 transition hover:text-gray-700/75">
                  Blog
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link
                  to="/about"
                  className="text-gray-700 transition hover:text-gray-700/75">
                  About Us
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link
                  to="/contact"
                  className="text-gray-700 transition hover:text-gray-700/75">
                  Contact Us
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link
                  to="/pricing"
                  className="text-gray-700 transition hover:text-gray-700/75">
                  Pricing
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link
                  to="/login"
                  className="text-gray-700 transition hover:text-gray-700/75">
                  Login
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link
                  to="/register"
                  className="text-gray-700 transition hover:text-gray-700/75">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo Positioned Below Links */}
          <div className="flex justify-center text-blue-500 -mb-12">
            <img src={logo} alt="Logo" className="h-16" />
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 py-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">
                <Link
                  to="/"
                  className="text-gray-700 transition hover:text-gray-700/75 p-5">
                  Privacy Policy
                </Link>
              </span>{" "}
              <span className="block sm:inline">All rights reserved.</span>
            </p>
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              Made By Winngoo Consultancy © {new Date().getFullYear()} Winngoo
              Gala.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
