"use client";

import React, { useEffect, useState } from "react";
import { fetchPageData } from "../utils/fetchPageData";

interface PageData {
  title: string;
  content: string;
  featuredImage: string | null;
}

const Impact: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);

  useEffect(() => {
    const getPageData = async () => {
      const data = await fetchPageData(64); // Page ID 64 for Impact
      setPageData(data);
    };
    getPageData();
  }, []);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full">
      {/* Video Background */}
      <video
        src="/videos/3130284-uhd_3840_2160_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        {/* Fallback message for unsupported browsers */}
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative container mx-auto px-8 lg:px-16 py-12 lg:py-20">
        <div className="bg-white/95 p-8 rounded-md shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center">
            <span className="border-l-4 border-[#2C324a] pl-4">
              {pageData.title}
            </span>
          </h2>
          <div
            className="text-gray-800 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Impact;