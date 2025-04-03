import React from "react";
import { Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#055389] text-white py-6 mt-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-2xl font-bold">Spt Advisor</h2>
            <p className="mt-2 text-gray-300">
              Your trusted partner in stock investment strategies.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><NavLink to="/" className="hover:text-orange-400">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-orange-400">About Us</NavLink></li>
              <li><NavLink to="/services" className="hover:text-orange-400">Services</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-orange-400">Contact</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Social Media */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} /> +91 98765 43210
            </p>
            <p className="mt-1 flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} /> support@sptadvisor.com
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-orange-400">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-orange-400">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-orange-400">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-orange-400">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 border-t border-gray-500 pt-4 text-gray-300">
          &copy; {new Date().getFullYear()} Spt Advisor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
