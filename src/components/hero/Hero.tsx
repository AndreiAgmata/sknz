"use client";
import React from "react";
import Image from "next/image";
import cards from "../../../public/hero-images/cards.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  return (
    <section className="mx-auto w-screen flex flex-col items-center">
      <div
        className="w-full h-[30rem] sm:h-[45rem] md:h-[50rem] flex flex-col items-center relative container pt-24 overflow-hidden rounded-b-[4rem] md:rounded-b-[7rem] px-4"
        style={{
          backgroundColor: "#0c0c0c",
        }}
      >
        <div className="tag-line text-6xl sm:text-8xl md:text-9xl">
          <h1 className="text-white font-medium  text-center">START SWIPING</h1>
          <h1 className="text-white font-medium  text-center">WITH STYLE</h1>
          <h1 className="text-white font-medium  text-center">TODAY</h1>
        </div>
        <div className="cards-wrapper absolute w-11/12 h-full bottom-[-11.5rem] sm:bottom-[-20rem] md:bottom-[-22rem]">
          <Image
            src={cards}
            alt="cards-hero-image"
            fill
            unoptimized={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <a
        className="call-to-action z-10 h-40 w-40 self-center hidden md:flex flex-col justify-center items-center rounded-full border-8 border-background gap-3"
        style={{ backgroundColor: "#0c0c0c", marginTop: "-4rem" }}
        href={"#best-sellers"}
      >
        <p className="text-neutral-50 font-semibold">Shop Now</p>
        <Image
          className="invert"
          src={"/hero-images/arrow.svg"}
          height={40}
          width={40}
          alt="arrow-down"
        />
      </a>
      <div className="buttons flex flex-col items-center justify-center gap-8 mt-16 px-8 w-full md:hidden">
        <Button
          type="button"
          size={"lg"}
          className="text-lg w-full"
          onClick={() =>
            router.push(
              "/products?page=1&per_page=12&filter=all&sortBy=bestSellers"
            )
          }
        >
          Shop Now
        </Button>
        <Button
          type="button"
          size={"lg"}
          variant={"outline"}
          className="text-lg w-full"
        >
          Design Your Own
        </Button>
      </div>
    </section>
  );
}

export default Hero;
