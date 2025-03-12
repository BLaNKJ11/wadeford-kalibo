"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import NavigationMenu from "@/components/NavigationMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Wadeford Information System",
//   description: "A modern school information platform.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Navigation Bar */}
        <nav className="bg-[#040873] shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
          <h1 className="text-2xl font-bold text-white">WADEFORD</h1>
          <ul className="flex space-x-6 items-center">
            <li><Link href="/" className="px-3 py-5 text-white hover:bg-[#ded605] transition-colors duration-300">Home</Link></li>
            <li><Link href="/about" className="px-3 py-5 text-white hover:bg-[#ded605] transition-colors duration-300">About</Link></li>
            <li><Link href="/teachers" className="px-3 py-5 text-white hover:bg-[#ded605] transition-colors duration-300">Teachers</Link></li>
            <li><Link href="/students" className="px-3 py-5 text-white hover:bg-[#ded605] transition-colors duration-300">Our Offers</Link></li>
            <li><Link href="/students" className="px-3 py-5 text-white hover:bg-[#ded605] transition-colors duration-300">Gallery</Link></li>
            <li><Link href="/contact" className="px-3 py-5 text-white hover:bg-[#ded605] transition-colors duration-300">Contact</Link></li>
            {/* <li>
              <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/80" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </li> */}
          </ul>
        </nav>

        {/* Page Content */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer */}
        <Footer />
        <NavigationMenu />
      </body>
    </html>
  );
}