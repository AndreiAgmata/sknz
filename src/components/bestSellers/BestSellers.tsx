import React from "react";
import prisma from "@/lib/prisma";
import ProductReel from "../productReel/ProductReel";
import ViewAllBtn from "../viewAllBtn/ViewAllBtn";
import DesignYourOwnBtn from "../designYourOwnBtn/DesignYourOwnBtn";

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
      className="container mx-auto flex flex-col items-center mb-16"
      id="best-sellers"
    >
      <h1 className="font-bold text-5xl text-center mb-10">Best Sellers</h1>
      <ProductReel products={products} />
      <div className="buttons mt-8 flex gap-4">
        <DesignYourOwnBtn />
        <ViewAllBtn />
      </div>
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
