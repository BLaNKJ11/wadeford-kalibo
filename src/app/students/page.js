"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const studentGalleryItems = [
  { image: '/assets/studentgallery/student01.jpg', title: 'Student Activity 1' },
  { image: '/assets/studentgallery/student02.jpg', title: 'Student Activity 2' },
  { image: '/assets/studentgallery/student03.jpg', title: 'Student Activity 3' },
  { image: '/assets/studentgallery/student04.jpg', title: 'Student Activity 4' },
  { image: '/assets/studentgallery/student05.jpg', title: 'Student Activity 5' },
  { image: '/assets/studentgallery/student06.jpg', title: 'Student Activity 6' },
  { image: '/assets/studentgallery/student07.jpg', title: 'Student Activity 7' },
  { image: '/assets/studentgallery/student08.jpg', title: 'Student Activity 8' },
  { image: '/assets/studentgallery/student09.jpg', title: 'Student Activity 9' },
  { image: '/assets/studentgallery/student10.jpg', title: 'Student Activity 10' },
];

export default function StudentGalleryPage() {
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
        <h2 className="text-3xl font-bold text-center text-[#040873] mb-6">Student Gallery</h2>
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {studentGalleryItems.map((item, index) => (
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