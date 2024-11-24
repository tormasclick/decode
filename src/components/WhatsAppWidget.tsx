// src/components/WhatsAppWidget.tsx

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget: React.FC = () => {
  return (
    <a 
      href="https://wa.me/254727721659" 
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppWidget;