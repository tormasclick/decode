"use client";

import React from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-12 px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Are Saying</h2>
            <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-4">
                    <FaUserCircle className="text-5xl text-gray-500" />
                </div>
                <div className="text-left">
                    <p className="text-xl font-semibold italic">
                        <FaQuoteLeft className="inline-block mr-2" />
                        Decode Africa’s consultation service helped us navigate the complexities of entering the Nigerian market. Their expert advice was invaluable in securing our first major client.
                        <FaQuoteRight className="inline-block ml-2" />
                    </p>
                    <p className="mt-4 text-right font-bold italic">- John Mwangi, Founder of TechStart Africa</p>
                </div>
            </div>
            <Link href="#contact2" legacyBehavior>
                <a className="mt-8 px-6 py-3 bg-[#33ff00] text-black rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white inline-block">Contact Us for Your Success Story</a>
            </Link>
        </section>
    );
};

export default TestimonialsSection;
