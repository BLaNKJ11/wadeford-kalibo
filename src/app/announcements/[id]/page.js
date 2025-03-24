export async function generateStaticParams() {
  const announcements = [
    { id: 'school-reopening' },
    { id: 'pta-meeting' },
    { id: 'sports-day' },
  ];

  return announcements.map((announcement) => ({
    id: announcement.id,
  }));
}

export default function AnnouncementPage({ params }) {
  const announcements = [
    {
      id: 'School-Advisory1',
      title: 'School Advisory: No Complete Uniform and ID, No Entry',
      date: 'March 20, 2025',
      description: 'To maintain discipline and uphold school policies, all students are reminded that wearing a complete uniform and presenting a valid school ID is mandatory for entry into the campus. This rule ensures a safe, organized, and professional learning environment. Effective immediately, students who fail to comply will not be allowed to enter the school premises. Exceptions will only be made for valid reasons, subject to approval by school authorities. We urge everyone to follow this policy strictly and prepare accordingly before coming to school. Thank you for your cooperation in maintaining order and discipline in our institution. For concerns or special cases, please contact the school administration.',
      image: '/assets/announcements/School-Announcements-1.JPG',
    },
    {
      id: 'School-Advisory2',
      title: 'School Advisory: No Classes on March 31 for Eid al-Fitr',
      date: 'March 24, 2025',
      description: 'In observance of Eid al-Fitr, there will be no classes on March 31. This holiday marks the end of Ramadan and is a time for reflection, gratitude, and celebration for our Muslim community. Regular classes will resume on the following school day. We encourage everyone to use this time for rest, reflection, and spending quality moments with family and friends. Thank you for your attention, and we wish a joyful and blessed Eid al-Fitr to all who celebrate!',
      image: '/assets/announcements/School-Announcements-2.JPG',
    },
    {
      id: 'School-Advisory3',
      title: 'School Advisory: No Classes on March 18 for Panay Liberation Day',
      date: 'May 15, 2025',
      description: 'In commemoration of Panay Liberation Day, there will be no classes on March 18. This day honors the historic liberation of Panay Island during World War II and pays tribute to the bravery of those who fought for freedom. Regular classes will resume on the next school day. Let us take this time to reflect on our history and appreciate the sacrifices made for our nation\’s independence.',
      image: '/assets/announcements/School-Announcements-3.JPG',
    },
  ];

  const announcement = announcements.find((a) => a.id === params.id);

  if (!announcement) {
    return <p className="text-red-500">Announcement not found.</p>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
      <h1 className="text-3xl font-bold text-[#040873] mb-6">Announcement</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold text-[#040873]">{announcement.title}</h2>
          <p className="text-gray-600 ">{announcement.date}</p>
          <img src={announcement.image} alt={announcement.title} className="w-full object-cover mt-4 rounded-lg shadow-lg" />
          <p className="mt-6 text-justify">{announcement.description}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#040873]">Other Announcements</h3>
          <ul className="space-y-2 border-t border-gray-300 pt-2">
            {announcements.map((a) => (
              <li key={a.id} className="border-b border-gray-300 pb-2">
                <a href={`/announcements/${a.id}`} className="text-[#040873] hover:underline">
                  {a.title}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-[#040873] mt-6">Contents</h3>
          <ul className="space-y-2 border-t border-gray-300 pt-2">
            <li className="border-b border-gray-300 pb-2">
              <a href="/about" className="text-[#040873] hover:underline">About</a>
            </li>
            <li className="border-b border-gray-300 pb-2">
              <a href="/teachers" className="text-[#040873] hover:underline">Teachers</a>
            </li>
            <li className="border-b border-gray-300 pb-2">
              <a href="/offers" className="text-[#040873] hover:underline">Our Offers</a>
            </li>
            <li className="border-b border-gray-300 pb-2">
              <a href="/gallery" className="text-[#040873] hover:underline">Gallery</a>
            </li>
            <li>
              <a href="/login" className="text-[#040873] hover:underline">Login</a>
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#040873]">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.969288317208!2d122.37963359999998!3d11.6965877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a59d0bfa7c2687%3A0x8b7b454c17d3248c!2sWadeford%20School!5e0!3m2!1sen!2sph!4v1742226074829!5m2!1sen!2sph"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
