"use client";
import { useCartContext } from "@/context/CartContext";
import { CartItem, Product } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface CartItemProps {
  product: CartItem;
  index: number;
}

function CartItem({ product, index }: CartItemProps) {
  const router = useRouter();
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();
  if (!product) {
    return <>Loading</>;
  }
  return (
    <div className="cart-item grid grid-cols-4 lg:grid-cols-11 gap-4">
      <div className="col-span-2 flex flex-row gap-4 pe-4">
        <div className="image-wrapper w-full h-auto relative aspect-[1.58/1] border  rounded-lg overflow-hidden">
          <Image
            src={product.product.image}
            alt="item image"
            fill
            style={{ objectFit: "cover" }}
            onClick={() => router.push(`/products/${product.product.id}`)}
          />
        </div>
      </div>
      <div className="details col-span-2">
        <p className="text-md font-semibold">{product.product.name}</p>
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
      <div className="col-span-2">
        <p>${product.product.price}</p>
      </div>
      <div className="col-span-2 flex items-center quantity">
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={() => decreaseQuantity(index)}
          disabled={product.quantity === 1}
        >
          -
        </Button>
        <p className="w-10 text-center">{product.quantity}</p>
        <Button size={"sm"} onClick={() => increaseQuantity(index)}>
          +
        </Button>
      </div>
      <div className="text-lg font-medium col-span-2">
        ${product.product.price * product.quantity}
      </div>
      <div className="cursor-pointer" onClick={() => removeFromCart(index)}>
        <p>Remove</p>
      </div>
    </div>
  );
}

export default CartItem;
