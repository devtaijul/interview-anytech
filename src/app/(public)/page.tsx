import { CommonCta } from "@/components/common-cta";
import HeroSection from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { PowerFeature } from "@/components/power-feature";
import { Technology } from "@/components/technology";
import { TrustComponent } from "@/components/trust-component";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PowerFeature />
      <Philosophy />
      <Technology />
      <TrustComponent />
      <CommonCta />
    </>
  );
}
