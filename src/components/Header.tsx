"use client"; // Ensure this is a client component

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaInfoCircle, FaHandshake, FaUsers, FaBook,
  FaGlobe, FaCalendarAlt, FaEnvelope, FaBars, FaTimes
} from 'react-icons/fa';
import RegistrationForm from './RegistrationForm';
import { BiCompass } from "react-icons/bi"; // Import BiCompass icon

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on mobile when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) toggleMenu();
  };

  return (
    <>
      <header className="bg-[#ffffff] p-4 shadow fixed w-full z-50">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Decode Africa Logo"
              width={150}
              height={50}
              priority
            />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl text-black">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Right: Navigation Menu */}
          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:space-x-6 bg-white lg:bg-transparent absolute lg:relative top-0 lg:top-auto left-0 w-full lg:w-auto p-4 lg:p-0`}
          >
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
              <li className="flex items-center text-lg font-semibold text-[#2C324a] transition-colors duration-300 hover:text-[#33ff00]">
                <BiCompass className="mr-2" /> {/* Replace FaHome with BiCompass */}
                <Link href="/discover" onClick={handleLinkClick}>Discover</Link>
              </li>
              <li className="flex items-center text-lg font-semibold text-[#2C324a] transition-colors duration-300 hover:text-[#33ff00]">
                <FaHandshake className="mr-2" />
                <Link href="/consultation" onClick={handleLinkClick}>Consultation</Link>
              </li>
              <li className="flex items-center text-lg font-semibold text-[#2C324a] transition-colors duration-300 hover:text-[#33ff00]">
                <FaUsers className="mr-2" />
                <Link href="/social-connect" onClick={handleLinkClick}>Social Connect</Link>
              </li>
              <li className="flex items-center text-lg font-semibold text-[#2C324a] transition-colors duration-300 hover:text-[#33ff00]">
                <FaBook className="mr-2" />
                <Link href="/resources" onClick={handleLinkClick}>Resources</Link>
              </li>
              <li className="flex items-center text-lg font-semibold text-[#2C324a] transition-colors duration-300 hover:text-[#33ff00]">
                <FaGlobe className="mr-2" />
                <Link href="/impact" onClick={handleLinkClick}>Impact</Link>
              </li>
              <li className="flex items-center text-lg font-semibold text-[#2C324a] transition-colors duration-300 hover:text-[#33ff00]">
                <FaCalendarAlt className="mr-2" />
                <Link href="/events" onClick={handleLinkClick}>Events</Link>
              </li>
              <li className="flex items-center text-lg font-semibold text-[#2C324a] transition-colors duration-300 hover:text-[#33ff00]">
                <FaInfoCircle className="mr-2" />
                <Link href="/about" onClick={handleLinkClick}>About</Link>
              </li>
              <li className="flex items-center">
                <button
                  onClick={toggleModal}
                  className="bg-[#2C324a] text-white px-6 py-3 rounded-full transition-colors duration-300 hover:bg-[#33ff00] hover:text-black flex items-center"
                >
                  <FaEnvelope className="inline mr-2" />
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Modal for Signup */}
      {isModalOpen && (
        <RegistrationForm onClose={toggleModal} />
      )}
    </>
  );
};

export default Header;
