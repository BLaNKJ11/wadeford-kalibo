export async function generateStaticParams() {
  const news = [
    { id: 'new-library-books' },
    { id: 'art-exhibition' },
    { id: 'science-fair-winners' },
    { id: 'sports-day' },
    { id: 'pta-meeting' },
    { id: 'school-renovation' },
  ];

  return news.map((item) => ({
    id: item.id,
  }));
}

export default function NewsPage({ params }) {
  const news = [
    {
      id: 'new-library-books',
      title: 'New Library Books',
      date: 'March 5, 2025',
      description: 'We are excited to announce the arrival of new books in our school library. These books cover a wide range of topics, including science, literature, history, and more. Students are encouraged to visit the library and explore the new collection. This is part of our ongoing effort to promote reading and learning among our students.',
      image: '/assets/gallerypics/gallerypicschool20.jpg',
    },
    {
      id: 'art-exhibition',
      title: 'Art Exhibition',
      date: 'February 28, 2025',
      description: 'Join us for the annual art exhibition showcasing the creative talents of our students. The event will feature paintings, sculptures, and other artworks created by students from all grade levels. The exhibition will be held in the school auditorium from February 28 to March 5, 2025. Everyone is welcome to attend and support our young artists.',
      image: '/assets/gallerypics/gallerypicschool11.jpg',
    },
    {
      id: 'science-fair-winners',
      title: 'Science Fair Winners',
      date: 'March 10, 2025',
      description: 'Congratulations to the winners of this year’s science fair! The event was a great success, with students presenting innovative projects and experiments. The winning projects will be displayed in the school lobby for the next two weeks. We are proud of all participants for their hard work and creativity.',
      image: '/assets/gallerypics/gallerypicschool17.jpg',
    },
    // {
    //   id: 'sports-day',
    //   title: 'Sports Day',
    //   date: 'May 15, 2025',
    //   description: 'Join us for the annual Sports Day event on May 15, 2025. This fun-filled day will include a variety of athletic competitions, games, and activities for students of all ages. Parents and families are welcome to attend and cheer on the participants. There will be food stalls, music, and entertainment throughout the day. Don’t miss this exciting event that celebrates sportsmanship and school spirit. We hope to see you there!',
    //   image: '/assets/sportsday.jpeg',
    // },
    {
      id: 'pta-meeting',
      title: 'PTA Meeting',
      date: 'April 5, 2025',
      description: 'The PTA meeting will be held on April 5, 2025, at 10:00 AM in the school auditorium. All parents and guardians are encouraged to attend. This meeting will provide an opportunity to discuss important school matters, upcoming events, and ways to support our students. Your participation and input are highly valued. Refreshments will be provided. We look forward to seeing you there.',
      image: '/assets/school-default-pic.jpeg',
    },
    {
      id: 'school-renovation',
      title: 'School Renovation',
      date: 'March 1, 2025',
      description: 'We are pleased to announce that the school renovation project has been completed. The project included upgrades to classrooms, the library, and the sports facilities. These improvements aim to provide a better learning environment for our students and staff. Thank you for your patience and support during the renovation period.',
      image: '/assets/school-default-pic.jpeg',
    },
  ];

  const newsItem = news.find((n) => n.id === params.id);

  if (!newsItem) {
    return <p className="text-red-500">News item not found.</p>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
      <h1 className="text-3xl font-bold text-[#040873] mb-6">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold text-[#040873]">{newsItem.title}</h2>
          <p className="text-gray-600">{newsItem.date}</p>
          <img src={newsItem.image} alt={newsItem.title} className="w-full h-64 object-cover mt-4 rounded-lg shadow-lg" />
          <p className="mt-6 text-justify">{newsItem.description}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#040873]">Other News</h3>
          <ul className="space-y-2 border-t border-gray-300 pt-2">
            {news.map((n) => (
              <li key={n.id} className="border-b border-gray-300 pb-2">
                <a href={`/news/${n.id}`} className="text-[#040873] hover:underline">
                  {n.title}
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