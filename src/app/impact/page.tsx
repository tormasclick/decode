// src/app/impact/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent } from "../../utils/fetchPageContent";
import Link from 'next/link'; // Import Link from Next.js

interface PageContent {
  title: { rendered: string };
  content: { rendered: string };
  featured_image?: string;
}

const ImpactPage: React.FC = () => {
  const [impact, setImpact] = useState<PageContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setImpact(await fetchPageContent(64)); // Impact page
    };
    fetchContent();
  }, []);

  if (!impact) return <div>Loading...</div>;

  return (
    <div className="impact-page">
      {/* Breadcrumb Header with Page Title */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${impact.featured_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{impact.title.rendered}</h1>
          <nav className="text-white mt-2">
            <Link href="/" className="hover:text-gray-300">Home</Link> / Impact {/* Updated Link */}
          </nav>
        </div>
      </div>

      {/* Impact Content */}
      <section className="py-8 px-4 text-left">
        <div
          className="prose max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: impact.content.rendered }}
        />
      </section>
    </div>
  );
};

export default ImpactPage;