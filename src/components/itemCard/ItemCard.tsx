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
      className="hover:bg-neutral-200 w-72 h-64 flex flex-col items-start"
      onClick={() => {
        router.push(`/designs/${product.id}`);
        localStorage.setItem("item", JSON.stringify(product));
      }}
    >
      <CardContent className="p-3 self-center">
        <div className="image-wrapper h-36 w-56 relative flex items-center justify-center">
          <Image
            src={product.image}
            alt="product-image"
            fill
            sizes="100vh"
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start">
        <p className="text-xl font-semibold text-wrap">{product.name}</p>
        <p className="text-lg">$ {product.price}</p>
      </CardFooter>
    </Card>
  );
}

export default ItemCard;
