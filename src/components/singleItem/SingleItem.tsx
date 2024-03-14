"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import AddToCartBtn from "../addToCartBtn/AddToCartBtn";

interface SingleItemProps {
  product: Product | null;
}

function SingleItem({ product }: SingleItemProps) {
  const [item, setItem] = useState(product);
  const [cover, setCover] = useState(1);
  const [chipSize, setChipSize] = useState(1);
  const [quantity, setQuantity] = useState(1);

  return item ? (
    <div className="content mt-48 mb-32 grid sm:grid-cols-1 md:grid-cols-2 gap-20">
      <div className="card-display flex items-center justify-center ">
        <div className="main-card w-3/4 h-auto rounded-xl border overflow-hidden aspect-[1.58/1] relative">
          <div
            className={`image-wrapper w-full h-auto ${
              cover === 1 ? "aspect-[1.58/1]" : "aspect-[1.58/0.5]"
            } relative left-0`}
          >
            <Image
              src={item.image}
              alt="Product image"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="chip-wrapper absolute top-0 w-full h-full">
            <div
              className={`chip-image-wrapper absolute rounded-xl overflow-hidden top-1/4 ${
                chipSize === 1
                  ? "w-1/5 h-1/5 "
                  : chipSize === 2
                  ? "w-1/6 h-1/6 top-1/4"
                  : ""
              }`}
              style={{ left: "6%" }}
            >
              <Image
                src={"/chip.png"}
                alt="Product image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="details flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold text-start">{item.name}</h1>
        {item.categoryId === "1" && <p className="font-medium">Sports</p>}
        {item.categoryId === "2" && <p className="font-medium">Street Wear</p>}
        {item.categoryId === "3" && <p className="font-medium">Automotive</p>}
        <p className="text-3xl mt-2">$ {item.price}</p>
        <div className="divider border-b-2 w-full mt-4 mb-8"></div>
        <div className="cover-options ">
          <p className="mb-2">Cover Size: </p>
          <div className="sizes flex flex-row gap-2">
            <Button
              variant={cover == 1 ? "default" : "secondary"}
              onClick={() => setCover(1)}
            >
              Full Cover
            </Button>
            <Button
              variant={cover == 2 ? "default" : "secondary"}
              onClick={() => setCover(2)}
            >
              Half Cover
            </Button>
          </div>
        </div>
        <div className="chip-options mt-8 ">
          <p className="mb-2">Chip Size: </p>
          <div className="buttons flex flex-row gap-2">
            <Button
              variant={chipSize == 1 ? "default" : "secondary"}
              onClick={() => setChipSize(1)}
            >
              Large Chip
            </Button>
            <Button
              variant={chipSize == 2 ? "default" : "secondary"}
              onClick={() => setChipSize(2)}
            >
              Small Chip
            </Button>
            <Button
              variant={chipSize == 3 ? "default" : "secondary"}
              onClick={() => setChipSize(3)}
            >
              No Chip
            </Button>
          </div>
        </div>
        <div className="quantity-options mt-8">
          <p className="mb-2">Quantity:</p>
          <div className="quantity-buttons flex flex-row items-center">
            <Button
              variant={"outline"}
              disabled={quantity == 1}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Button>
            <p className="w-10 text-center">{quantity}</p>
            <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
          </div>
        </div>
        <AddToCartBtn />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default SingleItem;
