import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
import { LuMailOpen, LuNavigation, LuPhoneCall } from "react-icons/lu";

const TopBar = () => {
  return (
    <div className="bg-primary py-2 overflow-hidden">
      <div className="flex justify-between max-w-7xl px-4 md:px-8 lg:px-12 mx-auto">
        <ul className="flex text-sm text-gray-200 gap-3">
          <li className="flex justify-center items-center gap-2">
            <LuMailOpen className="inline" />
            <a href="mailto:info@winngooconsultancy.in">
              info@winngooconsultancy.in
            </a>
          </li>
        </ul>
        <ul className="flex text-md text-gray-200 gap-3">
          <li>
            <a href="https://facebook.com">
              <FaFacebookF
                style={{
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </a>
          </li>

          <li>
            <a href="https://twitter.com">
              <FaSquareXTwitter
                style={{
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com">
              <FaLinkedinIn
                style={{
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <FaInstagram
                style={{
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
