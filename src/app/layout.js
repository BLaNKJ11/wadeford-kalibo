import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wadeford Information System",
  description: "A modern school information platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Navigation Bar */}
        <nav className="bg-card shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
          <h1 className="text-2xl font-bold">WADEFORD</h1>
          <ul className="flex space-x-6 items-center">
            <li><Link href="/" className="px-3 py-2 rounded">Home</Link></li>
            <li><Link href="/about" className="px-3 py-2 rounded">About</Link></li>
            <li><Link href="/teachers" className="px-3 py-2 rounded">Teachers</Link></li>
            <li><Link href="/students" className="px-3 py-2 rounded">Our Students</Link></li>
            <li><Link href="/contact" className="px-3 py-2 rounded">Contact</Link></li>
            <li>
              <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/80" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </li>
          </ul>
        </nav>

        {/* Page Content */}
        <main className="flex-grow pt-20">{children}</main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
