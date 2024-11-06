// src/components/Footer.tsx

import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C324a] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4">
        {/* Left: Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-[#33ff00] transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-[#33ff00] transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="hover:text-[#33ff00] transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-[#33ff00] transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-[#33ff00] transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Center: Social Media Icons */}
        <div className="text-center">
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://linkedin.com/company/decodeafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#33ff00] transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/decodeafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#33ff00] transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com/decodeafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#33ff00] transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://facebook.com/decodeafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#33ff00] transition-colors"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Right: Contact Information */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:info@decodeafrica.com" className="hover:text-[#33ff00] transition-colors">info@decodeafrica.com</a></li>
            <li>Phone: <a href="tel:+123456789" className="hover:text-[#33ff00] transition-colors">+1 (234) 567-890</a></li>
            <li>Address: 123 Decode Street, Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      {/* Separator */}
      <hr className="my-6 border-white opacity-50" />

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 py-2">
        © {new Date().getFullYear()} Decode Africa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;