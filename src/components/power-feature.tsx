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
            <div className="z-10">
              <div className="absolute z-10 top-56 left-10">
                <Icons name="power_1_icon" />
              </div>

              <div className="absolute z-10 top-72 left-40">
                <Icons name="power_2_icon" />
              </div>
              <div className="absolute z-10 top-40 right-6">
                <Icons name="power_3_icon" />
              </div>
            </div>
            <div className=" max-w-[426px] max-h-[517px]">
              <Image
                src="/assets/power-finance.avif"
                width={426}
                height={517}
                alt="hero"
              />
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
