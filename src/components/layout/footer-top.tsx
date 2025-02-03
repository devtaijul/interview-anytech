import Link from "next/link";
import { Icons } from "../icons/icons";

export const FooterTop = () => {
  return (
    <section className="bg-[#002045] border-y border-primary py-16">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icons name="logo_white_icon" />
          </div>
          <div className="flex items-center space-x-4">
            <Link href={"#"} className="text-lg font-semibold text-[#00E9EA]">
              Our Solutions
            </Link>
            <div className="h-9 w-[1px] bg-[#00E9EA]" />
            <Link href={"#"} className="text-lg font-medium text-[#00E9EA]">
              AnyCaaS
            </Link>
            <Link href={"#"} className="text-lg font-medium text-[#00E9EA]">
              AnyBaas
            </Link>
            <Link href={"#"} className="text-lg font-medium text-[#00E9EA]">
              AnyPaaS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
