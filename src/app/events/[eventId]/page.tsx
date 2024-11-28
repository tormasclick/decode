"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams for dynamic route handling
import { fetchEventById } from "../../../utils/fetchEventById"; // Import fetch function
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons
import Link from "next/link";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share"; // Import share buttons

interface EventDetails {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image?: { url: string };
  venue?: { venue: string; address: string };
  organizer?: { name: string; email: string; phone?: string };
}

const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams(); // Extract event ID from the route
  const [event, setEvent] = useState<EventDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (eventId) {
        const id = Array.isArray(eventId) ? eventId[0] : eventId;
        const eventData = await fetchEventById(id);
        setEvent(eventData);
        setLoading(false);
      }
    };
    fetchData();
  }, [eventId]);

  if (loading) return <div>Loading event details...</div>;

  if (!event) return <div>Event not found.</div>;

  const mapSrc = event.venue?.address
    ? `https://www.google.com/maps?q=${encodeURIComponent(event.venue.address)}&output=embed`
    : "";

  return (
    <div className="event-details-page">
      {/* Header with Breadcrumb and Event Image */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${event.image?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{event.title}</h1>
          <nav className="text-white mt-2">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/events" className="hover:text-gray-300">
              Events
            </Link>{" "}
            / {event.title}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column: Event Description (3/4 width) */}
        <div className="col-span-3 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Event Description</h2>
            <div
              className="prose max-w-full text-gray-700 space-y-4"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
          </div>
        </div>

        {/* Right Column: Venue, Date, Time, Map (1/4 width, light grey background) */}
        <div className="col-span-1 bg-gray-100 p-6 rounded-md space-y-6">
          {event.venue && (
            <div>
              <h2 className="text-xl font-semibold">Venue</h2>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#2C324a] mr-3" size={20} />
                <div>
                  <p className="text-gray-800 font-medium">{event.venue.venue}</p>
                  <p className="text-gray-600">{event.venue.address}</p>
                </div>
              </div>
            </div>
          )}
          <div>
            <h2 className="text-xl font-semibold mb-2">Date & Time</h2>
            <div className="flex items-center">
              <FaCalendarAlt className="text-[#2C324a] mr-3" size={20} />
              <p className="text-gray-800 font-medium">
                {new Date(event.start_date).toLocaleDateString()} -{" "}
                {new Date(event.end_date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center">
              <FaClock className="text-[#2C324a] mr-3" size={20} />
              <p className="text-gray-800 font-medium">
                {new Date(event.start_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -{" "}
                {new Date(event.end_date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Map</h2>
            {mapSrc ? (
              <iframe
                src={mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-md shadow-md"
              ></iframe>
            ) : (
              <p className="text-gray-500 italic">Map information not available.</p>
            )}
            {event.venue?.address && (
              <p className="text-center mt-2">
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(event.venue.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on Google Maps
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Add to Calendar Section (Full width, centered) */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Add to Calendar</h2>
        <div className="space-x-4">
          <a
            href={`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(event.title)}&dates=${new Date(event.start_date).toISOString().replace(/-|:|\.\d+/g, "")}/${new Date(event.end_date).toISOString().replace(/-|:|\.\d+/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add to Google Calendar
          </a>
          <a
            href={`https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(event.title)}&st=${new Date(event.start_date).toISOString().replace(/-|:|\.\d+/g, "")}&et=${new Date(event.end_date).toISOString().replace(/-|:|\.\d+/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
          >
            Add to iCalendar
          </a>
        </div>
      </section>

      {/* Share Section (Full width, centered) */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Share this Event</h2>
        <div className="flex justify-center space-x-4">
          <FacebookShareButton url={window.location.href} quote={event.title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} title={event.title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={window.location.href} title={event.title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </section>
    </div>
  );
};

export default EventDetailsPage;