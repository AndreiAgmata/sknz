"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Product } from "@/lib/types";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Cart from "../cart/Cart";
import CheckOutForm from "../checkOutForm/CheckOutForm";

import CartItem from "../cartItem/CartItem";
import { useCartContext } from "@/context/CartContext";
import DrawerCheckoutForm from "../drawerCheckoutForm/DrawerCheckoutForm";

function AddToCartBtn({ input }: { input: CartItem }) {
  const { addToCart } = useCartContext();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className="mt-8 w-full md:w-80 py-6 "
          onClick={() => addToCart(input)}
        >
          Add To Cart
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-5 h-5/6">
        <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex gap-6 h-5/6 items-start">
          <Cart />
          <DrawerCheckoutForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default AddToCartBtn;
