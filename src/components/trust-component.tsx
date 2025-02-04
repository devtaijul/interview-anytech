"use client";
import { animate, useMotionValue, useTransform, motion } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

interface ClientLogo {
  id: number;
  image_url: string;
}

const client_logos: ClientLogo[] = [
  {
    id: 1,
    image_url: "/assets/clients/client1.webp",
  },
  {
    id: 2,
    image_url: "/assets/clients/client2.webp",
  },
  {
    id: 3,
    image_url: "/assets/clients/client3.webp",
  },
  {
    id: 4,
    image_url: "/assets/clients/client4.webp",
  },
  {
    id: 5,
    image_url: "/assets/clients/client5.webp",
  },
  {
    id: 6,
    image_url: "/assets/clients/client6.webp",
  },
  {
    id: 7,
    image_url: "/assets/clients/client7.webp",
  },
  {
    id: 8,
    image_url: "/assets/clients/client8.webp",
  },
  {
    id: 9,
    image_url: "/assets/clients/client9.webp",
  },
  {
    id: 10,
    image_url: "/assets/clients/client10.webp",
  },
  {
    id: 11,
    image_url: "/assets/clients/client11.webp",
  },
  {
    id: 12,
    image_url: "/assets/clients/client12.webp",
  },
  {
    id: 13,
    image_url: "/assets/clients/client13.webp",
  },
  {
    id: 14,
    image_url: "/assets/clients/client13.webp",
  },
  {
    id: 15,
    image_url: "/assets/clients/client13.webp",
  },
];

const H1 = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });

    return () => controls.stop();
  }, [count, value]);
  return <motion.span>{rounded}</motion.span>;
};

const trust_records = [
  {
    id: 1,
    count: 20,
    GenerateText: ({ value }: { value: number }) => (
      <h1 className="mb-4 bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent lg:text-8xl text-6xl font-bold  mt-4">
        {">"}
        <H1 value={value} />
      </h1>
    ),
    title: "Years of Experience",
  },
  {
    id: 2,
    count: 40,
    GenerateText: ({ value }: { value: number }) => (
      <h1 className="mb-4 bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent lg:text-8xl text-6xl font-bold  mt-4">
        <H1 value={value} />
      </h1>
    ),
    title: "Financial Institutions",
  },
  {
    id: 3,
    count: 100,
    GenerateText: ({ value }: { value: number }) => (
      <h1 className="mb-4 bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent lg:text-8xl text-6xl font-bold  mt-4">
        {">"}
        <H1 value={value} />m
      </h1>
    ),
    title: "Customers Each",
  },
];

export const TrustComponent = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div>
          <div className="text-center my-6">
            <h2 className="font-semibold tracking-wider text-primary text-xs sm:text-sm md:text-base">
              TRUSTED BY THE BEST
            </h2>
          </div>
          <div className="flex justify-center items-start flex-col lg:flex-row lg:gap-44 w-full gap-6">
            {trust_records.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between lg:justify-center w-full lg:flex-col border-b border-dashed border-primary  lg:border-none"
              >
                <record.GenerateText value={record.count} />
                <p className="font-medium text-xl text-end lg:text-center">
                  {record.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
          {client_logos.map((client) => (
            <div
              key={client.id}
              className="max-w-[170px] w-full flex items-center justify-center"
            >
              <Image
                src={client.image_url}
                alt="client"
                width={170}
                height={121}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
