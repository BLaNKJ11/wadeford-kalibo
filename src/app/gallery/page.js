"use client";

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryItems = [
  { image: '/assets/announcementpic01.jpg', title: 'School Event 1' },
  { image: '/assets/announcementpic01.jpg', title: 'School Event 2' },
  { image: '/assets/announcementpic01.jpg', title: 'School Event 3' },
  { image: '/assets/announcementpic01.jpg', title: 'School Event 4' },
  { image: '/assets/announcementpic01.jpg', title: 'School Event 5' },
  { image: '/assets/announcementpic01.jpg', title: 'School Event 6' },
  { image: '/assets/announcementpic01.jpg', title: 'School Event 7' },
  { image: '/assets/announcementpic01.jpg', title: 'School Event 8' },
  { image: '/assets/announcementpic01.jpg', title: 'School Event 9' },
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
              <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
              {/* <div className="absolute inset-0 bg-[#040873] bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}