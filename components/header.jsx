import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
        className={`bg-white flex items-center justify-between py-10 max-md:px-10 px-[80px] ${
            isMenuOpen ? 'sticky top-0 left-0 z-10' : '' }`}
            style={{ position: isMenuOpen ? 'sticky' : 'relative' }}
    >
        <div className="flex items-center">
            <Image src="/icon/logomuda.png" width={176} height={176} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-12">
            <Link className="font-inter font-bold text-sm hover:text-[#4BBCBF]" href="#">
            Home
            </Link>
            <Link className="font-inter font-bold text-sm hover:text-[#4BBCBF]" href="#">
            About
            </Link>
            <Link className="font-inter font-bold text-sm hover:text-[#4BBCBF]" href="#">
            Our Services
            </Link>
            <Link className="font-inter font-bold text-sm hover:text-[#4BBCBF]" href="#">
            Contact
            </Link>
        </div>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
            </svg>
            </button>
        </div>
        {isMenuOpen && (
            <div className="md:hidden absolute top-20 right-4 bg-white w-48 py-2 space-y-2 text-end">
            <a
                href="#"
                className="block text-black px-4 py-1 font-inter font-medium text-xs hover:text-[#4BBCBF]"
            >
                Home
            </a>
            <a
                href="#"
                className="block text-black px-4 py-1 font-inter font-medium text-xs hover:text-[#4BBCBF]"
            >
                About
            </a>
            <a
                href="#"
                className="block text-black px-4 py-1 font-inter font-medium text-xs hover:text-[#4BBCBF]"
            >
                Our Services
            </a>
            <a
                href="#"
                className="block text-black px-4 py-1 font-inter font-medium text-xs hover:text-[#4BBCBF]"
            >
                Contact
            </a>
            </div>
        )}
    </header>
);}

export default Header;