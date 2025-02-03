import Link from "next/link";

export const FooterBottom = () => {
  return (
    <section className=" bg-[#00152D] py-8">
      <div className="container">
        <div className="flex items-center justify-between gap-8 text-primary font-medium">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </section>
  );
};
