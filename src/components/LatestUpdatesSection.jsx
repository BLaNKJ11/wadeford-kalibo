import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const latestUpdates = [
  { title: 'Science Fair Winners', date: 'March 10, 2025', description: 'Congratulations to the winners of the annual Science Fair.', image: '/assets/announcementpic01.jpg', link: '/updates/science-fair-winners' },
  { title: 'New Library Books', date: 'March 5, 2025', description: 'We have added new books to the library. Check them out!', image: '/assets/announcementpic01.jpg', link: '/updates/new-library-books' },
  { title: 'Art Exhibition', date: 'February 28, 2025', description: 'Join us for the art exhibition showcasing student artwork.', image: '/assets/announcementpic01.jpg', link: '/updates/art-exhibition' },
  { title: 'Sports Day', date: 'May 15, 2025', description: 'Join us for the annual Sports Day event on May 15, 2025.', image: '/assets/announcementpic01.jpg', link: '/updates/sports-day' },
  { title: 'PTA Meeting', date: 'April 5, 2025', description: 'The PTA meeting will be held on April 5, 2025, at 10:00 AM in the school auditorium.', image: '/assets/announcementpic01.jpg', link: '/updates/pta-meeting' },
];

const smallArticles = [
  { title: 'School Renovation', date: 'March 1, 2025', image: '/assets/announcementpic01.jpg', link: '/updates/school-renovation' },
  { title: 'New Cafeteria Menu', date: 'February 25, 2025', image: '/assets/announcementpic01.jpg', link: '/updates/new-cafeteria-menu' },
  { title: 'Teacher Training', date: 'February 20, 2025', image: '/assets/announcementpic01.jpg', link: '/updates/teacher-training' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black`}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default function LatestUpdatesSection() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Latest Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-6">
            <Slider {...sliderSettings}>
              {latestUpdates.map((update, index) => (
                <div key={index} className="border border-gray-300 shadow-lg rounded-lg bg-white">
                  <div className="overflow-hidden">
                    <img src={update.image} alt={update.title} className="w-full h-60 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 m-0" />
                  </div>
                  <h3 className="text-xl font-semibold px-4">{update.title}</h3>
                  <p className="text-gray-600 px-4">{update.date}</p>
                  <p className="mt-2 text-gray-700 px-4">{update.description}</p>
                  <a href={update.link} className=" px-4 text-blue-500 hover:underline mt-4 block">Read More</a>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-col space-y-2">
            {smallArticles.map((article, index) => (
              <div key={index} className="flex p-4 border border-gray-300 shadow-lg bg-white">
                <div className="overflow-hidden w-20 h-20 flex-shrink-0">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <h3 className="text-sm font-semibold">{article.title}</h3>
                  <p className="text-xs text-gray-600">{article.date}</p>
                  <a href={article.link} className="text-sm text-blue-500 hover:underline mt-2 block">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-96 md:col-span-1">
          <iframe
            title="Wadeford School Kalibo Aklan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.969288317208!2d122.37963359999998!3d11.6965877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a59d0bfa7c2687%3A0x8b7b454c17d3248c!2sWadeford%20School!5e0!3m2!1sen!2sph!4v1742017968653!5m2!1sen!2sph"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-4">
            <h3 className="text-lg font-semibold">Wadeford School Kalibo Aklan</h3>
            <p className="text-gray-600">123 Main St, Kalibo, Aklan, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
}