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
      id: 'school-reopening',
      title: 'School Reopening',
      date: 'March 20, 2025',
      description: 'The school will reopen on March 20, 2025, for the new academic year. We are excited to welcome back all students and staff. Please ensure that you have completed all necessary preparations for the new term. The school has implemented new safety protocols to ensure the health and well-being of everyone. We look forward to a productive and successful year ahead. For more information, please visit our website or contact the school office.',
      image: '/assets/announcementpic01.jpg',
    },
    {
      id: 'pta-meeting',
      title: 'PTA Meeting',
      date: 'April 5, 2025',
      description: 'The PTA meeting will be held on April 5, 2025, at 10:00 AM in the school auditorium. All parents and guardians are encouraged to attend. This meeting will provide an opportunity to discuss important school matters, upcoming events, and ways to support our students. Your participation and input are highly valued. Refreshments will be provided. We look forward to seeing you there.',
      image: '/assets/announcementpic01.jpg',
    },
    {
      id: 'sports-day',
      title: 'Sports Day',
      date: 'May 15, 2025',
      description: 'Join us for the annual Sports Day event on May 15, 2025. This fun-filled day will include a variety of athletic competitions, games, and activities for students of all ages. Parents and families are welcome to attend and cheer on the participants. There will be food stalls, music, and entertainment throughout the day. Don’t miss this exciting event that celebrates sportsmanship and school spirit. We hope to see you there!',
      image: '/assets/announcementpic01.jpg',
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
          <img src={announcement.image} alt={announcement.title} className="w-full h-64 object-cover mt-4 rounded-lg shadow-lg" />
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
