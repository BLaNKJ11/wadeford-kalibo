export async function generateStaticParams() {
  const events = [
    { id: 'spring-festival' },
    { id: 'music-concert' },
    { id: 'art-workshop' },
    { id: 'science-exhibition' },
    { id: 'sports-meet' },
    { id: 'drama-play' },
  ];

  return events.map((item) => ({
    id: item.id,
  }));
}

export default function EventPage({ params }) {
  const events = [
    {
      id: 'spring-festival',
      title: 'Spring Festival',
      date: 'April 10, 2025',
      description: 'Celebrate the arrival of spring with our annual Spring Festival! Enjoy a day filled with fun activities, food stalls, live music, and games for the whole family. The event will take place on April 10, 2025, at the school grounds. Don’t miss this exciting celebration!',
      image: '/assets/announcementpic01.jpg',
    },
    {
      id: 'music-concert',
      title: 'Music Concert',
      date: 'May 20, 2025',
      description: 'Join us for an evening of musical performances by our talented students and guest artists. The Music Concert will be held on May 20, 2025, in the school auditorium. Tickets are available at the school office. Come and enjoy a night of beautiful melodies and entertainment!',
      image: '/assets/announcementpic01.jpg',
    },
    {
      id: 'art-workshop',
      title: 'Art Workshop',
      date: 'June 15, 2025',
      description: 'Unleash your creativity at our Art Workshop! This hands-on event is open to students of all ages and skill levels. Learn new techniques and create your own masterpiece under the guidance of professional artists. The workshop will be held on June 15, 2025, in the art room.',
      image: '/assets/announcementpic01.jpg',
    },
    {
      id: 'science-exhibition',
      title: 'Science Exhibition',
      date: 'July 25, 2025',
      description: 'Explore the wonders of science at our annual Science Exhibition! Students will showcase their innovative projects and experiments. The exhibition will be open to the public on July 25, 2025, in the school auditorium. Come and be inspired by the creativity and ingenuity of our young scientists!',
      image: '/assets/announcementpic01.jpg',
    },
    {
      id: 'sports-meet',
      title: 'Sports Meet',
      date: 'August 30, 2025',
      description: 'Get ready for an action-packed day at our annual Sports Meet! Students will compete in various athletic events, including track and field, team sports, and more. The event will take place on August 30, 2025, at the school sports complex. Cheer on your favorite teams and athletes!',
      image: '/assets/announcementpic01.jpg',
    },
    {
      id: 'drama-play',
      title: 'Drama Play',
      date: 'September 10, 2025',
      description: 'Experience the magic of theater at our Drama Play! Our talented students will perform a captivating play on September 10, 2025, in the school auditorium. Tickets are available at the school office. Don’t miss this wonderful showcase of acting and storytelling!',
      image: '/assets/announcementpic01.jpg',
    },
  ];

  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return <p className="text-red-500">Event not found.</p>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
      <h1 className="text-3xl font-bold text-[#040873] mb-6">Event</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold text-[#040873]">{event.title}</h2>
          <p className="text-gray-600">{event.date}</p>
          <img src={event.image} alt={event.title} className="w-full h-64 object-cover mt-4 rounded-lg shadow-lg" />
          <p className="mt-6 text-justify">{event.description}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#040873]">Other Events</h3>
          <ul className="space-y-2 border-t border-gray-300 pt-2">
            {events.map((e) => (
              <li key={e.id} className="border-b border-gray-300 pb-2">
                <a href={`/events/${e.id}`} className="text-[#040873] hover:underline">
                  {e.title}
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