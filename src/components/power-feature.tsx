import Image from "next/image";
import { Icons } from "./icons/icons";

export const PowerFeature = () => {
  return (
    <section className=" py-8">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-col-span-1 items-start gap-4 justify-between">
          <div className="py">
            <h2 className=" font-semibold tracking-wider text-primary text-xs sm:text-sm md:text-base">
              POWERING THE FUTURE OF FINANCE
            </h2>
            <p className=" text-secondary  font-semibold mt-4 xl:text-6xl text-3xl  md:text-4xl lg:text-5xl">
              Uncovering new ways to delight customers
            </p>
            <p className=" text-secondary  font-semibold mt-5">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className=" text-[#0d4688]  font-semibold mt-5 text-primary">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="p-12 max-w-[426px] relative max-h-[517px]">
              <div>
                <div className="absolute z-20 top-44 left-0 animate-bounce-slow">
                  <Icons name="power_1_icon" />
                </div>

                <div className="absolute z-20 top-56 left-32">
                  <Icons name="power_2_icon" />
                </div>
                <div className="absolute z-20 top-28 right-0">
                  <Icons name="power_3_icon" />
                </div>
                <div className="absolute z-20 bottom-24 right-0">
                  <Icons name="line_icon" />
                </div>
              </div>
              <Image
                src="/assets/power-finance.avif"
                width={426}
                height={517}
                alt="hero"
                className="z-10 relative"
              />
              <div className="absolute -top-4 -left-4 w-full h-full z-0">
                <Image
                  src="/assets/frames/content-image-1.png"
                  alt="frame"
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Icons name="gradient_polygon_section_icon" />
      </div>
    </section>
  );
};
