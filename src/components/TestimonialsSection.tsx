"use client";

import React from 'react';
import Link from 'next/link';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-12 px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Are Saying</h2>
            <div className="max-w-3xl mx-auto">
                <p className="mb-6">"Decode Africa’s consultation service helped us navigate the complexities of entering the Nigerian market. Their expert advice was invaluable in securing our first major client." - John Mwangi, Founder of TechStart Africa</p>
                <Link href="/testimonials" className="mt-4 px-6 py-3 bg-[#33ff00] text-black rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white inline-block">Read More Success Stories</Link>
            </div>
        </section>
    );
};

export default TestimonialsSection;
