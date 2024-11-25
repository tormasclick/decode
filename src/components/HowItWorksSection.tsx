"use client";

import React from 'react';
import Link from 'next/link';

const HowItWorksSection: React.FC = () => {
    return (
        <section className="py-12 px-4 text-center bg-[#2C324a] text-white">
            <h2 className="text-3xl font-bold mb-8">How Our Consultation Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white text-[#2C324a] rounded-full flex items-center justify-center text-xl font-bold mb-4 hover:bg-[#33ff00] transition-colors duration-300">1</div>
                    <h3 className="text-xl font-semibold mb-2">Submit Your Inquiry</h3>
                    <p className="text-lg">Fill out our simple consultation request form, detailing your business needs.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white text-[#2C324a] rounded-full flex items-center justify-center text-xl font-bold mb-4 hover:bg-[#33ff00] transition-colors duration-300">2</div>
                    <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
                    <p className="text-lg">Choose a convenient time for a free initial consultation with one of our experts.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white text-[#2C324a] rounded-full flex items-center justify-center text-xl font-bold mb-4 hover:bg-[#33ff00] transition-colors duration-300">3</div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Strategy Session</h3>
                    <p className="text-lg">During the call, we’ll discuss your goals and provide actionable recommendations.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white text-[#2C324a] rounded-full flex items-center justify-center text-xl font-bold mb-4 hover:bg-[#33ff00] transition-colors duration-300">4</div>
                    <h3 className="text-xl font-semibold mb-2">Follow-Up Support</h3>
                    <p className="text-lg">Receive a detailed plan and ongoing support to help you implement our strategies.</p>
                </div>
            </div>
            <div className="mt-8">
                <Link href="#contact2" legacyBehavior>
                    <a className="px-6 py-3 bg-[#33ff00] text-black rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white border hover:border-white">Book Your Consultation Now</a>
                </Link>
            </div>
        </section>
    );
};

export default HowItWorksSection;
