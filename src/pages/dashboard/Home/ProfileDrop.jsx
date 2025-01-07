import React, { useState, useEffect, useRef } from "react";
import {
  useGetFirstName,
  useGetLastName,
} from "../../../components/customHook/customHook";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useLocation } from "react-router-dom";
import bg from "../../../assets/logo/Untitled-7-1024.webp";

const ProfileDropdown = () => {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const nav = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const fName = useGetFirstName();
  const lName = useGetLastName();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle logout
  const handleLogout = () => {
    setCookie("access_token", "");
    localStorage.clear();
    nav("/");
  };

  return (
    <div
      className="relative inline-block text-left mr-10 md:mr-0"
      ref={dropdownRef}>
      {/* Profile Icon */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-full bg-gray-800 p-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-expanded={isOpen}
        aria-haspopup="true">
        <img
          src={bg || "path/to/default/image.webp"}
          alt="Profile"
          className="rounded-full h-8 w-8"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 origin-top-right z-50">
          <div className="py-1">
            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <span className="inline-block align-middle mr-1">👋</span>
              <span className="inline-block align-middle overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-2rem)]">
                {fName && lName ? `Hello, ${fName} ${lName}` : "Hello, Guest"}
              </span>
            </div>
            {!location.pathname.includes("/dashboard") ? (
              <Link
                to="/dashboard"
                className="block w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none cursor-pointer">
                Dashboard
              </Link>
            ) : (
              <Link
                to="/settings"
                className="block w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none cursor-pointer">
                Settings
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none cursor-pointer">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
