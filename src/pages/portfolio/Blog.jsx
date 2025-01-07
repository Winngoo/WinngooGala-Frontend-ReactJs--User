import React from "react";
import Banner from "./blog_banner/BlogBanner";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/gala.png";
import Container from "../../components/container/Container";
import BlogComponent from "./BlogDocuments/BlogComponent";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Banner />
      <BlogComponent />
      {/*Footer*/}
      <Container>
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
                  Join us to experience a night of networking, entertainment,
                  and recognition for outstanding achievements.
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
    </div>
  );
};

export default Blog;
