"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Product } from "@/lib/types";

interface AddToCartInput {
  product: Product;
  coverSize: number;
  chipSize: number;
  quantity: number;
}

function AddToCartBtn({ input }: { input: AddToCartInput }) {
  const handleAddToCart = async () => {
    let duplicate = false;
    if (typeof window !== "undefined") {
      let cart: AddToCartInput[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      cart.forEach((item) => {
        if (item.product.id === input.product.id) {
          item.quantity += input.quantity;
          duplicate = true;
        }
      });

      !duplicate && cart.push(input);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <Button
      className="mt-8 w-full md:w-80 py-6"
      onClick={() => handleAddToCart()}
    >
      Add to cart
    </Button>
  );
}

export default AddToCartBtn;
