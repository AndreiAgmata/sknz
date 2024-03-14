"use client";
import React, { useEffect, useState } from "react";
import CartItem from "../cartItem/CartItem";
import { Product } from "@/lib/types";

interface CartItemProps {
  product: Product;
  coverSize: number;
  chipSize: number;
  quantity: number;
}

function Cart() {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  useEffect(() => {
    setCartItems(
      JSON.parse(localStorage.getItem("cart") || "[]") as CartItemProps[]
    );
  }, []);

  return (
    <div className="cart-items flex flex-col gap-8 p-6 border rounded-2xl">
      <div className="headers grid grid-cols-5 font-bold text-xl">
        <p className="col-span-2">Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total Price</p>
      </div>
      {cartItems.map((cartItem, index) => (
        <div key={index} className="border-b-2 pb-8">
          <CartItem product={cartItem} />
        </div>
      ))}
    </div>
  );
}

export default Cart;
