"use client";

import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-12 px-4 text-center bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Why Choose Decode Africa’s Consultation Services?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">Decode Africa offers tailored consultation services designed to help African entrepreneurs, innovators, and businesses thrive. Whether you’re just starting out or looking to scale your operations, our experts provide the strategic insights you need to navigate the complexities of African markets.</p>
            <div className="flex justify-center">
                <ul className="list-none p-0 m-0 flex flex-col space-y-2">
                    <li className="inline-block bg-[#2C324a] text-white px-3 py-1 rounded-full">Market Entry Strategy</li>
                    <li className="inline-block bg-[#2C324a] text-white px-3 py-1 rounded-full">Business Development</li>
                    <li className="inline-block bg-[#2C324a] text-white px-3 py-1 rounded-full">Digital Marketing and Social Media</li>
                    <li className="inline-block bg-[#2C324a] text-white px-3 py-1 rounded-full">Funding and Investment Advice</li>
                    <li className="inline-block bg-[#2C324a] text-white px-3 py-1 rounded-full">Innovation and Product Development</li>
                </ul>
            </div>
        </section>
    );
};

export default AboutSection;
