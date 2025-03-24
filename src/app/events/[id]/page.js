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
      id: 'Ani-ng-Sining',
      title: 'Ani ng Sining: Diwa At Damdamin  (Harvest Of The Arts: Soul And Passion)',
      date: 'January 10, 2025',
      description: 'Wadeford School proudly held a successful art exhibit at Citymall Kalibo, showcasing the incredible talents of its students. This event was made possible through the collaborative efforts of the SSLG, Interact Club, and Arts Club, showing the school\'s commitment to creativity and community engagement. The exhibit featured a diverse array of artworks created by students eager to express their artistic talents. And, well known Aklanon artists supported the exhibit by joining in with their works of arts. Attendees were not only treated to a visual feast but also participated in an Activity for a Cause. The exhibit not only highlighted the incredible artistic talents of the students but also brought together a vibrant community that appreciates the beauty of expression.',
      image: '/assets/eventspic/event01.JPG',
    },
    {
      id: 'Community-Journalism-Project-in-Caano',
      title: 'Community Journalism Project in Caano',
      date: 'January 20, 2025',
      description: 'Kalibo, Aklan - Wadeford School\'s School Paper Adviser, Mr. Bernard E. Bernard Fernandez, and campus journalist, Ms. Labelle Isberto Mandal, conducted a community extension project at Caano Daycare Development Center on February 20, 2025. The project, which aimed to promote basic literacy and cartooning skills, was warmly welcomed by the daycare center\'s 22 pupils and staff. Mr. Fernandez and Ms. Mandal facilitated interactive sessions, which included drawing and writing activities. The project was made possible with the consent and support of Brgy. Capt. Vic T. Mandal and Caano Daycare Coordinator, Mrs. Angeline E. Zaulda. \"We are grateful for the opportunity to share our skills and talents with the community,\" said Mr. Fernandez. \"We hope that this project will inspire the young minds of Caano to develop their creativity and love for learning.\" Ms. Mandal added, \"As campus journalists, we believe that it is our responsibility to give back to the community and make a positive impact on the lives of others.\" The community extension project is part of Wadeford School\'s commitment to social responsibility and community engagement.',
      image: '/assets/eventspic/event02.JPG',
    },
    {
      id: 'Project-ChristCHARITY-Year-1',
      title: 'Project: ChristCHARITY Year 1',
      date: 'February 15, 2025',
      description: 'Project: ChristCHARITY Year 1 successfully brought joy and spread love to the children of Ati Village with warm clothes, fun games, and sweet treats on December 15, 2024, ensuring that every child left with a smile on their face and warmth in their heart. The Interact Club of Wadeford School, along with the Supreme Secondary Learner Government of Wadeford School, had come up with a partnership project that radiates happiness and creates unforgettable memories around the community of Ati Village in Aliputos, Numancia, Aklan. The two organizations organized two exciting games for the children, with sweet treats and biscuits given as prizes. Following the fun-filled activities, they donated comfortable and warm clothes to the community. With this, we would like to extend our deepest gratitude to the Rotary Club of Kalibo for giving us the opportunity to create a difference in the lives of the children of Ati Village, a meaningful change that could have a beautiful impact on the youth. May this project inspire each of us to continue spreading happiness and love in our own ways. Let it serve as a reminder that even the smallest acts of kindness can help shape a brighter future for all.',
      image: '/assets/announcementpic03.jpg',
    },
    // {
    //   id: 'science-exhibition',
    //   title: 'Science Exhibition',
    //   date: 'July 25, 2025',
    //   description: 'Explore the wonders of science at our annual Science Exhibition! Students will showcase their innovative projects and experiments. The exhibition will be open to the public on July 25, 2025, in the school auditorium. Come and be inspired by the creativity and ingenuity of our young scientists!',
    //   image: '/assets/announcementpic01.jpg',
    // },
    {
      id: 'sports-meet',
      title: 'Sports Meet',
      date: 'September 30, 2024',
      description: 'We are pleased to announce the successful conclusion of our 2024 Sports Meet. The event was filled with excitement, teamwork, and sportsmanship as students showcased their athletic skills and competitive spirit. We extend our appreciation to all participants, coaches, organizers, and supporters who contributed to making this event a memorable one. Congratulations to all the winners and teams for their outstanding performances!',
      image: '/assets/sportsday.jpeg',
    },
    // {
    //   id: 'drama-play',
    //   title: 'Drama Play',
    //   date: 'September 10, 2025',
    //   description: 'Experience the magic of theater at our Drama Play! Our talented students will perform a captivating play on September 10, 2025, in the school auditorium. Tickets are available at the school office. Don’t miss this wonderful showcase of acting and storytelling!',
    //   image: '/assets/announcementpic01.jpg',
    // },
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