
import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold">WADEFORD</h1>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      <ul className={`flex-col md:flex-row md:flex space-x-6 items-center ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <li><Link href="/" className="px-3 py-2 rounded">Home</Link></li>
        <li><Link href="/about" className="px-3 py-2 rounded">About</Link></li>
        <li><Link href="/teachers" className="px-3 py-2 rounded">Teachers</Link></li>
        <li><Link href="/students" className="px-3 py-2 rounded">Our Students</Link></li>
        <li><Link href="/contact" className="px-3 py-2 rounded">Contact</Link></li>
        <li>
          <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/80" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}