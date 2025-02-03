"use client";

import { useState, useEffect, JSX } from "react";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

export default function Header(): JSX.Element {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-transparent text-white py-4 px-6 flex justify-between items-center`}
    >
      <div className="text-2xl font-bold flex items-center">
        <span className="mr-2">\uD83D\uDCBB</span> ANYTECH
      </div>
      <nav className="flex items-center space-x-6">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-gray-300"
          >
            Solutions ▼
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 bg-white text-black shadow-lg rounded-lg py-2 w-40">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                AnyCaaS
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                AnyBaaS
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                AnyPaaS
              </Link>
            </div>
          )}
        </div>
        <Link href="#" className="hover:text-gray-300">
          Services
        </Link>
        <Link href="#" className="hover:text-gray-300">
          About Us
        </Link>
        <button className="flex items-center hover:text-gray-300">
          <FaGlobe className="mr-1" /> EN
        </button>
        <Link
          href="#"
          className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
