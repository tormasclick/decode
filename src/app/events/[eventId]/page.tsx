"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams for dynamic route handling
import { fetchEventById } from "../../../utils/fetchEventById"; // Import fetch function
import Image from "next/image"; // Import Image component from next/image
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons

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
      <section className="py-8 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Venue and Map */}
        <div className="space-y-6">
          {event.venue && (
            <div>
              <h2 className="text-2xl font-semibold">Venue</h2>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#2C324a] mr-3" size={20} />
                <div>
                  <p className="text-gray-800 font-medium">{event.venue.venue}</p>
                  <p className="text-gray-600">{event.venue.address}</p>
                </div>
              </div>
            </div>
          )}
          {event.venue && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Map</h2>
              {/* Embedded Map */}
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
              {/* Fallback Map Link */}
              <p className="text-center mt-2">
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(event.venue.address || "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Event Details */}
        <div className="space-y-8">
          {/* Event Date and Time */}
          <div className="space-y-4">
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

          {/* Organizer Details */}
          {event.organizer && (
            <div className="space-y-4">
              <div className="flex items-center">
                <FaUser className="text-[#2C324a] mr-3" size={20} />
                <p className="text-gray-800 font-medium">{event.organizer.name}</p>
              </div>
              {event.organizer.phone && (
                <div className="flex items-center">
                  <FaPhoneAlt className="text-[#2C324a] mr-3" size={20} />
                  <p className="text-gray-800 font-medium">{event.organizer.phone}</p>
                </div>
              )}
              <div className="flex items-center">
                <FaEnvelope className="text-[#2C324a] mr-3" size={20} />
                <p className="text-gray-800 font-medium">{event.organizer.email}</p>
              </div>
            </div>
          )}

          {/* Event Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <div
              className="prose max-w-full text-gray-700"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailsPage;