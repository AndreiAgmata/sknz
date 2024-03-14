import BestSellers from "@/components/bestSellers/BestSellers";
import Categories from "@/components/categories/Categories";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BestSellers />
      <Categories />
      <Faq />
      <Footer />
    </main>
  );
}
