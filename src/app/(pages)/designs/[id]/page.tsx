"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
function DesignsPage() {
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
    <section className="container h-dvh mx-auto flex items-center justify-center">
      <div className="content w-full h-full flex flex-row justify-evenly">
        <div className="card-display flex items-center">
          <div className="main-card w-96 h-64 rounded-xl border overflow-hidden">
            <Carousel className="w-full h-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="image-wrapper w-full h-full relative ">
                    <Image
                      src={item.image}
                      alt="Product image"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div className="chip-image-wrapper w-16 h-16 relative rounded-lg top-16 left-10">
                      <Image
                        src={"/chip.png"}
                        alt="Product image"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="image-wrapper w-full h-1/2 relative ">
                    <Image
                      src={item.image}
                      alt="Product image"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div className="chip-image-wrapper w-16 h-16 relative rounded-lg top-16 left-10">
                      <Image
                        src={"/chip.png"}
                        alt="Product image"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="details flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-start">{item.name}</h1>
          <p className="font-medium">{item.category}</p>
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
    </section>
  ) : (
    <></>
  );
}

export default DesignsPage;
