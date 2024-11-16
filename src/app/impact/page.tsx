"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent } from "../../utils/fetchPageContent";
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

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
      <div className="breadcrumb-header relative flex items-center justify-center text-center" style={{ height: "300px" }}>
        {impact.featured_image && (
          <div className="absolute inset-0">
            <Image
              src={impact.featured_image}
              alt="Impact Featured Image"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire area
              className="object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{impact.title.rendered}</h1>
          <nav className="text-white mt-2">
            <Link href="/" className="hover:text-gray-300">Home</Link> / Impact
          </nav>
        </div>
      </div>

      {/* Impact Content */}
      <section className="py-8 px-4 text-left max-w-3xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: impact.content.rendered }} />
      </section>
    </div>
  );
};

export default ImpactPage;