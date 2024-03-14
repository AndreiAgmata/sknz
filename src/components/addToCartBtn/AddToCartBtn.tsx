"use client";
import React from "react";
import { Button } from "../ui/button";

interface AddToCartInput {
  productId: string;
  coverSize: number;
  chipSize: number;
  quantity: number;
}

function AddToCartBtn({ input }: { input: AddToCartInput }) {
  const handleAddToCart = async () => {
    console.log(input);
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
