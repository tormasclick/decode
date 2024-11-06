// src/app/social-connect/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";  // Import Link from next/link
import { fetchPageContent } from "../../utils/fetchPageContent";

interface PageContent {
  title: { rendered: string };
  content: { rendered: string };
  featured_image?: string;
}

const SocialConnectPage: React.FC = () => {
  const [socialConnect, setSocialConnect] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await fetchPageContent(58); // Fetch "Social Connect" page with ID 58
        setSocialConnect(data);
      } catch (error) {
        console.error("Failed to fetch page content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  if (!socialConnect) {
    return <div>Error loading page content.</div>; // Show error if no content is fetched
  }

  return (
    <div className="social-connect-page">
      {/* Breadcrumb Header with Page Title */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{
          backgroundImage: socialConnect.featured_image
            ? `url(${socialConnect.featured_image})`
            : "url(/default-image.jpg)", // Fallback if no image is provided
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{socialConnect.title.rendered}</h1>
          <nav className="text-white mt-2">
            {/* Replace native <a> with Link component */}
            <Link href="/" className="hover:text-gray-300">Home</Link> / Social Connect
          </nav>
        </div>
      </div>

      {/* Social Connect Content */}
      <section className="py-8 px-4 text-left">
        <div
          className="prose max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: socialConnect.content.rendered }}
        />
      </section>
    </div>
  );
};

export default SocialConnectPage;