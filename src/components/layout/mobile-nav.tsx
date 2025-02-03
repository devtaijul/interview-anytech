import { Nav as NavInterface, nav } from "@/data/store";
import { cn } from "@/utils/tailwind-merge";
import Link from "next/link";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import Button from "../common/button";

const Nav = ({ subMenu, label, href }: NavInterface) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  if (subMenu) {
    return (
      <div className="">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="hover:text-gray-300"
        >
          {label} ▼
        </button>
        {dropdownOpen && (
          <div className="  rounded-lg py-2">
            {subMenu.map((sub) => (
              <Link
                key={sub.id}
                href={sub.href}
                className="block px-4 py-2 hover:text-secondary text-white"
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
      <Link href={href} className="hover:text-gray-300">
        {label}
      </Link>
    );
  }
};

export const MobileNav = ({ isMenuActve }: { isMenuActve: boolean }) => {
  return (
    <nav
      className={cn(
        `lg:hidden items-start  bg-[#1B76E9] flex space-y-3 flex-col absolute top-12 w-screen p-6 -left-6  transition-transform duration-150  ${
          isMenuActve ? "translate-x-0" : "-translate-x-full"
        }`
      )}
    >
      {nav.map((item) => (
        <Nav key={item.id} {...item} />
      ))}

      <div className=" w-full flex items-center justify-center">
        <button className="flex items-center hover:text-gray-300 ">
          <FaGlobe className="mr-1" /> EN
        </button>
      </div>
      <div className="w-full">
        <Button
          href="#"
          variant={"outline"}
          className={`!border-white !text-white hover:!bg-transparent w-full`}
        >
          Contact us
        </Button>
      </div>
    </nav>
  );
};
