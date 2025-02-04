"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import Button from "../common/button";
import { Icons } from "../icons/icons";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export default function Header(): JSX.Element {
  const [isMenuActve, setIsMenuActive] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  let lastScrollY = 0;

  const handleToggleMenu = () => {
    setIsMenuActive(!isMenuActve);
  };

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
      className={`fixed z-40 top-0 left-0 w-full transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        isSticky ? "bg-white shadow-md" : "bg-primary lg:bg-transparent"
      } py-5 px-6 text-${isSticky ? "black" : "white"}`}
    >
      <div className="relative w-full">
        <div className="flex justify-between items-center container  mx-auto">
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
          <MobileNav isMenuActve={isMenuActve} />
          <DesktopNav />
          <div className="hidden lg:block">
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
          <div className=" lg:hidden">
            <button onClick={handleToggleMenu}>
              {isMenuActve ? (
                <Icons name="close_icon" />
              ) : (
                <Icons name="menu_icon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
