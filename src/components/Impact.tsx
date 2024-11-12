// src/components/Impact.tsx

"use client";

import React, { useEffect, useState } from "react";
import { fetchPageData } from "../utils/fetchPageData";
import Image from "next/image";

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
    <div className="container mx-auto px-8 lg:px-16 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        
        {/* Left Side: Content */}
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

        {/* Right Side: Image */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={pageData.featuredImage || "/images/impact3.jpg"} // Use 'impact3.jpg' as fallback
            alt="Impact Image"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;