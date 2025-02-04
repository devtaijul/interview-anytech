"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { TechnologyContent } from "./technology";
import Image from "next/image";
import { useTechButton } from "./technology-carousel-button";

const TechnologyCard = ({
  btn_content,
  desk1,
  desk2,
  image_url,
  title,
}: TechnologyContent) => {
  return (
    <section className="embla__slide rounded-3xl p-16  bg-white shadow-lg shadow-blue-50">
      <div className="grid grid-col-span-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold tracking-wider text-primary">
            {btn_content}
          </h2>
          <h1 className="text-secondary text-6xl font-semibold mt-4">
            {title}
          </h1>
          <div className="flex flex-col gap-6">
            <p className="font-medium text-secondary">{desk1}</p>
            <p className="font-medium text-primary">{desk2}</p>
          </div>
        </div>
        <div>
          <Image
            src={image_url}
            alt="technology"
            width={500}
            height={500}
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export const TechnologyCarousel = ({
  technologies,
}: {
  technologies: TechnologyContent[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useTechButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <>
      <div className=" justify-center lg:flex hidden items-center gap-2 mt-12">
        {scrollSnaps.map((snap, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`${
              selectedIndex === index
                ? "bg-dark-light"
                : "bg-transparent  hover:bg-light"
            } mr-2 px-8 py-2 rounded-full text-primary font-bold text-lg`}
          >
            {technologies[index].btn_content}
          </button>
        ))}
      </div>
      <div className="shadow-lg rounded-3xl shadow-blue-50">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {technologies.map((technology) => (
              <TechnologyCard key={technology.id} {...technology} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
