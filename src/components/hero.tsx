"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./common/button";
import { Icons } from "./icons/icons";

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
            <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-Montserrat text-res-head-1 text-white">
              Embrace the future of finance
            </h1>{" "}
            <h5 className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat">
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
      <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none svelte-1lc7tvy">
        <figure className="h-[115%] w-[115%] object-cover">
          <img
            srcSet="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=320&amp;auto=format 320w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=640&amp;auto=format 640w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=960&amp;auto=format 960w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1280&amp;auto=format 1280w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1600&amp;auto=format 1600w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1920&amp;auto=format 1920w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=2240&amp;auto=format 2240w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=2560&amp;auto=format 2560w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=2880&amp;auto=format 2880w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=3200&amp;auto=format 3200w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=3520&amp;auto=format 3520w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=3840&amp;auto=format 3840w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=4160&amp;auto=format 4160w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=4480&amp;auto=format 4480w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=4800&amp;auto=format 4800w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=5120&amp;auto=format 5120w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=5440&amp;auto=format 5440w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=5760&amp;auto=format 5760w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=6080&amp;auto=format 6080w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=6400&amp;auto=format 6400w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=6720&amp;auto=format 6720w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=7040&amp;auto=format 7040w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=7360&amp;auto=format 7360w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=7680&amp;auto=format 7680w, https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=7952&amp;auto=format 7952w"
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?auto=format"
            width="7952"
            height="5304"
            className="h-full w-full object-cover"
            sizes="55vw"
            alt="background image"
          />
        </figure>
        <div className="gradient-overlay svelte-1lc7tvy"></div>
      </div>

      {/* Background SVG elements */}
      {/* <div
        className="absolute w-40 h-40 bg-blue-300 opacity-50 rounded-full"
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${
            mousePosition.y * -0.02
          }px)`,
        }}
      ></div>
      <div
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
