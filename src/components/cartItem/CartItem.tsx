import { Product } from "@/lib/types";
import { Combine } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CartItem {
  product: Product;
  coverSize: number;
  chipSize: number;
  quantity: number;
}

function CartItem({ product }: { product: CartItem }) {
  if (!product) {
    return <>Loading</>;
  }
  return (
    <div className="cart-item grid grid-cols-5">
      <div className="col-span-2 flex flex-row gap-4">
        <div className="image-wrapper w-32 h-auto aspect-[1.58/1] relative border rounded-lg overflow-hidden">
          <Image
            src={product.product.image}
            alt="item image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="details">
          <p className="text-xl font-semibold">{product.product.name}</p>
          <p className="text-xs">
            Cover Size : {product.coverSize === 1 ? "Full Cover" : "Half Cover"}
          </p>
          <p className="text-xs">
            Chip Size :{" "}
            {product.chipSize === 1
              ? "Big Chip"
              : product.chipSize === 2
              ? "Small Chip"
              : "No Chip"}
          </p>
        </div>
      </div>
      <div>
        <p>${product.product.price}</p>
      </div>
      <div>
        <p>{product.quantity}</p>
      </div>
      <div className="text-lg font-medium">
        ${product.product.price * product.quantity}
      </div>
    </div>
  );
}

export default CartItem;
