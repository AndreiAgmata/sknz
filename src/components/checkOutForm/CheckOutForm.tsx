"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

import provinces from "../../../public/data/provinces.json";
import { Button } from "../ui/button";
import { CartItem, Product } from "@/lib/types";
import { DrawerClose } from "../ui/drawer";
import { useCartContext } from "@/context/CartContext";

interface DisplayOptions {
  calculateShipping: boolean;
  couponCode: boolean;
}

function CheckOutForm({ options }: { options: DisplayOptions }) {
  const [shippingFee, setShippingFee] = useState(0.0);
  const { cartItems } = useCartContext();

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
    <div className="w-full xl:w-96 p-6 mb-5 border rounded-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
      {options.calculateShipping && (
        <div className="calculate-shipping pb-4 border-b-2">
          <p className="text-xl font-bold">Estimate Shipping</p>
          <div className="row flex gap-4 mt-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Province" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {provinces.map((province, index) => (
                    <SelectItem value={province.name} key={index}>
                      {province.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input type="text" placeholder="Postal Code" />
          </div>
          <p className="shipping-fee text-lg font-medium mt-4">
            {shippingFee === 0 ? "$0.00" : `$${shippingFee}`}
          </p>
          <Button type="button" className="mt-4 w-full">
            Update
          </Button>
        </div>
      )}
      {options.couponCode && (
        <div className="coupon-code pb-4 border-b-2 flex flex-col items-start">
          <p className="text-xl font-bold">Coupon Code</p>
          <p style={{ fontSize: "0.65rem" }}>
            Offer valid for a limited time only. Cannot be combined with any
            other promotions or discounts.
          </p>
          <Input type="text" placeholder="Coupon Code" className="my-4" />
          <Button type="button" className="mt-auto w-full ">
            Apply
          </Button>
        </div>
      )}
      <div className="dummy-col"></div>
      <div className="cart-total xl:ms-none">
        <div className="inner p-4 bg-gray-100 rounded-lg">
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
            <p>{shippingFee === 0 ? "$0.00" : `$${shippingFee}`}</p>
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
        <Button type="button" className="mt-4 w-full" variant={"outline"}>
          Continue Shopping
        </Button>
        <Button type="button" className="mt-4 w-full">
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
}

export default CheckOutForm;
