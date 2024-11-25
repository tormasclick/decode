"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQsSection: React.FC = () => {
    const [open, setOpen] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="py-12 px-4 text-center bg-[#2C324a] text-white">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto text-left space-y-4">
                <div className="border-b border-gray-700">
                    <h3 className="text-xl font-semibold mb-2 cursor-pointer flex items-center" onClick={() => toggleAccordion(1)}>
                        {open === 1 ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />} 
                        What types of businesses can benefit from your consultation services?
                    </h3>
                    {open === 1 && <p className="mb-4">Our services are designed for startups, small businesses, and established companies looking to grow or expand in African markets.</p>}
                </div>
                <div className="border-b border-gray-700">
                    <h3 className="text-xl font-semibold mb-2 cursor-pointer flex items-center" onClick={() => toggleAccordion(2)}>
                        {open === 2 ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />} 
                        Is the initial consultation free?
                    </h3>
                    {open === 2 && <p className="mb-4">Yes, the first session is free to help us understand your needs and provide tailored recommendations.</p>}
                </div>
                <div className="border-b border-gray-700">
                    <h3 className="text-xl font-semibold mb-2 cursor-pointer flex items-center" onClick={() => toggleAccordion(3)}>
                        {open === 3 ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />} 
                        How do I know if consultation is right for me?
                    </h3>
                    {open === 3 && <p className="mb-4">If you’re looking for expert advice, strategic support, or help navigating African business environments, our consultation services can provide the guidance you need.</p>}
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <Link href="#contact2" legacyBehavior>
                    <a className="px-6 py-3 bg-[#33ff00] text-black rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white border border-white hover:border-white">Still Have Questions? Contact Us</a>
                </Link>
            </div>
        </section>
    );
};

export default FAQsSection;
