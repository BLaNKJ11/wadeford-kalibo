import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const announcements = [
  { id: 'School-Advisory1', title: 'School Advisory: No Complete Uniform and ID, No Entry', date: 'March 20, 2025', description: 'The school will reopen on March 20, 2025, for the new academic year.', image: '/assets/announcements/School-Announcements-1.JPG' },
  { id: 'School-Advisory2', title: 'School Advisory: No Classes on March 31 for Eid al-Fitr', date: 'April 5, 2025', description: 'The PTA meeting will be held on April 5, 2025, at 10:00 AM in the school auditorium.', image: '/assets/announcements/School-Announcements-2.JPG' },
  { id: 'School-Advisory3', title: 'School Advisory: No Classes on March 18 for Panay Liberation Day', date: 'May 15, 2025', description: 'Join us for the annual Sports Day event on May 15, 2025.', image: '/assets/announcements/School-Announcements-3.JPG' },
];

export default function AnnouncementSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${entry.target.dataset.index * 0.5}s`;
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.fade-in-up');
    elements.forEach((element, index) => {
      element.dataset.index = index;
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/assets/announcement-bg.jpg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-6">ANNOUNCEMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <Link key={announcement.id} href={`/announcements/${announcement.id}`} legacyBehavior>
              <a className="p-4 shadow-lg rounded-lg bg-[#040873] bg-opacity-90 fade-in-up transition-colors duration-300 ease-in-out">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img src={announcement.image} alt={announcement.title} className="w-full h-40 object-cover transition-opacity duration-300 ease-in-out hover:opacity-75" />
                </div>
                <h3 className="text-xl font-semibold text-white">{announcement.title}</h3>
                <p className="text-white text-sm">{announcement.date}</p>
                {/* <p className="mt-2 text-white">{announcement.description}</p> */}
                <span className="text-white hover:underline mt-4 block p-2 rounded hover:text-[#ded605]">Learn More</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}