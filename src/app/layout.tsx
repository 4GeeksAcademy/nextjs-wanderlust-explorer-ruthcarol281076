import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Descubre experiencias únicas alrededor del mundo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <FavoritesProvider>
          <Navbar />
          <main className="flex-1 min-h-screen pt-16 animate-fade-in">{children}</main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
