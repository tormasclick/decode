"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { fetchEventById } from "../../../utils/fetchEventById";

interface EventDetails {
  id: number;
  title: string;
}

const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams(); // Extract the event ID from the route
  const [event, setEvent] = useState<EventDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (eventId) {
          const id = Array.isArray(eventId) ? eventId[0] : eventId; // Handle dynamic route
          const eventData = await fetchEventById(id);
          setEvent(eventData);
        }
      } catch (err) {
        setError("Failed to load event details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [eventId]);

  if (loading) {
    return <div>Loading event details...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!event) {
    return <div>Event not found.</div>;
  }

  return (
    <div className="event-details-page">
      {/* Header with Breadcrumb */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{
          backgroundImage: "url(/images/events-general.jpg)", // Static image path
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
    </div>
  );
};

export default EventDetailsPage;