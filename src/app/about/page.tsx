// src/app/about/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent } from "../../utils/fetchPageContent";

interface PageContent {
  title: { rendered: string };
  content: { rendered: string };
  featured_image?: string;
}

const AboutPage: React.FC = () => {
  const [aboutUs, setAboutUs] = useState<PageContent | null>(null);
  const [vision, setVision] = useState<PageContent | null>(null);
  const [mission, setMission] = useState<PageContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setAboutUs(await fetchPageContent(46)); // About Us
      setVision(await fetchPageContent(50));  // Vision
      setMission(await fetchPageContent(48)); // Mission
    };
    fetchContent();
  }, []);

  if (!aboutUs || !vision || !mission) return <div>Loading...</div>;

  return (
    <div className="about-us-page">
      {/* Breadcrumb Header with Page Title */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${aboutUs.featured_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{aboutUs.title.rendered}</h1>
          <nav className="text-white mt-2">
            <a href="/" className="hover:text-gray-300">Home</a> / About Us
          </nav>
        </div>
      </div>

      {/* About Us Content */}
      <section className="py-8 px-4 text-left items-left">
        <div
          className="prose max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: aboutUs.content.rendered }}
        />
      </section>

      {/* Vision Section */}
      <section className="py-8 px-4 bg-gray-100 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-4">{vision.title.rendered}</h2>
          <div
            className="prose text-left"
            dangerouslySetInnerHTML={{ __html: vision.content.rendered }}
          />
        </div>
        {vision.featured_image && (
          <div className="md:w-1/2 p-4">
            <img src={vision.featured_image} alt="Vision Image" className="w-full h-auto rounded-lg" />
          </div>
        )}
      </section>

      {/* Mission Section */}
      <section className="py-8 px-4 bg-white flex flex-col md:flex-row items-center">
        {mission.featured_image && (
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <img src={mission.featured_image} alt="Mission Image" className="w-full h-auto rounded-lg" />
          </div>
        )}
        <div className="md:w-1/2 px-4 order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-4">{mission.title.rendered}</h2>
          <div
            className="prose text-left"
            dangerouslySetInnerHTML={{ __html: mission.content.rendered }}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;