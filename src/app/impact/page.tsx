// src/app/impact/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent } from "../../utils/fetchPageContent";
import Link from 'next/link';
import Image from 'next/image';

interface PageContent {
  title: { rendered: string };
  content: { rendered: string };
  featured_image?: string;
}

// Updated tile data with icons located in the "icons" folder
const tiles = [
  { name: 'Trending', image: '/images/icons/trending', url: '/trending' },
  { name: 'Business and Finance', image: '/images/icons/business', url: '/business' },
  { name: 'Technology and Innovation', image: '/images/icons/technology', url: '/technology' },
  { name: 'Cryptocurrency and Blockchain', image: '/images/icons/cryptocurrency', url: '/cryptocurrency' },
  { name: 'Education and Learning', image: '/images/icons/education', url: '/education' },
  { name: 'Health and Wellness', image: '/images/icons/healthcare', url: '/healthcare' },
  { name: 'Entertainment', image: '/images/icons/entertainment', url: '/entertainment' },
  { name: 'Sports', image: '/images/icons/sports', url: '/sports' },
  { name: 'Lifestyle', image: '/images/icons/lifestyle', url: '/lifestyle' },
  { name: 'Youth and Culture', image: '/images/icons/youth', url: '/youth' },
  { name: 'Politics and Current Affairs', image: '/images/icons/politics', url: '/politics' },
  { name: 'Science and Environment', image: '/images/icons/science', url: '/science' },
  { name: 'Social Impact and Community', image: '/images/icons/social', url: '/social' },
  { name: 'Investment Opportunities', image: '/images/icons/investment', url: '/investment' },
  { name: 'Travel and Tourism', image: '/images/icons/travel', url: '/travel' },
  { name: 'Marketing and Branding', image: '/images/icons/marketing', url: '/marketing' },
  { name: 'Real Estate and Property', image: '/images/icons/real-estate', url: '/real-estate' },
  { name: 'Careers and Professional Development', image: '/images/icons/careers', url: '/careers' },
  { name: 'Startups and Entrepreneurship', image: '/images/icons/startups', url: '/startups' },
  { name: 'Economy and Markets', image: '/images/icons/economy', url: '/economy' },
  { name: 'Women in Business', image: '/images/icons/women', url: '/women-in-business' },
  { name: 'AgriTech and Agriculture', image: '/images/icons/agritech', url: '/agriculture' },
  { name: 'Legal and Regulatory', image: '/images/icons/legal', url: '/legal' },
  { name: 'Events and Conferences', image: '/images/icons/event', url: '/events' },
  { name: 'Data and Analytics', image: '/images/icons/data', url: '/data' },
];

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
            <Link href="/" className="hover:text-gray-300">Home</Link> / Impact
          </nav>
        </div>
      </div>

      {/* Tiles Section */}
      <section className="py-12 px-4 text-center bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiles.map((tile) => (
            <Link key={tile.name} href={tile.url} className="group relative block">
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105 bg-white p-4">
                <div className="relative">
                  <Image
                    src={`${tile.image}.png`}
                    alt={tile.name}
                    width={100}
                    height={100}
                    className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:grayscale"
                  />
                  <div className="text-gray-900 font-semibold text-base">{tile.name}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Impact Content */}
      {/* <section className="py-8 px-4 text-left max-w-3xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: impact.content.rendered }} />
      </section> */}
    </div>
  );
};

export default ImpactPage;