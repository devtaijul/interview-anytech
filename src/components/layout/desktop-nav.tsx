import { nav } from "@/data/store";
import Link from "next/link";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

export const DesktopNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <nav className="hidden lg:flex items-center space-x-6">
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
  );
};
