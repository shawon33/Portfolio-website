import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

const Header2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" py-4  md:my-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-500 text-4xl font-bold">SHAWAN</div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="text-xl p-4 text-red-400  "
          >
            {isMobileMenuOpen ? (
              <h1 className="font-bold text-red-400">Close</h1>
            ) : (
              <FaBars className="text-black"> </FaBars>
            )}
          </button>
        </div>
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 md:mt-0 mt-4`}
        >
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  text-sm bg-slate-50 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm bg-slate-50 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm bg-slate-50 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm bg-slate-50 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white   rounded-md text-3xl  font-medium"
            >
              <FaLinkedin className=" bg-white text-cyan-700 rounded-md"></FaLinkedin>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header2;
