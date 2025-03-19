'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-[#040873] shadow-md p-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center text-2xl font-bold text-white">
          <img src="/assets/school-logo.jpg" alt="School Logo" className="h-10 w-10 mr-2" />
          WADEFORD
        </Link>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
        
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="px-3 py-5 text-white rounded hover:bg-[#ded605] transition-colors duration-300">Home</Link></li>
          <li><Link href="/about" className="px-3 py-5 text-white rounded hover:bg-[#ded605] transition-colors duration-300">About</Link></li>
          <li><Link href="/teachers" className="px-3 py-5 text-white rounded hover:bg-[#ded605] transition-colors duration-300">Teachers</Link></li>
          <li><Link href="/offers" className="px-3 py-5 text-white rounded hover:bg-[#ded605] transition-colors duration-300">Our Offers</Link></li>
          <li><Link href="/gallery" className="px-3 py-5 text-white rounded hover:bg-[#ded605] transition-colors duration-300">Gallery</Link></li>
          <li><Link href="https://wade.moodlecloud.com" className="px-3 py-5 text-white rounded hover:bg-[#ded605] transition-colors duration-300">Login</Link></li>
        </ul>
      </div>
      
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-center bg-white shadow-md p-4">
          <li><Link href="/" className="block py-2 hover:bg-[#ded605] transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" className="block py-2 hover:bg-[#ded605] transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/teachers" className="block py-2 hover:bg-[#ded605] transition-colors duration-300" onClick={() => setIsOpen(false)}>Teachers</Link></li>
          <li><Link href="/offers" className="block py-2 hover:bg-[#ded605] transition-colors duration-300" onClick={() => setIsOpen(false)}>Our Offers</Link></li>
          <li><Link href="/gallery" className="block py-2 hover:bg-[#ded605] transition-colors duration-300" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link href="https://wade.moodlecloud.com" className="block py-2 hover:bg-[#ded605] transition-colors duration-300" onClick={() => setIsOpen(false)}>Login</Link></li>
        </ul>
      )}
    </nav>
  );
}
