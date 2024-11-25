"use client";

import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <div className="relative w-full h-[75vh] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                poster="/images/video-placeholder.jpg"
            >
                <source src="/videos/8275862-hd_1920_1080_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 border-4 border-[#33ff00] p-8">
                    <h1 className="text-4xl font-bold text-white">Unlock Your Business Potential with Expert Consultation</h1>
                    <p className="text-xl text-white mt-4">Get personalized advice and guidance from industry experts who understand African markets.</p>
                    <Link href="#contact2" legacyBehavior>
                        <a className="mt-4 px-6 py-3 bg-[#33ff00] text-black rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white">Book a Free Consultation</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
