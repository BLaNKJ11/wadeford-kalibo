"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryItems = [
  { image: '/assets/gallerypics/gallerypicschool01.jpeg', title: 'School Gallery Pic 1' },
  { image: '/assets/gallerypics/gallerypicschool02.jpeg', title: 'School Gallery Pic 2' },
  { image: '/assets/gallerypics/gallerypicschool03.jpg', title: 'School Gallery Pic 3' },
  { image: '/assets/gallerypics/gallerypicschool04.jpg', title: 'School Gallery Pic 4' },
  { image: '/assets/gallerypics/gallerypicschool05.jpg', title: 'School Gallery Pic 5' },
  { image: '/assets/gallerypics/gallerypicschool06.jpg', title: 'School Gallery Pic 6' },
  { image: '/assets/gallerypics/gallerypicschool07.jpg', title: 'School Gallery Pic 7' },
  { image: '/assets/gallerypics/gallerypicschool08.jpg', title: 'School Gallery Pic 8' },
  { image: '/assets/gallerypics/gallerypicschool09.jpg', title: 'School Gallery Pic 9' },
  { image: '/assets/gallerypics/gallerypicschool10.jpg', title: 'School Gallery Pic 10' },
  { image: '/assets/gallerypics/gallerypicschool11.jpg', title: 'School Gallery Pic 11' },
  { image: '/assets/gallerypics/gallerypicschool12.jpg', title: 'School Gallery Pic 12' },
  { image: '/assets/gallerypics/gallerypicschool13.jpg', title: 'School Gallery Pic 13' },
  { image: '/assets/gallerypics/gallerypicschool14.jpg', title: 'School Gallery Pic 14' },
  { image: '/assets/gallerypics/gallerypicschool15.jpg', title: 'School Gallery Pic 15' },
  { image: '/assets/gallerypics/gallerypicschool16.jpg', title: 'School Gallery Pic 16' },
  { image: '/assets/gallerypics/gallerypicschool17.jpg', title: 'School Gallery Pic 17' },
  { image: '/assets/gallerypics/gallerypicschool18.jpg', title: 'School Gallery Pic 18' },
  { image: '/assets/gallerypics/gallerypicschool19.jpg', title: 'School Gallery Pic 19' },
  { image: '/assets/gallerypics/gallerypicschool20.jpg', title: 'School Gallery Pic 20' },
  { image: '/assets/gallerypics/gallerypicschool21.jpg', title: 'School Gallery Pic 21' },
  { image: '/assets/gallerypics/gallerypicschool22.jpg', title: 'School Gallery Pic 22' },
  { image: '/assets/gallerypics/gallerypicschool23.jpg', title: 'School Gallery Pic 23' },
  { image: '/assets/gallerypics/gallerypicschool24.jpg', title: 'School Gallery Pic 24' },
  { image: '/assets/gallerypics/gallerypicschool25.jpg', title: 'School Gallery Pic 25' },
  { image: '/assets/gallerypics/gallerypicschool26.jpg', title: 'School Gallery Pic 26' },
  { image: '/assets/gallerypics/gallerypicschool27.jpg', title: 'School Gallery Pic 27' },
  { image: '/assets/gallerypics/gallerypicschool28.jpg', title: 'School Gallery Pic 28' },
  { image: '/assets/gallerypics/gallerypicschool29.jpg', title: 'School Gallery Pic 29' },
  { image: '/assets/gallerypics/gallerypicschool30.jpg', title: 'School Gallery Pic 30' },
  { image: '/assets/gallerypics/gallerypicschool31.jpg', title: 'School Gallery Pic 31' },
  { image: '/assets/gallerypics/gallerypicschool32.jpg', title: 'School Gallery Pic 32' },
  { image: '/assets/gallerypics/gallerypicschool33.jpg', title: 'School Gallery Pic 33' },
];

export default function GalleryPage() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');
    galleryItems.forEach((item) => observer.observe(item));

    return () => {
      galleryItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#040873] mb-6">Gallery</h2>
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 opacity-0">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}