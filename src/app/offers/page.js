"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  '/assets/offers-1.JPG',
  '/assets/offers-2.JPG',
  '/assets/offers-3.JPG',
];

export default function OffersPage() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#ddd",
        }}
      />
    ),
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#040873] mb-6">Our Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 text-justify">
            <h3 className="text-2xl font-semibold text-[#040873]">Junior High School Offers</h3>
            <p>
              Our Junior High School program offers a comprehensive curriculum designed to prepare students for higher education. We focus on academic excellence, personal growth, and extracurricular activities to ensure a well-rounded education.
            </p>
            <h3 className="text-2xl font-semibold text-[#040873]">Senior High School Offers</h3>
            <p>
              Our Senior High School program provides students with the skills and knowledge needed for college and career readiness. We offer specialized tracks in:
            </p>
            <h4 className="text-xl font-semibold text-[#040873]">Academic Track:</h4>
            <ul className="list-disc list-inside">
              <li>Science, Technology, Engineering, Mathematics (STEM)</li>
              <li>Accountancy, Business, and Management (ABM)</li>
              <li>Humanities and Social Sciences (HUMSS)</li>
              <li>General Academic Strand (GAS)</li>
            </ul>
            <h4 className="text-xl font-semibold text-[#040873]">Arts and Design Track:</h4>
            <p>
              Our Arts and Design Track is designed for students who are passionate about the arts and want to pursue a career in creative fields. This track provides comprehensive training in various art forms and design principles.
            </p>
          </div>
          <div className="space-y-4">
            <Slider {...sliderSettings}>
              {sliderImages.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[650px] object-contain rounded-lg" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}