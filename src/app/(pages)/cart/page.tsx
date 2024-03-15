import Cart from "@/components/cart/Cart";
import CheckOutForm from "@/components/checkOutForm/CheckOutForm";
import { useCartContext } from "@/context/CartContext";
import React from "react";

function CartPage() {
  return (
    <section className="cart container mx-auto mt-24 h-full min-h-dvh">
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      <div className="content flex flex-col xl:flex-row gap-8 mt-12 justify-between items-start h-full">
        <Cart />
        <CheckOutForm options={{ calculateShipping: true, couponCode: true }} />
      </div>
    </section>
  );
}

export default CartPage;
