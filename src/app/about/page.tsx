"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent } from "../../utils/fetchPageContent";
import Link from "next/link";  // Import Link from next/link
import Image from "next/image"; // Import Image from next/image

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
            {/* Replace <a> with Link */}
            <Link href="/" className="hover:text-gray-300">Home</Link> / About Us
          </nav>
        </div>
      </div>

      {/* About Us Content */}
      <section className="py-8 px-4 text-left items-left">
          <div
              className="max-w-7xl mx-auto"
              dangerouslySetInnerHTML={{ __html: aboutUs.content.rendered }}
          />
      </section>

      {/* Vision Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4">{vision.title.rendered}</h2>
            <div
              className="prose text-left"
              dangerouslySetInnerHTML={{ __html: vision.content.rendered }}
            />
          </div>
          {vision.featured_image && (
            <div className="md:w-1/2 p-4">
              {/* Use Image component for optimization */}
              <Image
                src={vision.featured_image}
                alt="Vision Image"
                width={500} // Provide width
                height={300} // Provide height
                className="w-full h-auto rounded-lg object-cover" // Use object-cover to crop height
              />
            </div>
          )}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {mission.featured_image && (
            <div className="md:w-1/2 p-4 order-2 md:order-1">
              {/* Use Image component for optimization */}
              <Image
                src={mission.featured_image}
                alt="Mission Image"
                width={500} // Provide width
                height={300} // Provide height
                className="w-full h-auto rounded-lg object-cover" // Use object-cover to crop height
              />
            </div>
          )}
          <div className="md:w-1/2 px-4 order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">{mission.title.rendered}</h2>
            <div
              className="prose text-left"
              dangerouslySetInnerHTML={{ __html: mission.content.rendered }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
