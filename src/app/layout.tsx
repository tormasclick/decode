// src/app/layout.tsx

import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget"; // Import the WhatsApp Widget
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget /> {/* Add the WhatsApp Widget here */}
      </body>
    </html>
  );
};

export default RootLayout;