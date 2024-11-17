"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { fetchEvents } from "../../utils/fetchEvents";
import Image from "next/image"; // Import Image component from next/image

interface Event {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image: { url: string };
}

const addToCalendarLink = (event: Event, type: "google" | "ics") => {
  if (type === "google") {
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${new Date(event.start_date).toISOString().replace(/-|:|\.\d\d\d/g, "")}/${new Date(
      event.end_date
    ).toISOString().replace(/-|:|\.\d\d\d/g, "")}&details=${encodeURIComponent(event.description)}`;
  } else if (type === "ics") {
    const icsContent = `
      BEGIN:VCALENDAR
      VERSION:2.0
      BEGIN:VEVENT
      DTSTART:${new Date(event.start_date).toISOString().replace(/-|:|\.\d\d\d/g, "")}
      DTEND:${new Date(event.end_date).toISOString().replace(/-|:|\.\d\d\d/g, "")}
      SUMMARY:${event.title}
      DESCRIPTION:${event.description}
      END:VEVENT
      END:VCALENDAR
    `;
    return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
  }
  return "#";
};

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
          backgroundImage: `url('/images/event1.jpg')`,
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
                    <div className="relative w-full h-56">
                      <Image
                        src={event.image.url}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                    </div>
                  )}
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

                <div className="flex flex-col items-center pb-4 space-y-4">
                  <Link
                    href={`/events/${event.id}`}
                    className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#2C324a] to-[#33ff00] rounded-lg shadow-md hover:bg-[#33ff00] hover:text-[#2C324a] transition-all duration-300"
                  >
                    View Event Details
                  </Link>

                  {/* Add to Calendar Links */}
                  <div className="flex space-x-4">
                    <a
                      href={addToCalendarLink(event, "google")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2C324a] hover:text-[#33ff00] font-medium transition-all duration-300"
                    >
                      Add to Google Calendar
                    </a>
                    <a
                      href={addToCalendarLink(event, "ics")}
                      download={`${event.title}.ics`}
                      className="text-[#2C324a] hover:text-[#33ff00] font-medium transition-all duration-300"
                    >
                      Download ICS
                    </a>
                  </div>
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