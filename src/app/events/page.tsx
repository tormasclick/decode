// src/app/events/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent } from "../../utils/fetchPageContent";

interface PageContent {
  title: { rendered: string };
  content: { rendered: string };
  featured_image?: string;
}

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<PageContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setEvents(await fetchPageContent(67)); // Events page
    };
    fetchContent();
  }, []);

  if (!events) return <div>Loading...</div>;

  return (
    <div className="events-page">
      {/* Breadcrumb Header with Page Title */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${events.featured_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{events.title.rendered}</h1>
          <nav className="text-white mt-2">
            <a href="/" className="hover:text-gray-300">Home</a> / Events
          </nav>
        </div>
      </div>

      {/* Events Content */}
      <section className="py-8 px-4 text-left">
        <div
          className="prose max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: events.content.rendered }}
        />
      </section>
    </div>
  );
};

export default EventsPage;