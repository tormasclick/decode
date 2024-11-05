// src/components/UpcomingEventsSection.tsx
import React from 'react';

const UpcomingEventsSection = () => {
    return (
        <section className="py-16 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Join Upcoming Events and Workshops</h2>
            <p className="text-lg mb-6">
                Stay up-to-date with the latest events and workshops hosted by Decode Africa, designed to help entrepreneurs
                grow their businesses and expand their network.
            </p>
            <a
                href="/events" // Link to the Events page
                className="bg-purple-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-purple-400"
            >
                View Events
            </a>
        </section>
    );
};

export default UpcomingEventsSection;