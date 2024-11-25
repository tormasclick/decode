"use client";

import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-12 px-4 text-center bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Why Choose Decode Africa’s Consultation Services?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">Decode Africa offers tailored consultation services designed to help African entrepreneurs, innovators, and businesses thrive. Whether you’re just starting out or looking to scale your operations, our experts provide the strategic insights you need to navigate the complexities of African markets.</p>
            <ul className="list-disc list-inside text-left max-w-3xl mx-auto">
                <li className="mb-2">Market Entry Strategy</li>
                <li className="mb-2">Business Development</li>
                <li className="mb-2">Digital Marketing and Social Media</li>
                <li className="mb-2">Funding and Investment Advice</li>
                <li>Innovation and Product Development</li>
            </ul>
        </section>
    );
};

export default AboutSection;
