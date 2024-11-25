// src/app/consultation/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent } from "../../utils/fetchPageContent";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import BenefitsSection from "../../components/BenefitsSection";
import HowItWorksSection from "../../components/HowItWorksSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import FAQsSection from "../../components/FAQsSection";
import ContactForm from "../../components/ContactForm";

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
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQsSection />
      <ContactForm />
    </div>
  );
};

export default ConsultationPage;