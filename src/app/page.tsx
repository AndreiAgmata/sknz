import BestSellers from "@/components/bestSellers/BestSellers";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BestSellers />
      <Footer />
    </main>
  );
}
