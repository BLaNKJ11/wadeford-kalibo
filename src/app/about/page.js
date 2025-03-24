"use client";

import { FaBullseye, FaEye, FaDumbbell } from 'react-icons/fa';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#040873]">
          Start your children&apos;s journey to a better future life
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            {/* Mission Section */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg flex items-center space-x-4">
              <FaBullseye className="text-6xl text-blue-500" />
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-[#040873]">Mission</h2>
                <p className="text-gray-700">
                  Wadeford School is a dynamic, innovative, and caring educational institution committed to the formation of leaders in accordance with Christian ideals.
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg flex items-center space-x-4">
              <FaEye className="text-6xl text-blue-500" />
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-[#040873]">Vision</h2>
                <p className="text-gray-700">
                  A society transformed by principled Christian leaders deeply rooted in values formed by balanced intellectual and personal formation programs.
                </p>
              </div>
            </div>

            {/* Physical Training Camps */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg flex items-center space-x-4">
              <FaDumbbell className="text-6xl text-blue-500" />
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-[#040873]">Physical Training Camps</h2>
                <p className="text-gray-700">
                  Our physical training camps are very large, allowing students to practice and stretch to strengthen their bodies.
                </p>
              </div>
            </div>
          </div>

          <Image
            src="/assets/about-image.jpg"
            alt="About Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#040873]">History of Wadeford School</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 leading-relaxed">
            In Kalibo, Aklan, a small group of concerned parents searched for a school for their children. It was a dream school they were looking for, and none met their expectations.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            They found a guide - Bishop Gabriel V. Reyes, who introduced them in January 2003 to some members of Opus Dei and PAREF, Parents for Education Foundation, which operates exclusive schools like Woodrose, Southridge, Northfield, Westbridge, Rosehill, Ridgefield, etc. In that meeting, they discussed the possibility of having a PAREF-assisted school in Aklan. Two months later, the Wadeford Foundation, Inc. was organized and opened in June 2003 a Preparatory School (Nursery, Junior Kindergarten, Senior Kindergarten) and Grades 1-5 of the Elementary School. In the academic year 2004-2005, the school opened a Toddler&apos;s class and Grade six. Due to the increasing number of enrollees in the Preschool, the Preschool Annex building was inaugurated on August 3, 2006.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            After five long years of being established and with the strong commitment of the parents, Board of Directors, and teachers to the Mission and Vision of the school, a plan of having a new site was proposed. It was presented during the Parent Coordinators' Get Together on August 2, 2007. The blessing of the new site and the groundbreaking for the new building was on January 9, 2008, on the birth anniversary of St. Josemaria Escriva, Patron Saint of Wadeford School. The new school site is located in Andagao, Kalibo, Aklan. After four months of construction, the new Wadeford School finally became a reality. On June 16, 2008, the new Wadeford started its operation.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            However, to meet the requirement for accreditation, the school had to look for means to own its school and site buildings. Again, Bishop Gabriel V. Reyes, D.D. came to the rescue. He donated his own property, a 1.1-hectare land in Barangay Pook, Kalibo, Aklan. The groundbreaking was on October 12, 2011. In June 2018, Wadeford moved to its permanent home.
          </p>
        </div>
      </div>

      {/* Wadeford School Hymn Section */}
      <div className="w-full bg-[#040873] text-white p-6 shadow-lg">
        <h2 className="container mx-auto text-2xl font-semibold mb-4">WADEFORD SCHOOL HYMN</h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="space-y-2">
            <p>I</p>
            <p>Riding on the cresting waves</p>
            <p>With banners high, its flag unfurled</p>
            <p>Sailing on from dawn to dawn</p>
            <p>Towards a great and bright horizon</p>
            <p>Waves we&apos;ve conquered, streams we&apos;ve forded</p>
            <p>Together as principled Christian leaders</p>
            <p>Wisdom toiled for will live forever</p>
            <p>Hail, O hail our dear Alma Mater</p>
          </div>
          <div className="space-y-2">
            <p>II</p>
            <p>Hail forever, Wadeford School</p>
            <p>Noble, strong, steadfast and true</p>
            <p>Let your banners proudly fly</p>
            <p>Shining high, the gold and blue.</p>
            <p>Live on, sail on, ford life&apos;s streams</p>
            <p>Fill your sons&apos; and daughters&apos; dreams</p>
            <p>CHORUS</p>
            <p>Facere et Docere, Facere et Docere</p>
            <p>Learning by example, living by its principle</p>
            <p>Your legacy, our character</p>
            <p>Wadeford School, we&apos;ve built together</p>
            <p>Hail forever, Beloved Alma Mater!</p>
          </div>
          <div className="space-y-2">
            <p>III</p>
            <p>Inspired by the life and noble deeds</p>
            <p>Of St. Jose Maria, our patron saint</p>
            <p>Virtues to live by, examples shown</p>
            <p>Values formed, a society transformed</p>
            <p>Adversities we&apos;ll strive to conquer</p>
            <p>Together as principled Christian leaders</p>
            <p>Wisdom toiled for will live forever</p>
            <p>Hail, O Wadeford, our Alma Mater</p>
            <p>(Repeat Chorus)</p>
          </div>
        </div>
        <div className="container mx-auto flex justify-center items-center mt-6">
          <video controls className="rounded-lg shadow-lg w-full h-auto">
            <source src="/assets/Wadeford_Hymn.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}