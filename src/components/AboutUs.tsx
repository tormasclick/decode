"use client";

import React, { useEffect, useState } from "react";
import { fetchPageData } from "../utils/fetchPageData";

interface PageData {
  title: string;
  content: string;
  featuredImage: string | null;
}

const AboutUs: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);

  useEffect(() => {
    const getPageData = async () => {
      const data = await fetchPageData(46); // Page ID 46 for About Us
      setPageData(data);
    };
    getPageData();
  }, []);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-8 lg:px-16 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Left Side: Video */}
        <div className="lg:w-1/2 w-full relative">
          <div className="overflow-hidden rounded-md" style={{ height: "300px" }}>
            <video
              src="/videos/6608212-uhd_2160_4096_24fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              {/* Fallback message for unsupported browsers */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-4xl font-bold mb-4 flex items-center">
            <span className="border-l-4 border-[#2C324a] pl-4">
              {pageData.title}
            </span>
          </h2>
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;