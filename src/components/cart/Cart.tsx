"use client";
import React, { useEffect, useState } from "react";
import CartItem from "../cartItem/CartItem";
import { Product } from "@/lib/types";
import { CartProvider, useCartContext } from "@/context/CartContext";

interface CartItemProps {
  product: Product;
  coverSize: number;
  chipSize: number;
  quantity: number;
}

function Cart() {
  const { cartItems } = useCartContext();
  return (
    <div className="cart-items flex flex-col gap-8 p-6 border rounded-2xl w-full h-full">
      <div className="headers grid grid-cols-11 font-bold text-xl">
        <p className="col-span-4">Product</p>
        <p className="col-span-2">Price</p>
        <p className="col-span-2">Quantity</p>
        <p className="col-span-2">Total Price</p>
      </div>
      <div className="items-wrapper overflow-y-auto">
        {cartItems.length <= 0 && (
          <div>
            <p>You have no items in your cart.</p>
          </div>
        )}
        {cartItems.map((cartItem, index) => (
          <div key={index} className="border-b-2 pb-8 mb-4">
            <CartItem product={cartItem} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
