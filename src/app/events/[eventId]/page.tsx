"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams for dynamic route handling
import { fetchEventById } from "../../../utils/fetchEventById"; // Import fetch function
import Image from "next/image"; // Import Image component from next/image

interface EventDetails {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image?: { url: string };
  venue?: { venue: string; address: string };
  organizer?: { name: string; email: string };
}

const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams(); // Extract event ID from the route
  const [event, setEvent] = useState<EventDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (eventId) {
        const eventData = await fetchEventById(eventId);
        setEvent(eventData);
        setLoading(false);
      }
    };
    fetchData();
  }, [eventId]);

  if (loading) return <div>Loading event details...</div>;

  if (!event) return <div>Event not found.</div>;

  return (
    <div className="event-details-page py-8 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">{event.title}</h1>
        <p className="text-gray-600">
          {new Date(event.start_date).toLocaleDateString()} -{" "}
          {new Date(event.end_date).toLocaleDateString()}
        </p>
      </header>

      {event.image && (
        <div className="relative w-full h-auto mb-8">
          <Image
            src={event.image.url}
            alt={event.title}
            layout="responsive"
            width={1200} // Specify width and height to maintain aspect ratio
            height={800}
            className="object-cover"
          />
        </div>
      )}

      <section className="prose mx-auto max-w-3xl">
        <div dangerouslySetInnerHTML={{ __html: event.description }} />
      </section>

      {event.venue && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Venue Details</h2>
          <p className="text-lg">{event.venue.venue}</p>
          <p className="text-gray-600">{event.venue.address}</p>
        </section>
      )}

      {event.organizer && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Organizer Details</h2>
          <p className="text-lg">{event.organizer.name}</p>
          <p className="text-gray-600">{event.organizer.email}</p>
        </section>
      )}
    </div>
  );
};

export default EventDetailsPage;