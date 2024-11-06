// src/app/consultation/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent } from "../../utils/fetchPageContent";

interface PageContent {
  title: { rendered: string };
  content: { rendered: string };
  featured_image?: string;
}

const ConsultationPage: React.FC = () => {
  const [consultation, setConsultation] = useState<PageContent | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setConsultation(await fetchPageContent(55)); // Consultation page
    };
    fetchContent();
  }, []);

  if (!consultation) return <div>Loading...</div>;

  return (
    <div className="consultation-page">
      {/* Breadcrumb Header with Page Title */}
      <div
        className="breadcrumb-header relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${consultation.featured_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{consultation.title.rendered}</h1>
          <nav className="text-white mt-2">
            <a href="/" className="hover:text-gray-300">Home</a> / Consultation
          </nav>
        </div>
      </div>

      {/* Consultation Content */}
      <section className="py-8 px-4 text-left">
        <div
          className="prose max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: consultation.content.rendered }}
        />
      </section>
    </div>
  );
};

export default ConsultationPage;