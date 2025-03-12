"use client";

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const teachers = [
  { name: 'Juan Dela Cruz', rank: 'Professor', image: '/assets/blank-profile.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Juan Dela Cruz', rank: 'Associate Professor', image: '/assets/blank-profile.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Juan Dela Cruz', rank: 'Assistant Professor', image: '/assets/blank-profile.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Juan Dela Cruz', rank: 'Lecturer', image: '/assets/blank-profile.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Juan Dela Cruz', rank: 'Senior Lecturer', image: '/assets/blank-profile.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Juan Dela Cruz', rank: 'Professor', image: '/assets/blank-profile.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Juan Dela Cruz', rank: 'Associate Professor', image: '/assets/blank-profile.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Juan Dela Cruz', rank: 'Assistant Professor', image: '/assets/blank-profile.png', facebook: '#', twitter: '#', instagram: '#' },
];

export default function Teachers() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">Our Teachers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image src={teacher.image} alt={teacher.name} width={150} height={150} className="rounded-full mb-4" />
              <h2 className="text-xl font-semibold mb-2">{teacher.name}</h2>
              <p className="text-gray-600 mb-4">{teacher.rank}</p>
              <div className="flex space-x-4">
                <a href={teacher.facebook} className="text-blue-600 hover:text-blue-800 transition-colors duration-300"><FaFacebook size={24} /></a>
                <a href={teacher.twitter} className="text-blue-400 hover:text-blue-600 transition-colors duration-300"><FaTwitter size={24} /></a>
                <a href={teacher.instagram} className="text-pink-600 hover:text-pink-800 transition-colors duration-300"><FaInstagram size={24} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}