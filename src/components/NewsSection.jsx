import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';



const newsItems = [
  { title: 'New Library Books', date: 'March 5, 2025', image: '/assets/gallerypics/gallerypicschool20.jpg', link: '/news/new-library-books' },
  { title: 'Art Exhibition', date: 'February 28, 2025', image: '/assets/gallerypics/gallerypicschool11.jpg', link: '/news/art-exhibition' },
  { title: 'Science Fair Winners', date: 'March 10, 2025', image: '/assets/gallerypics/gallerypicschool17.jpg', link: '/news/science-fair-winners' },
  // { title: 'Sports Day', date: 'May 15, 2025', image: '/assets/sportsday.jpeg', link: '/news/sports-day' },
  { title: 'PTA Meeting', date: 'April 5, 2025', image: '/assets/school-default-pic.jpeg', link: '/news/pta-meeting' },
  { title: 'School Renovation', date: 'March 1, 2025', image: '/assets/school-default-pic.jpeg', link: '/news/school-renovation' },
];

const eventsItems = [
  { title: 'Ani ng Sining: Diwa At Damdamin', date: 'January 10, 2025', image: '/assets/eventspic/event01.JPG', link: '/events/Ani-ng-Sining' },
  { title: 'Music Concert', date: 'May 20, 2025', image: '/assets/eventspic/event02.JPG', link: '/events/music-concert' },
  { title: 'Art Workshop', date: 'June 15, 2025', image: '/assets/eventspic/event03.JPG', link: '/events/art-workshop' },
  // { title: 'Science Exhibition', date: 'July 25, 2025', image: '/assets/gallerypics/gallerypicschool17.jpg', link: '/events/science-exhibition' },
  { title: 'Sports Meet', date: 'September 30, 2024', image: '/assets/sportsday.jpeg', link: '/events/sports-meet' },
  // { title: 'Drama Play', date: 'September 10, 2025', image: '/assets/school-default-pic.jpeg', link: '/events/drama-play' },
];

const newsSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
};

const eventsSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white bg-black bg-opacity-50 p-2 cursor-pointer`}
      style={{ ...style, display: 'block', right: '10px', zIndex: 2 }}
      onClick={onClick}
    >
      Next
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white bg-black bg-opacity-50 p-2 cursor-pointer`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 2 }}
      onClick={onClick}
    >
      Prev
    </div>
  );
}

export default function NewsSection() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
      <div className="flex items-center mb-6">
        <div className="flex space-x-2 mr-4">
          <PrevArrow className="slick-prev" />
          <NextArrow className="slick-next" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#040873]">News</h2>
          <div className="h-1 bg-[#040873] mt-2"></div>
        </div>
      </div>
      <Slider {...newsSliderSettings}>
        {newsItems.map((news, index) => (
          <Link key={index} href={news.link} legacyBehavior>
          <div key={index} className="p-4 cursor-pointer">
            <div className="flex flex-col items-start space-y-4 transition-transform duration-300">
              <div className="relative overflow-hidden w-full">
                <img src={news.image} alt={news.title} className="w-full h-40 object-cover transition-opacity duration-300 ease-in-out hover:opacity-75" />
                <div className="absolute inset-0 bg-[#040873] opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="text-left p-4 w-full">
                <h3 className="text-lg font-semibold text-[#040873] hover:underline">{news.title}</h3>
                <p className="mt-4 text-gray-600">{news.date}</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </Slider>

      <div className="flex items-center mt-12 mb-6">
        <div className="flex space-x-2 mr-4">
          <PrevArrow className="slick-prev" />
          <NextArrow className="slick-next" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#040873]">Events</h2>
          <div className="h-1 bg-[#040873] mt-2"></div>
        </div>
      </div>
      <Slider {...eventsSliderSettings}>
        {eventsItems.map((event, index) => (
          <Link key={index} href={event.link} legacyBehavior>
          <div key={index} className="p-4 cursor-pointer">
            <div className="flex flex-col items-start space-y-4 transition-transform duration-300">
              <div className="relative overflow-hidden w-full">
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover transition-opacity duration-300 ease-in-out hover:opacity-75" />
                <div className="absolute inset-0 bg-[#040873] opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="text-left p-4 w-full">
                <h3 className="text-lg font-semibold text-[#040873] hover:underline">{event.title}</h3>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
}