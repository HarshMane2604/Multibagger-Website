import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="backdrop-blur-md bg-white/30 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto w-full px-4 mt-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="text-2xl font-bold ">
            <img className="mr-3 h-12 rounded-md" src={logo} alt="logo" />
          </Link>
            
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="cursor-pointer hover:text-orange-500">Home</li>
                <li className="cursor-pointer hover:text-orange-500">Contact</li>
                <li className="cursor-pointer hover:text-orange-500">About us</li>
                <li className="cursor-pointer hover:text-orange-500">Services</li>
            </ul>
          <div className="flex items-center gap-4">
            {/* Sign In Button */}
            <button className="bg-[#055389] text-white px-4 py-2 rounded-lg font-bold">
              <div className="flex items-center gap-2">
                <span>Sign In</span>
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className="text-white text-lg"
                />
              </div>
            </button>

            {/* Subscribe Button */}
            <button className="bg-[#F25116] text-white px-4 py-2 rounded-lg font-bold">
              <div className="flex items-center gap-2 ">
                <span>Subscribe</span>
                <FontAwesomeIcon icon={faBell} className="text-white text-lg" />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
