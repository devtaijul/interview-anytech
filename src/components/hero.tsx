"use client";

import { useEffect, useState } from "react";
import Button from "./common/button";
import { Icons } from "./icons/icons";
import { motion } from "motion/react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home-hero__content__container"
      className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] svelte-n9olsd"
    >
      {/* Hero Content */}
      <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
        <div className="h-fit lg:flex-[65] xl:flex-[75]">
          <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
            <h1 className="lg:max-w-max tracking-wide font-bold  lg:whitespace-pre-line lg:text-head-1 font-Montserrat text-res-head-1 text-white xl:text-7xl text-3xl md:text-4xl lg:text-5xl">
              Embrace the future of finance
            </h1>{" "}
            <h5 className="!text-white font-bold max-w-2xl lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </h5>
          </header>{" "}
          <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
            <Button
              className="md:py-[15.5px] py-[14px] px-[42px] !bg-orrange rounded-xs shadow-button-primary text-link text-white !flex items-center justify-center space-x-[8px] bg-orange-main false"
              href="/en/contact-us"
            >
              <span>Reach Out to Us</span>
              <Icons name="arrow_icon" />
            </Button>
          </div>
        </div>{" "}
        <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
      </div>
      <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none">
        <figure className="h-[115%] w-[115%] object-cover">
          <motion.img
            initial={{ x: 150, y: 0 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 1 }}
            src="/assets/hero.avif"
            width="7952"
            height="5304"
            className="h-full w-full object-cover"
            sizes="55vw"
            alt="background image"
          />
        </figure>
        <div className="gradient-overlay"></div>
      </div>

      {/* Background SVG elements */}
      <motion.div
        initial={{ x: -150, y: 0 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute w-full hidden lg:block bottom-0 right-96 "
      >
        <div
          className=" w-full  "
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${
              mousePosition.y * -0.02
            }px)`,
          }}
        >
          <Icons name="weve_line_desktop_2_icon" />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 150, y: 0 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}
        className="absolute hidden w-full lg:block top-0 right-20"
      >
        <div
          className=" w-full  "
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        >
          <Icons name="weve_line_desktop_1_icon" />
        </div>
      </motion.div>

      <div className="absolute w-full lg:hidden bottom-0 left-0 ">
        <Icons name="mobile_line_weve_icon" />
      </div>

      {/* <div
        className="absolute w-32 h-32 bg-blue-400 opacity-50 rounded-full top-1/3 right-1/4"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${
            mousePosition.y * -0.015
          }px)`,
        }}
      ></div>
      <div
        className="absolute w-24 h-24 bg-blue-500 opacity-50 rounded-full bottom-1/4 left-1/3"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${
            mousePosition.y * -0.01
          }px)`,
        }}
      ></div> */}
    </section>
  );
}
