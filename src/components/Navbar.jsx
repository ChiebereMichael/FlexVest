'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    return `text-gray-600 hover:text-blue-600 ${pathname === path ? 'text-blue-600 font-medium' : ''}`;
  };

  return (
    <nav className="flex items-center font-mono justify-between px-4 py-4 bg-white relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.svg" alt="FlemVex Logo" width={120} height={120} priority />
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className="lg:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between flex-1 ml-18">
        <div className="flex gap-8">
          <Link href="/personal" className={getLinkClass('/personal')}>Personal</Link>
          <Link href="/business" className={getLinkClass('/business')}>Business</Link>
          <Link href="/faqs" className={getLinkClass('/faqs')}>FAQs</Link>
          <Link href="/resources" className={getLinkClass('/resources')}>Resources</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href='/auth/login'><button className="px-4 py-2 rounded-xl text-blue1 hover:text-blue-700 border-1 font-semibold border-blue1">Sign In</button></Link>
          <button className="px-4 py-2 bg-blue1 text-white font-semibold rounded-lg hover:bg-blue2">
            Create Free Account
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-24">
          <div className="flex flex-col items-center gap-6 text-ash p-4">
            <Link href="/personal" className={getLinkClass('/personal')}>Personal</Link>
            <Link href="/business" className={getLinkClass('/business')}>Business</Link>
            <Link href="/faqs" className={getLinkClass('/faqs')}>FAQs</Link>
            <Link href="/resources" className={getLinkClass('/resources')}>Resources</Link>
            <button className="px-4 py-2 text-blue1 hover:text-blue2">Sign In</button>
            <button className="px-4 py-2 bg-blue1 text-white rounded-lg hover:bg-blue2 w-full">
              Create Free Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
