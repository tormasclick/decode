"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { fetchEvents } from "../../utils/fetchEvents";

interface Event {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image: { url: string };
}

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const eventData = await fetchEvents();
      setEvents(eventData);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading events...</div>;

  return (
    <div className="events-page">
      {/* Header Section */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/images/event1.jpg')`, // Replace with the appropriate header image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Upcoming Events</h1>
          <nav className="text-white mt-2">
            <Link href="/">Home</Link> / Events
          </nav>
        </div>
      </div>

      {/* Events Section */}
      <section className="py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.id}
                className="event bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  {event.image && (
                    <img
                      src={event.image.url}
                      alt={event.title}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                </div>

                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{event.title}</h2>
                  <p className="text-gray-600">
                    {new Date(event.start_date).toLocaleDateString()} -{" "}
                    {new Date(event.end_date).toLocaleDateString()}
                  </p>
                  <div
                    className="prose mt-4 text-gray-700"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                </div>

                <div className="flex justify-center pb-4">
                  <Link
                    href={`/events/${event.id}`}
                    className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#2C324a] to-[#33ff00] rounded-lg shadow-md hover:bg-[#33ff00] hover:text-[#2C324a] transition-all duration-300"
                  >
                    View Event Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No events available.</p>
          )}
        </div>
      </section>

      {/* View More Events Button */}
      <div className="text-center mt-8">
        <Link
          href="/events"
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#2C324a] to-[#33ff00] rounded-lg shadow-md hover:bg-[#33ff00] hover:text-[#2C324a] transition-all duration-300"
        >
          View More Events
        </Link>
      </div>
    </div>
  );
};

export default EventsPage;