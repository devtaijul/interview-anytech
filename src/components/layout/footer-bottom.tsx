import Link from "next/link";

export const FooterBottom = () => {
  return (
    <section className=" bg-[#00152D] py-8">
      <div className="container">
        <div className="flex items-center flex-col lg:flex-row justify-between gap-1 lg:gap-8 text-primary text-xs md:text-sm font-medium">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </section>
  );
};
