"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import data from "../../../public/data/data.json";
import { Product } from "@/lib/types";
import { useRouter } from "next/navigation";
import ItemCard from "../itemCard/ItemCard";

function BestSellers() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const shuffle = (array: Product[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomProducts = shuffle(products);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <section
      className="container mx-auto flex flex-col items-center pt-20"
      id="best-sellers"
    >
      <h1 className="font-bold text-5xl text-center mb-10">Best Sellers</h1>
      <div className="items-wrapper flex flex-row flex-wrap justify-center gap-10 mb-8">
        {randomProducts.slice(-6).map((product, index) => (
          <ItemCard key={index} product={product} />
        ))}
      </div>
      <div className="button-group flex gap-3">
        <Button size={"lg"} variant={"outline"}>
          Design Your Own
        </Button>
        <Button size={"lg"} onClick={() => router.push("/designs")}>
          See More Designs
        </Button>
      </div>
    </section>
  );
}

export default BestSellers;
