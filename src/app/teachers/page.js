"use client";

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const teachers = [

  { name: 'Reinan Rufin', department: 'Grade 12 STEM Class Advisor', image: '/assets/teachers/ReinanRufin.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Dianne Daphnie Revesencio', department: 'Grade 12 HUMMS Class Advisor', image: '/assets/teachers/DianneDaphnieRevesencio.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Isidro Renacido', department: 'Grade 12 GAS Class Advisor', image: '/assets/teachers/IsidroRenacido.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Kimberly Jane Jutic', department: 'Grade 12 ARTS & DESIGN Class Advisor', image: '/assets/teachers/KimberlyJaneJutic.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Lourdes Imaysay Icabandi', department: 'Grade 11 HUMMS Class Advisor', image: '/assets/teachers/LourdesImaysayIcabandi.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Niña Rose Bantaran', department: 'Grade 12 ABM Class Advisor', image: '/assets/blank-profile.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Geraldine Barte', department: 'Grade 11 STEM Class Advisor', image: '/assets/teachers/GeraldineBarte.png', facebook: '#', twitter: '#', instagram: '#' },
  { name: 'Lovely Mae Ropero', department: 'Grade 8 Class Advisor', image: '/assets/teachers/LovelyMaeRopero.png', facebook: '#', twitter: '#', instagram: '#' },
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
              <h2 className="text-lg font-semibold mb-2">{teacher.name}</h2>
              <p className="text-gray-600 mb-4 text-center">{teacher.department}</p>
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