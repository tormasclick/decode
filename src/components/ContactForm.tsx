"use client";

import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <section className="py-12 px-4 text-center">
            <h2 className="text-3xl font-bold mb-8" id="contact2">Ready to Take Your Business to the Next Level?</h2>
            <form action="https://formspree.io/f/meoqlnre" method="POST" className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" name="name" placeholder="Name" className="border border-gray-300 p-3 rounded-lg" required />
                    <input type="email" name="email" placeholder="Email Address" className="border border-gray-300 p-3 rounded-lg" required />
                    <input type="tel" name="phone" placeholder="Phone Number" className="border border-gray-300 p-3 rounded-lg" required />
                    <input type="text" name="business" placeholder="Business Name" className="border border-gray-300 p-3 rounded-lg" required />
                </div>
                <textarea name="description" placeholder="Brief Description of Your Needs" className="border border-gray-300 p-3 rounded-lg mt-4 w-full h-32" required></textarea>
                <div className="text-left mt-4">
                    <label className="block font-semibold mb-2">Preferred Date/Time for Consultation</label>
                    <input type="datetime-local" name="datetime" className="border border-gray-300 p-3 rounded-lg w-full" required />
                </div>
                <button type="submit" className="mt-6 px-6 py-3 bg-[#33ff00] text-black rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;
