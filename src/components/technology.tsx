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
    title: "Agile and adaptable for growth",
    desk1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    desk2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image_url: "/assets/technology2.avif",
  },
  {
    id: 3,
    btn_content: "Compliance ready",
    title: "Manage compliance with ease",
    desk1:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    desk2:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image_url: "/assets/technology3.avif",
  },
  {
    id: 4,
    btn_content: "Secure and safe",
    title: "Highly secure and safe",
    desk1:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    desk2:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image_url: "/assets/technology4.avif",
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
