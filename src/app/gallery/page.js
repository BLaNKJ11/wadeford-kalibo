"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const schoolGalleryItems = [
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
  { image: '/assets/gallerypics/gallerypicschool20.jpg', title: 'School Gallery Pic 10' },
  { image: '/assets/gallerypics/gallerypicschool21.jpg', title: 'School Gallery Pic 11' },
  { image: '/assets/gallerypics/gallerypicschool22.jpg', title: 'School Gallery Pic 12' },
  { image: '/assets/gallerypics/gallerypicschool23.jpg', title: 'School Gallery Pic 13' },
  { image: '/assets/gallerypics/gallerypicschool24.jpg', title: 'School Gallery Pic 14' },
  { image: '/assets/gallerypics/gallerypicschool25.jpg', title: 'School Gallery Pic 15' },
  { image: '/assets/gallerypics/gallerypicschool26.jpg', title: 'School Gallery Pic 16' },
  { image: '/assets/gallerypics/gallerypicschool27.jpg', title: 'School Gallery Pic 17' },
  { image: '/assets/gallerypics/gallerypicschool28.jpg', title: 'School Gallery Pic 18' },
  { image: '/assets/gallerypics/gallerypicschool29.jpg', title: 'School Gallery Pic 19' },
  { image: '/assets/gallerypics/gallerypicschool30.jpg', title: 'School Gallery Pic 20' },
  { image: '/assets/gallerypics/gallerypicschool31.jpg', title: 'School Gallery Pic 21' },
];

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
  { image: '/assets/studentgallery/student11.jpg', title: 'Student Activity 11' },
  { image: '/assets/studentgallery/student12.jpg', title: 'Student Activity 12' },
  { image: '/assets/studentgallery/student13.jpg', title: 'Student Activity 13' },
  { image: '/assets/studentgallery/student14.jpg', title: 'Student Activity 14' },
  { image: '/assets/studentgallery/student15.jpg', title: 'Student Activity 15' },
  { image: '/assets/studentgallery/student16.jpg', title: 'Student Activity 16' },
  { image: '/assets/studentgallery/student17.jpg', title: 'Student Activity 17' },
  { image: '/assets/studentgallery/student18.jpg', title: 'Student Activity 18' },
  { image: '/assets/studentgallery/student19.jpg', title: 'Student Activity 19' },
  
  { image: '/assets/studentgallery/student20.jpg', title: 'Student Activity 20' },
  { image: '/assets/studentgallery/student21.jpg', title: 'Student Activity 21' },
  { image: '/assets/studentgallery/student22.jpg', title: 'Student Activity 22' },
  { image: '/assets/studentgallery/student23.jpg', title: 'Student Activity 23' },
  { image: '/assets/studentgallery/student24.jpg', title: 'Student Activity 24' },
  { image: '/assets/studentgallery/student25.jpg', title: 'Student Activity 25' },
  { image: '/assets/studentgallery/student26.jpg', title: 'Student Activity 26' },
  { image: '/assets/studentgallery/student27.jpg', title: 'Student Activity 27' },
  { image: '/assets/studentgallery/student28.jpg', title: 'Student Activity 28' },
  { image: '/assets/studentgallery/student29.jpg', title: 'Student Activity 29' },
  { image: '/assets/studentgallery/student30.jpg', title: 'Student Activity 30' },
  
  { image: '/assets/studentgallery/student31.jpg', title: 'Student Activity 31' },
  { image: '/assets/studentgallery/student32.jpg', title: 'Student Activity 32' },
  { image: '/assets/studentgallery/student33.jpeg', title: 'Student Activity 33' },
  { image: '/assets/studentgallery/student34.JPG', title: 'Student Activity 34' },
  { image: '/assets/studentgallery/student35.JPG', title: 'Student Activity 35' },
  { image: '/assets/studentgallery/student36.JPG', title: 'Student Activity 36' },
  { image: '/assets/studentgallery/student37.JPG', title: 'Student Activity 37' },
  { image: '/assets/studentgallery/student38.JPG', title: 'Student Activity 38' },
  { image: '/assets/studentgallery/student39.JPG', title: 'Student Activity 39' },

  { image: '/assets/studentgallery/student40.JPG', title: 'Student Activity 40' },
  { image: '/assets/studentgallery/student41.JPG', title: 'Student Activity 41' },
  { image: '/assets/studentgallery/student42.JPG', title: 'Student Activity 42' },
  { image: '/assets/studentgallery/student43.JPG', title: 'Student Activity 43' },
  { image: '/assets/studentgallery/student44.JPG', title: 'Student Activity 44' },
  { image: '/assets/studentgallery/student45.JPG', title: 'Student Activity 45' },
  { image: '/assets/studentgallery/student46.JPG', title: 'Student Activity 46' },
  { image: '/assets/studentgallery/student47.JPG', title: 'Student Activity 47' },
  { image: '/assets/studentgallery/student48.JPG', title: 'Student Activity 48' },
  { image: '/assets/studentgallery/student49.JPG', title: 'Student Activity 49' },
  { image: '/assets/studentgallery/student50.JPG', title: 'Student Activity 50' },

  { image: '/assets/studentgallery/student51.JPG', title: 'Student Activity 51' },
  { image: '/assets/studentgallery/student52.JPG', title: 'Student Activity 52' },
  { image: '/assets/studentgallery/student53.JPG', title: 'Student Activity 53' },
  { image: '/assets/studentgallery/student54.JPG', title: 'Student Activity 54' },
  { image: '/assets/studentgallery/student55.JPG', title: 'Student Activity 55' },
  { image: '/assets/studentgallery/student56.JPG', title: 'Student Activity 56' },
  { image: '/assets/studentgallery/student57.JPG', title: 'Student Activity 57' },
  { image: '/assets/studentgallery/student58.JPG', title: 'Student Activity 58' },
  { image: '/assets/studentgallery/student59.JPG', title: 'Student Activity 59' },
  { image: '/assets/studentgallery/student60.jpg', title: 'Student Activity 60' },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('school'); // State to manage active tab
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
  }, [activeTab]); // Re-run effect when activeTab changes

  const galleryItems = activeTab === 'school' ? schoolGalleryItems : studentGalleryItems;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#040873] mb-6">Gallery</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab('school')}
            className={`px-6 py-2 rounded-t-lg font-semibold ${
              activeTab === 'school' ? 'bg-[#040873] text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            School Gallery
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`px-6 py-2 rounded-t-lg font-semibold ${
              activeTab === 'students' ? 'bg-[#040873] text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Student Gallery
          </button>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 opacity-0"
            >
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