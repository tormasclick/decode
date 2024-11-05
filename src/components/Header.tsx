"use client"; // Ensure this is a client component

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaHome, FaInfoCircle, FaHandshake, FaUsers, FaBook,
  FaGlobe, FaCalendarAlt, FaEnvelope, FaBars, FaTimes
} from 'react-icons/fa';
import RegistrationForm from './RegistrationForm';

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-white p-4 shadow fixed w-full z-50">
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
            <button onClick={toggleMenu} className="text-2xl">
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
              <li className="flex items-center text-lg font-semibold transition-colors duration-300 hover:text-[#33ff00]">
                <FaHome className="mr-2" />
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center text-lg font-semibold transition-colors duration-300 hover:text-[#33ff00]">
                <FaInfoCircle className="mr-2" />
                <Link href="/about">About</Link>
              </li>
              <li className="flex items-center text-lg font-semibold transition-colors duration-300 hover:text-[#33ff00]">
                <FaHandshake className="mr-2" />
                <Link href="/consultation">Consultation</Link>
              </li>
              <li className="flex items-center text-lg font-semibold transition-colors duration-300 hover:text-[#33ff00]">
                <FaUsers className="mr-2" />
                <Link href="/social-connect">Social Connect</Link>
              </li>
              <li className="flex items-center text-lg font-semibold transition-colors duration-300 hover:text-[#33ff00]">
                <FaBook className="mr-2" />
                <Link href="/resources">Resources</Link>
              </li>
              <li className="flex items-center text-lg font-semibold transition-colors duration-300 hover:text-[#33ff00]">
                <FaGlobe className="mr-2" />
                <Link href="/impact">Impact</Link>
              </li>
              <li className="flex items-center text-lg font-semibold transition-colors duration-300 hover:text-[#33ff00]">
                <FaCalendarAlt className="mr-2" />
                <Link href="/events">Events</Link>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <RegistrationForm /> {/* Use the existing RegistrationForm component */}
            <button
              onClick={toggleModal}
              className="mt-4 bg-gray-300 text-black font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;