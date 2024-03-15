"use client";
import React, { useState } from "react";
import { DrawerClose } from "../ui/drawer";
import { Button } from "../ui/button";
import { useCartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";

function DrawerCheckoutForm() {
  const router = useRouter();
  const { cartItems } = useCartContext();
  const [shippingFee, setShippingFee] = useState(4.99);

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      const total = item.quantity * item.product.price;
      subtotal += total;
    });

    return subtotal.toFixed(2);
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    return ((shippingFee + parseFloat(subtotal)) * 0.13).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const tax = parseFloat(calculateTax());
    return (subtotal + shippingFee + tax).toFixed(2);
  };

  return (
    <div className="p-6 border rounded-xl">
      <div className="cart-total p-4 rounded-lg bg-gray-100 ">
        <p className="text-xl font-bold">Cart Total</p>
        <div className="row flex justify-between text-sm">
          <p>Cart Subtotal : </p>
          <p>${calculateSubtotal()}</p>
        </div>
        <div className="row flex justify-between text-sm ">
          <p>Discount : </p>
          <p>$0.00</p>
        </div>
        <div className="row flex justify-between text-sm ">
          <p>Shipping : </p>
          <p>${shippingFee}</p>
        </div>
        <div className="row flex justify-between text-sm ">
          <p>Hst : </p>
          <p>${calculateTax()}</p>
        </div>
        <div className="total flex justify-between mt-4">
          <p className="font-medium">Total :</p>
          <p>${calculateTotal()}</p>
        </div>
      </div>
      <DrawerClose asChild>
        <Button type="button" className="mt-4 w-full" variant={"outline"}>
          Continue Shopping
        </Button>
      </DrawerClose>

      <Button
        type="button"
        className="mt-4 w-full"
        onClick={() => router.push("/cart")}
      >
        Proceed To Checkout
      </Button>
    </div>
  );
}

export default DrawerCheckoutForm;
