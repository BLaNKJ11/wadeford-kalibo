import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#040873] text-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">WADEFORD</h1>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="px-3 py-2 rounded hover:bg-[#ded605] transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="px-3 py-2 rounded hover:bg-[#ded605] transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/teachers" className="px-3 py-2 rounded hover:bg-[#ded605] transition-colors duration-300">
              Teachers
            </Link>
          </li>
          <li>
            <Link href="/students" className="px-3 py-2 rounded hover:bg-[#ded605] transition-colors duration-300">
              Our Offers
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="px-3 py-2 rounded hover:bg-[#ded605] transition-colors duration-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="px-3 py-2 rounded hover:bg-[#ded605] transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}