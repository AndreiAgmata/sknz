import BestSellers from "@/components/bestSellers/BestSellers";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BestSellers />
      <div className="footer h-16 w-full"></div>
    </main>
  );
}
