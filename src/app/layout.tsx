// src/app/layout.tsx

import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Import the Footer component
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main> {/* Wrap children in a main tag for semantic structure */}
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
};

export default RootLayout;