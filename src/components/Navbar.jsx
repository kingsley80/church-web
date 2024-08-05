import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/ch.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 py-4 sm:py-0 border-neutral-700/80"

        // sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to="/">
                <img src={Logo} alt="" className="w-10" />
              </Link>
              <Link to="/">
                <span>ONTOGOD</span>
              </Link>
            </div>
            <div className=" hidden sm:block">
              <ul className="flex items-center font-medium gap-6 text-xl py-4">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="sign">Sign Up</Link>
                </li>
                <li>
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed ml-10 z-20 bg-slate-100 shadow-2xl w-96 rounded-xl p-16 flex flex-col justify-center lg:hidden">
              <ul className="font-bold">
                <li className="mb-3 text-xl">
                  <Link to="login">Login</Link>
                </li>
                <li className="mb-3 text-xl">
                  <Link to="sign">Sign Up</Link>
                </li>
                <li className="text-xl">
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
