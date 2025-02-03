import Image from "next/image";
import { Icons } from "./icons/icons";

export const PowerFeature = () => {
  return (
    <section className="bg-gradient-to-tr py-8 from-light via-90% via-white to-white">
      <div className="container">
        <div className="grid grid-cols-2 items-start gap-4 justify-between">
          <div className="py">
            <h2 className=" font-bold tracking-wider text-primary">
              POWERING THE FUTURE OF FINANCE
            </h2>
            <p className=" text-dark text-7xl font-semibold mt-4">
              Uncovering new ways to delight customers
            </p>
            <p className=" text-dark  font-semibold mt-5">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className=" text-[#114a8b]  font-semibold mt-5 text-primary">
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
    </section>
  );
};
