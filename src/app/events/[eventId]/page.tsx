"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchEventById } from "../../../utils/fetchEventById";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image"; // Properly imported for image optimization

interface EventDetails {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image?: { url: string };
  venue?: { venue: string; address: string };
  organizer?: { name: string; email: string; phone?: string };
  url: string; // Add URL for sharing
}

const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams();
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

  // Share button functions
  const shareEvent = (platform: string) => {
    const url = encodeURIComponent(event.url);
    const title = encodeURIComponent(event.title);
    const description = encodeURIComponent(event.description);

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank");
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="event-details-page">
      {/* Breadcrumb Header */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{ height: "350px" }}
      >
        {event.image?.url && (
          <Image
            src={event.image.url}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        )}
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
        {/* Left Section */}
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
          <div>
            <h2 className="text-2xl font-semibold mb-2">Map</h2>
            {mapSrc ? (
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-md shadow-md"
                ></iframe>
              </div>
            ) : (
              <p className="text-gray-500 italic">Map information not available.</p>
            )}
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
        </div>

        {/* Right Section */}
        <div className="space-y-8">
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

          <div>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <div
              className="prose max-w-full text-gray-700"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
          </div>
        </div>
      </section>

      {/* Social Media Share Buttons */}
      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold mb-4">Share this event</h3>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => shareEvent("facebook")}
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={30} />
          </button>
          <button
            onClick={() => shareEvent("twitter")}
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={30} />
          </button>
          <button
            onClick={() => shareEvent("linkedin")}
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;