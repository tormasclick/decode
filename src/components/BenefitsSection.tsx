"use client";

import React from 'react';
import Link from 'next/link';

const BenefitsSection: React.FC = () => {
    return (
        <section className="py-12 px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">What You’ll Gain from Our Consultation Services</h2>
            <ul className="list-disc list-inside text-left max-w-3xl mx-auto">
                <li className="mb-2">Expert Guidance: Access to experienced consultants who specialize in African markets.</li>
                <li className="mb-2">Personalized Strategy: Customized advice tailored to your business needs and goals.</li>
                <li className="mb-2">Actionable Insights: Receive clear, actionable recommendations you can implement right away.</li>
                <li className="mb-2">Access to Resources: Connect with industry contacts, funding opportunities, and valuable tools.</li>
                <li>Support for Scaling: Guidance on expanding your business across different African regions.</li>
            </ul>
            <Link href="#contact2" legacyBehavior>
                <a className="mt-6 px-6 py-3 bg-[#33ff00] text-black rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white inline-block">Get Started with a Free Consultation</a>
            </Link>
        </section>
    );
};

export default BenefitsSection;
