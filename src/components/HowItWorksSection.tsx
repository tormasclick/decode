"use client";

import React from 'react';
import Link from 'next/link';

const HowItWorksSection: React.FC = () => {
    return (
        <section className="py-12 px-4 text-center bg-gray-100">
            <h2 className="text-3xl font-bold mb-8">How Our Consultation Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Step 1: Submit Your Inquiry</h3>
                    <p className="text-lg">Fill out our simple consultation request form, detailing your business needs.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Step 2: Schedule a Call</h3>
                    <p className="text-lg">Choose a convenient time for a free initial consultation with one of our experts.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Step 3: Personalized Strategy Session</h3>
                    <p className="text-lg">During the call, we’ll discuss your goals and provide actionable recommendations.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Step 4: Follow-Up Support</h3>
                    <p className="text-lg">Receive a detailed plan and ongoing support to help you implement our strategies.</p>
                </div>
            </div>
            <Link href="/book-consultation" className="mt-8 px-6 py-3 bg-[#33ff00] text-black rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white inline-block">Book Your Consultation Now</Link>
        </section>
    );
};

export default HowItWorksSection;
