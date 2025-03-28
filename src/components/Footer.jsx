import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 text-gray-400 space-y-1">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/teachers" className="hover:text-white">Teachers</Link></li>
            <li><Link href="/offers" className="hover:text-white">Our Offers</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>
        
        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold">Our Address</h3>
          <p className="mt-2 text-gray-400">SITIO KAMANGGAHAN, POOK KALIBO, AKLAN 5600</p>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 text-gray-400">Phone No.: 09518568888</p>
          <p className="mt-1 text-gray-400">Telephone No.: 268-6474</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex flex-col items-center md:items-start space-y-3 mt-2">
            <Link href="https://facebook.com/wadefordschoolofficial" target="_blank" className="flex items-center space-x-2 text-gray-400 hover:text-white">
              <FaFacebook className="text-2xl" />
              <span>facebook.com/wadefordschoolofficial</span>
            </Link>
            {/* <Link href="/" target="_blank" className="flex items-center space-x-2 text-gray-400 hover:text-white">
              <FaTwitter className="text-2xl" />
              <span>twitter.com/wadeford</span>
            </Link>
            <Link href="/" target="_blank" className="flex items-center space-x-2 text-gray-400 hover:text-white">
              <FaInstagram className="text-2xl" />
              <span>instagram.com/wadeford</span>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">&copy; 2025 Wadeford Information System. All rights reserved.</div>
    </footer>
  );
}