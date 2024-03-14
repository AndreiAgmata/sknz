"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";

function SingleItem() {
  const [item, setItem] = useState<Product | null>(null);
  const [cover, setCover] = useState(1);
  const [chipSize, setChipSize] = useState(1);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedItem = localStorage.getItem("item");
    // localStorage.removeItem("item");
    if (storedItem) {
      const parsedItem = JSON.parse(storedItem);
      setItem(parsedItem);
      console.log(parsedItem);
    }
  }, []);
  return item ? (
    <div className="content mt-48 mb-32 flex flex-row justify-evenly">
      <div className="card-display flex items-center">
        <div className="main-card w-96 h-64 rounded-xl border overflow-hidden">
          <div
            className={`image-wrapper w-96 ${
              cover === 1 ? "h-64" : "h-32"
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
            <div className="chip-wrapper flex justify-center items-center relative top-16 left-10 w-16 h-16">
              <div
                className={`chip-image-wrapper relative rounded-xl overflow-hidden ${
                  chipSize === 1
                    ? "w-16 h-16"
                    : chipSize === 2
                    ? "w-12 h-12"
                    : ""
                }`}
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
      </div>
      <div className="details flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-start">{item.name}</h1>
        {item.categoryId === "1" && <p className="font-medium">Sports</p>}
        {item.categoryId === "2" && <p className="font-medium">Street Wear</p>}
        {item.categoryId === "3" && <p className="font-medium">Automotive</p>}
        <p className="text-3xl mt-2">$ {item.price}</p>
        <div className="cover-options mt-8 ">
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
        <Button className="mt-8">Add to cart</Button>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default SingleItem;
