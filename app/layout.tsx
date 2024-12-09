import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"], // Choose language subsets
  weight: ["400", "500", "700"], // regular, medium, bold,
  variable: "--font-roboto", // Set a CSS variable for Tailwind
  display: "swap", // Improves page loading performance
});

// Import Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"], // Choose language subsets
  weight: ["400", "600", "700"], // Regular, Semibold, Bold
  variable: "--font-montserrat", // CSS variable for Tailwind
  display: "swap", // Improves page loading performance
});

export const metadata: Metadata = {
  title: "3 Elements",
  description: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable} font-sans`}>
        <Header />
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
