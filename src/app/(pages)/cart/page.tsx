import Cart from "@/components/cart/Cart";
import CheckOutForm from "@/components/checkOutForm/CheckOutForm";
import React from "react";

function CartPage() {
  return (
    <section className="cart container mx-auto mt-24 min-h-dvh">
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      <p>2 items in your cart.</p>
      <div className="content flex gap-8 mt-12">
        <Cart />
        <CheckOutForm />
      </div>
    </section>
  );
}

export default CartPage;
