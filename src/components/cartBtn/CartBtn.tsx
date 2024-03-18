"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { useCartContext } from "@/context/CartContext";

function CartBtn() {
  const { cartItems } = useCartContext();
  return (
    <Link href={"/cart"} className="text-neutral-100 relative">
      <ShoppingCart size={25} color="background" />
      {cartItems.length !== 0 && (
        <div
          className="badge w-[18px] h-[18px] bg-background rounded-full text-black flex items-center justify-center absolute top-[-8px] right-[-10px]"
          style={{ fontSize: "0.75rem" }}
        >
          <p className="m-0 p-0 font-semibold">{cartItems.length}</p>
        </div>
      )}
    </Link>
  );
}

export default CartBtn;
