import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
