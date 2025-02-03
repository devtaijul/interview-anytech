import Image from "next/image";
import { Icons } from "./icons/icons";
import { ICON_NAMES } from "../../config/icon.config";

interface PhilosophyContent {
  id: number;
  title: string;
  desc: string;
  icon_name?: string;
  is_icon: boolean;
  link?: string;
}

const philosophy_content_list: PhilosophyContent[] = [
  {
    id: 1,
    title: "Full-suite solutions",
    desc: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    icon_name: "network_icon",
    is_icon: true,
  },
  {
    id: 2,
    title: "Simplify the complex",
    desc: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    icon_name: "network_icon",
    link: "/assets/light.avif",
    is_icon: false,
  },
  {
    id: 3,
    title: "Cutting-edge tech",
    desc: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    icon_name: "processor_icon",
    is_icon: true,
  },
];

const PhilosophyCard = ({
  title,
  desc,
  icon_name,
  is_icon,
  link,
}: PhilosophyContent) => {
  return (
    <div className="flex flex-col items-start bg-light p-8 rounded-2xl">
      {is_icon ? (
        <div className="mb-8">
          {icon_name && <Icons name={icon_name as keyof typeof ICON_NAMES} />}
        </div>
      ) : (
        <div className="mb-8">
          <Image src={link as string} width={50} height={50} alt="icon" />
        </div>
      )}
      <h2 className="font-semibold text-secondary mb-6 text-2xl">{title}</h2>
      <p className="text-secondary ">{desc}</p>
    </div>
  );
};

export const Philosophy = () => {
  return (
    <section className="py-12 mb-20">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-semibold tracking-wider text-primary">
            OUR PHILOSOPHY
          </h2>
          <h1 className="text-secondary text-6xl font-semibold mt-4">
            Human-centred innovation
          </h1>
        </div>
        <div>
          <Image
            src="/assets/block-chain-desktop.avif"
            width={1440}
            height={800}
            alt="hero"
            className="w-full"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {philosophy_content_list.map((philosophy) => (
              <PhilosophyCard key={philosophy.id} {...philosophy} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
