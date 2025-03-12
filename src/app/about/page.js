import { FaBullseye, FaEye, FaDumbbell } from 'react-icons/fa';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Start your children's journey to a better future life</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-6">
          {/* Mission Section */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg flex items-center space-x-4">
            <FaBullseye className="text-6xl text-blue-500" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Mission</h2>
              <p className="text-gray-700">Wadeford School is a dynamic, innovative, and caring educational institution committed to the formation of leaders in accordance with Christian ideals.</p>
            </div>
          </div>
          
          {/* Vision Section */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg flex items-center space-x-4">
            <FaEye className="text-6xl text-blue-500" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Vision</h2>
              <p className="text-gray-700">A society transformed by principled Christian leaders deeply rooted in values formed by balanced intellectual and personal formation programs.</p>
            </div>
          </div>
          
          {/* Physical Training Camps */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg flex items-center space-x-4">
            <FaDumbbell className="text-6xl text-blue-500" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Physical Training Camps</h2>
              <p className="text-gray-700">Our physical training camps are very large, allowing students to practice and stretch to strengthen their bodies.</p>
            </div>
          </div>
        </div>
        
        <Image src="/assets/about-image.jpg" alt="Physical Training" width={500} height={500} className="rounded-lg shadow-lg object-cover" />
      </div>
    </div>
  );
}
