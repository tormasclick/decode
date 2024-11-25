"use client";

import React from 'react';
import Link from 'next/link';

const FAQsSection: React.FC = () => {
    return (
        <section className="py-12 px-4 text-center bg-gray-100">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto text-left">
                <h3 className="text-xl font-semibold mb-2">What types of businesses can benefit from your consultation services?</h3>
                <p className="mb-4">Our services are designed for startups, small businesses, and established companies looking to grow or expand in African markets.</p>
                <h3 className="text-xl font-semibold mb-2">Is the initial consultation free?</h3>
                <p className="mb-4">Yes, the first session is free to help us understand your needs and provide tailored recommendations.</p>
                <h3 className="text-xl font-semibold mb-2">How do I know if consultation is right for me?</h3>
                <p className="mb-4">If you’re looking for expert advice, strategic support, or help navigating African business environments, our consultation services can provide the guidance you need.</p>
                <Link href="/contact" className="mt-4 px-6 py-3 bg-[#33ff00] text-black rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white inline-block">Still Have Questions? Contact Us</Link>
            </div>
        </section>
    );
};

export default FAQsSection;
