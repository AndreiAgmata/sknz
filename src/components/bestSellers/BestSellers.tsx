import React from "react";
import prisma from "@/lib/prisma";
import ProductReel from "../productReel/ProductReel";

const getBestSellers = async () => {
  const products = await prisma.product.findMany();
  products.sort((a, b) => b.totalSales - a.totalSales);
  const bestSellers = products.slice(0, 8);
  return bestSellers;
};

async function BestSellers() {
  const products = await getBestSellers();
  return (
    <section
      className="container mx-auto flex flex-col items-center pt-20 mb-16"
      id="best-sellers"
    >
      <h1 className="font-bold text-5xl text-center mb-10">Best Sellers</h1>
      <ProductReel products={products} />
    </section>
  );
}

export default BestSellers;

{
  /* <div className="button-group flex gap-3">
    <Button size={"lg"} variant={"outline"}>
      Design Your Own
    </Button>
    <Button size={"lg"} onClick={() => router.push("/products")}>
      See More Designs
    </Button>
  </div> */
}
