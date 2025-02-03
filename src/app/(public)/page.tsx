import HeroSection from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { PowerFeature } from "@/components/power-feature";
import { Technology } from "@/components/technology";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PowerFeature />
      <Philosophy />
      <Technology />
    </>
  );
}
