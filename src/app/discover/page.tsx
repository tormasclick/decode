"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Define tile data with valid paths to icons
const tiles = [
  { name: "Trending", image: "/images/icons/trending.png", url: "/categories/trending" },
  { name: "Business and Finance", image: "/images/icons/business.png", url: "/categories/business" },
  { name: "Technology and Innovation", image: "/images/icons/technology.png", url: "/categories/technology" },
  { name: "Cryptocurrency and Blockchain", image: "/images/icons/cryptocurrency.png", url: "/categories/cryptocurrency" },
  { name: "Education and Learning", image: "/images/icons/education.png", url: "/categories/education" },
  { name: "Health and Wellness", image: "/images/icons/healthcare.png", url: "/categories/healthcare" },
  { name: "Entertainment", image: "/images/icons/entertainment.png", url: "/categories/entertainment" },
  { name: "Sports", image: "/images/icons/sports.png", url: "/categories/sports" },
  { name: "Lifestyle", image: "/images/icons/lifestyle.png", url: "/categories/lifestyle" },
  { name: "Youth and Culture", image: "/images/icons/youth.png", url: "/categories/youth" },
  { name: "Politics and Current Affairs", image: "/images/icons/politics.png", url: "/categories/politics" },
  { name: "Science and Environment", image: "/images/icons/science.png", url: "/categories/science" },
  { name: "Social Impact and Community", image: "/images/icons/social.png", url: "/categories/social" },
  { name: "Investment Opportunities", image: "/images/icons/investment.png", url: "/categories/investment" },
  { name: "Travel and Tourism", image: "/images/icons/travel.png", url: "/categories/travel" },
  { name: "Marketing and Branding", image: "/images/icons/marketing.png", url: "/categories/marketing" },
  { name: "Real Estate and Property", image: "/images/icons/real-estate.png", url: "/categories/real-estate" },
  { name: "Careers and Professional Development", image: "/images/icons/careers.png", url: "/categories/careers" },
  { name: "Startups and Entrepreneurship", image: "/images/icons/startups.png", url: "/categories/startups" },
  { name: "Economy and Markets", image: "/images/icons/economy.png", url: "/categories/economy" },
  { name: "Women in Business", image: "/images/icons/women.png", url: "/categories/women-in-business" },
  { name: "AgriTech and Agriculture", image: "/images/icons/agritech.png", url: "/categories/agriculture" },
  { name: "Legal and Regulatory", image: "/images/icons/legal.png", url: "/categories/legal" },
  { name: "Events and Conferences", image: "/images/icons/event.png", url: "/categories/events" },
  { name: "Data and Analytics", image: "/images/icons/data.png", url: "/categories/data" },
];

const DiscoverPage: React.FC = () => {
  return (
    <div className="discover-page">
      {/* Header Section */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/images/discover.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Discover</h1>
          <nav className="text-white mt-2">
            <Link href="/">Home</Link> / Discover
          </nav>
        </div>
      </div>

      {/* Tiles Section */}
      <section className="py-12 px-4 text-center bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiles.map((tile) => (
            <Link key={tile.name} href={tile.url}>
              <div className="group relative block">
                <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105 bg-white p-4">
                  <div className="relative">
                    <Image
                      src={tile.image}
                      alt={tile.name}
                      width={100}
                      height={100}
                      className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:grayscale"
                    />
                    <div className="text-gray-900 font-semibold text-base">{tile.name}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DiscoverPage;
