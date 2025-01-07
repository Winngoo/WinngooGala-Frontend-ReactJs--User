import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/gala.png";
import TopBar from "./TopBar";
import { FiAlignJustify } from "react-icons/fi";
import { useCookies } from "react-cookie";
import { useGetFirstName, useGetLastName } from "../../customHook/customHook";
import GalaProfileDashboard from "../../../pages/dashboard/Home/ProfileDrop";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  const imgRef = useRef();
  const [cookies, setCookie] = useCookies(["access_token"]);

  const nav = useNavigate();

  // const fName = useGetFirstName();
  // const lName = useGetLastName();

  // const handleLogout = () => {
  //   setCookie("access_token", "");
  //   localStorage.clear();
  //   nav("/");
  // };

  // Add useEffect and ref for click outside handling
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setCollapse(false);
      }
    };

    // Close menu on navigation
    const handleNavigation = () => {
      setCollapse(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("popstate", handleNavigation);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  // Handle navigation and menu closing
  const handleNavClick = () => {
    setCollapse(false);
  };

  return (
    <>
      <div className="bg-primary">
        <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-transparent py-2 shadow-md shadow-black/5 md:flex-wrap lg:py-5">
          <div className="flex w-full items-center justify-between md:max-w-7xl md:px-12 mx-auto">
            <button
              onClick={() => setCollapse(!collapse)}
              className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
              type="button">
              <FiAlignJustify size={25} />
            </button>
            <div className="flex justify-center items-center">
              <Link
                className="flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                to="/">
                <img src={logo} className="w-24 md:w-36" alt=" Logo" />
              </Link>
            </div>
            <div
              ref={menuRef}
              className={`!visible ${
                collapse ? "block" : "hidden"
              } absolute md:static top-14 bg-white w-full md:w-auto border rounded-none lg:rounded-full shadow-xl md:border-none md:shadow-none items-center px-3 lg:!flex lg:basis-auto z-50`}>
              <ul className="max-w-screen-lg -ml-2.5 -mr-2.5 -m-1 flex mx-auto flex-col md:flex-row justify-center gap-5 py-4">
                <li>
                  <NavLink
                    to="/"
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-primary border-3.5 border-primary p-3  rounded-full w-10"
                        : "text-primary border-b-2 border-transparent hover:text-primary p-1"
                    }>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/events"
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-primary border-3.5 border-primary p-3 rounded-full"
                        : "text-primary border-b-2 border-transparent hover:text-primary p-1"
                    }>
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-primary border-3.5 border-primary p-3 rounded-full"
                        : "text-primary border-b-2 border-transparent hover:text-primary p-1"
                    }>
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-primary border-3.5 border-primary p-3 rounded-full"
                        : "text-primary border-b-2 border-transparent hover:text-primary p-1"
                    }>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-primary border-3.5 border-primary p-3 rounded-full"
                        : "text-primary border-b-2 border-transparent hover:text-primary p-1"
                    }>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white bg-primary border-3.5 border-primary p-3 rounded-full"
                        : "text-primary border-b-2 border-transparent hover:text-primary p-1"
                    }>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Right elements */}
            {cookies.access_token ? (
              <>
                {/* <div className="flex items-center gap-2">
                <h3>
                  {fName} {lName}
                </h3>
                <button onClick={handleLogout}>Logout</button>
              </div> */}

                <GalaProfileDashboard />
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <Link
                    to="/login"
                    type="button"
                    className="inline-block border-white border rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary/20 focus:bg-primary/30 focus:outline-none focus:ring-0 active:bg-primary/20"
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }>
                    Login
                  </Link>
                  {/* <Link
                  to="https://winngoogala.winngooconsultancy.in/members/login"
                  type="button"
                  className="inline-block rounded bg-primary/10 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary/90 transition duration-150 ease-in-out hover:bg-primary/20 focus:bg-primary/30 focus:outline-none focus:ring-0 active:bg-primary/20"
                  style={{
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}>
                  Login
                </Link> */}
                  <Link
                    to="/register"
                    type="button"
                    className="mr-3 inline-block rounded-full bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 hover:text-white  active:bg-primary/90"
                    style={{
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }>
                    Sign Up
                  </Link>
                  {/* <Link
                  to="https://winngoogala.winngooconsultancy.in/members/register"
                  type="button"
                  className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                  style={{
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}>
                  Sign Up
                </Link> */}
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
