import Faq from "@/components/faq/Faq";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  let loaderItems = [1, 2, 3, 4];
  return (
    <>
      <div className="container content mt-48 mb-32 grid sm:grid-cols-1 md:grid-cols-2 gap-20">
        <div className="card-display flex items-center justify-center ">
          <div className="main-card w-3/4 h-auto rounded-xl border overflow-hidden aspect-[1.58/1] relative">
            <div
              className={`image-wrapper w-full h-auto aspect-[1.58/1] relative left-0`}
            >
              <Skeleton className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className="details flex flex-col justify-center items-start">
          <Skeleton className="h-[40px] w-[15rem] mb-2" />
          <Skeleton className="h-[20px] w-[5rem] mb-2" />
          <Skeleton className="h-[3rem] w-[6rem] mb-2" />
          <div className="divider border-b-2 w-full mt-4 mb-8"></div>
          <div className="cover-options ">
            <p className="mb-2">Cover Size: </p>
            <div className="sizes flex flex-row gap-2">
              <Button variant={"default"}>Full Cover</Button>
              <Button variant={"secondary"}>Half Cover</Button>
            </div>
          </div>
          <div className="chip-options mt-8 ">
            <p className="mb-2">Chip Size: </p>
            <div className="buttons flex flex-row gap-2">
              <Button variant={"default"}>Large Chip</Button>
              <Button variant={"secondary"}>Small Chip</Button>
              <Button variant={"secondary"}>No Chip</Button>
            </div>
          </div>
          <div className="quantity-options mt-8">
            <p className="mb-2">Quantity:</p>
            <div className="quantity-buttons flex flex-row items-center">
              <Button variant={"outline"}>-</Button>
              <p className="w-10 text-center">1</p>
              <Button>+</Button>
            </div>
          </div>
          {/* <AddToCartBtn
          input={{
            product: item,
            coverSize: cover,
            chipSize: chipSize,
            quantity: quantity,
          }}
        /> */}
        </div>
      </div>
      <div className="more-like-this w-full container">
        <h1 className="font-bold text-4xl text-center mb-10">More Like This</h1>
        <div className="items-wrapper w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {loaderItems.map((index) => (
            <Card
              className="hover:bg-neutral-200 flex flex-col items-start py-4 px-4 cursor-pointer w-full"
              key={index}
            >
              <Skeleton className="w-full  h-auto image-wrapper relative aspect-[1.58/1]" />

              <Skeleton className="h-[28px] w-full mb-2 mt-6" />
              <Skeleton className="h-[28px] w-1/2 mb-2" />
            </Card>
          ))}
        </div>
      </div>
      <Faq />
    </>
  );
}

export default loading;
