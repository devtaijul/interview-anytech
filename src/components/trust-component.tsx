import Image from "next/image";

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

export const TrustComponent = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div>
          <div className="text-center my-6">
            <h2 className="font-semibold tracking-wider text-primary">
              TRUSTED BY THE BEST
            </h2>
          </div>
          <div className="flex justify-center items-start flex-col lg:flex-row lg:gap-44 w-full gap-6">
            <div className="flex items-center justify-between lg:justify-center w-full   lg:flex-col">
              <h1 className="mb-4 bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent lg:text-8xl text-6xl font-bold  mt-4">
                {">"}
                <span>{20}</span>
              </h1>
              <p className="font-medium text-xl text-end lg:text-center">
                Years of Experience
              </p>
            </div>
            <div className="flex items-center justify-between lg:justify-center w-full   lg:flex-col">
              <h1 className="mb-4 bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent lg:text-8xl text-6xl font-bold  mt-4">
                <span>{40}</span> {"+"}
              </h1>
              <p className="font-medium text-xl text-end lg:text-center">
                Financial Institutions
              </p>
            </div>
            <div className="flex  items-center justify-between lg:justify-center w-full lg:flex-col">
              <h1 className="mb-4 bg-gradient-to-tr from-secondary to-primary bg-clip-text text-transparent lg:text-8xl text-6xl font-bold  mt-4">
                {">"}
                <span>{200}</span>m
              </h1>
              <p className="font-medium text-xl text-end lg:text-center">
                Customers Each
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-12">
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
