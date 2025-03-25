"use client";

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AnnouncementSection from '@/components/AnnouncementSection';
import LatestUpdatesSection from '@/components/LatestUpdatesSection';
import NewsSection from '@/components/NewsSection';
import Image from 'next/image'; // Import Image from next/image

const slides = [
  { image: '/assets/hero-bg01.jpeg', title: 'Empowering Education for the Future', text: 'Your one-stop portal for school information and management.' },
  { image: '/assets/hero-bg02.JPG', title: 'Innovate & Learn', text: 'Bringing modern technology into education.' },
  { image: '/assets/hero-bg03.jpg', title: 'Shape the Future', text: 'Empowering students and teachers alike.' }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Hero Slider */}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-white overflow-hidden z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 bg-fixed ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${slide.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="bg-black/50 absolute inset-0"></div>
            <div className="relative z-10 px-6 text-center">
              <h2 className="text-5xl font-bold">{slide.title}</h2>
              <p className="mt-4 text-lg text-gray-200">{slide.text}</p>
            </div>
          </div>
        ))}
      </section>
      
      {/* Three Column Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Huge Campus', image: '/assets/gallerypics/gallerypicschool06.jpg', text: 'Our School has a very big campus area for students to play outdoor games. It\'s important to improve their physical body of students, school conduct PT (Physical Training) event on every Saturday.' },
          { title: 'Comfortable Classrooms', image: '/assets/gallerypics/gallerypicschool13.jpg', text: 'All the latest facility are provided by Wadeford, the school has big buildings with advanced classroom where students can sit comfortable and study to make their future bride.' },
          { title: 'Experienced Teachers', image: '/assets/column03.JPG', text: 'All the faculties are extremely intelligent and supportive. They teach every student very transparently and friendly. All the teachers are well qualified and expert in their subjects.' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 p-4 border border-gray-300 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-40 object-cover rounded-lg mt-0"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Announcement Section */}
      <AnnouncementSection />

      {/* Latest Updates Section
      <LatestUpdatesSection /> */}

      {/* News Section */}
      <NewsSection />
      
    </div>
  );
}