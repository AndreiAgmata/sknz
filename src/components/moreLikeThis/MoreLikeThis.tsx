import prisma from "@/lib/prisma";
import React from "react";
import ProductReel from "../productReel/ProductReel";

const getSimilarProducts = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id: id },
  });

  const products = await prisma.product.findMany({
    where: { categoryId: product?.categoryId },
  });

  return products.slice(0, 4);
};

async function MoreLikeThis({ id }: { id: string }) {
  const products = await getSimilarProducts(id);
  return (
    <div className="more-like-this w-full">
      <h1 className="font-bold text-4xl text-center mb-10">More Like This</h1>
      <ProductReel products={products} />
    </div>
  );
}

export default MoreLikeThis;
