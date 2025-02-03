"use client";

import { useState, useEffect, JSX } from "react";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";
import Button from "../common/button";
import { nav } from "@/data/store";

export default function Header(): JSX.Element {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setIsSticky(window.scrollY > 200);
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${isSticky ? "bg-white shadow-md" : "bg-transparent"} py-4 px-6 text-${
        isSticky ? "black" : "white"
      }`}
    >
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-2xl font-bold flex items-center">
          <Link href="/">
            <Image
              src={isSticky ? "/assets/logo-blue.svg" : "/assets/logo.svg"}
              alt="Logo"
              width={170}
              height={27}
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          {nav.map((item) => {
            if (item.subMenu) {
              return (
                <div className="relative" key={item.id}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="hover:text-gray-300"
                  >
                    {item.label} ▼
                  </button>
                  {dropdownOpen && (
                    <div className="absolute mt-2 bg-white text-black shadow-lg rounded-lg py-2 w-40">
                      {item.subMenu.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.href}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="hover:text-gray-300"
                >
                  {item.label}
                </Link>
              );
            }
          })}

          <button className="flex items-center hover:text-gray-300">
            <FaGlobe className="mr-1" /> EN
          </button>
        </nav>
        <div>
          {/* <Link
            href="#"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              isSticky
                ? "bg-orrange text-white hover:bg-blue-700"
                : "bg-white text-blue-900 hover:bg-gray-200"
            }`}
          >
            Contact Us
          </Link> */}
          <Button
            href="#"
            variant={isSticky ? "primary" : "outline"}
            className={`!border-white !text-white ${
              isSticky ? "!bg-orrange" : ""
            }`}
          >
            Contact us
          </Button>
        </div>
      </div>
    </header>
  );
}
