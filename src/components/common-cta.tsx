"use client";

import { useEffect, useState } from "react";
import Button from "./common/button";
import { Icons } from "./icons/icons";

export const CommonCta = () => {
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
      id="common-cta_container"
      className="relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden  md:z-20 z-0"
    >
      <div className="container flex w-full items-start justify-center h-full relative z-10 flex-col mt-6">
        <h2 className=" text-white lg:text-6xl font-semibold mb-6">
          Legacy no longer
        </h2>{" "}
        <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-8">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>{" "}
        <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
          <Button
            className="md:py-[15.5px] py-[14px] px-[42px] !bg-orrange rounded-xs shadow-button-primary text-link text-white !flex items-center justify-center space-x-[8px] bg-orange-main false"
            href="#"
          >
            <span>Contact us</span>
            <Icons name="arrow_icon" />
          </Button>
        </div>
      </div>{" "}
      {/* Background SVG elements */}
      <div
        className="absolute w-full bottom-0 right-0 "
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${
            mousePosition.y * -0.02
          }px)`,
        }}
      >
        <Icons name="weve_line_desktop_3_icon" />
      </div>
      <div
        className="absolute w-full top-0 right-0  "
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}
      >
        <Icons name="weve_line_desktop_1_icon" />
      </div>
    </section>
  );
};
