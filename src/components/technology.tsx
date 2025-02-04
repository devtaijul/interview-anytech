import { Icons } from "./icons/icons";
import { TechnologyCarousel } from "./technology-carousel";

export interface TechnologyContent {
  id: number;
  btn_content: string;
  title: string;
  desk1: string;
  desk2: string;
  image_url: string;
}

const technology_content: TechnologyContent[] = [
  {
    id: 1,
    btn_content: "Customer focused",
    title: "Purpose-built financial services",
    desk1:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    desk2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image_url: "/assets/technology1.avif",
  },
  {
    id: 2,
    btn_content: "Agile and adaptable",
    title: "Purpose-built financial services",
    desk1:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    desk2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image_url: "/assets/technology1.avif",
  },
  {
    id: 3,
    btn_content: "Compliance ready",
    title: "Purpose-built financial services",
    desk1:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    desk2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image_url: "/assets/technology1.avif",
  },
  {
    id: 4,
    btn_content: "Secure and safe",
    title: "Purpose-built financial services",
    desk1:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    desk2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image_url: "/assets/technology1.avif",
  },
];

export const Technology = () => {
  return (
    <section className="py-16">
      <div className="container ">
        <div>
          <div className="text-center mb-8">
            <h2 className="font-semibold tracking-wider text-primary text-xs sm:text-sm md:text-base">
              TECHNOLOGY BUILT FOR YOU
            </h2>
            <h1 className="text-secondary  font-semibold mt-4 xl:text-6xl text-3xl md:text-4xl lg:text-5xl">
              The future of finance
            </h1>
          </div>
        </div>
        <div className="desktop">
          <TechnologyCarousel technologies={technology_content} />
        </div>
      </div>
      <div className="mt-12">
        <Icons name="gradient_polygon_section_icon" />
      </div>
    </section>
  );
};
