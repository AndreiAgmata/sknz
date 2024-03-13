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

interface QuickViewProps {
  product: Product;
}

function QuickView({ product }: QuickViewProps) {
  const router = useRouter();
  return (
    <Card
      className="hover:bg-neutral-200"
      onClick={() => {
        router.push(`/designs/${product.id}`);
        localStorage.setItem("item", JSON.stringify(product));
      }}
    >
      <CardContent className="p-6">
        <div className="image-wrapper h-52 w-80 relative flex items-center justify-center">
          <Image
            src={product.image}
            alt="product-image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start">
        <p className="text-2xl font-semibold">{product.name}</p>
        <p className="text-lg">$ {product.price}</p>
      </CardFooter>
    </Card>
  );
}

export default QuickView;
