"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/lib/types";
import { useRouter } from "next/navigation";

interface ItemCardProps {
  product: Product;
}

function ItemCard({ product }: ItemCardProps) {
  const router = useRouter();
  return (
    <Card
      className="hover:bg-neutral-200 flex flex-col items-start py-4 px-4 cursor-pointer"
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
    >
      <CardContent className="w-full h-auto image-wrapper relative aspect-[1.58/1]">
        <Image
          src={product.image}
          alt="product-image"
          fill
          sizes="100vh"
          style={{ objectFit: "cover" }}
          className="rounded-xl border"
        />
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start p-0 py-4">
        <p className="text-xl font-semibold text-wrap">{product.name}</p>
        <p className="text-lg">$ {product.price}</p>
      </CardFooter>
    </Card>
  );
}

export default ItemCard;
