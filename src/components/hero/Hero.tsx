import React from "react";
import Image from "next/image";
import cards from "../../../public/hero-images/cards.png";
import Link from "next/link";

function Hero() {
  return (
    <section className="mx-auto w-screen h-dvh flex flex-col items-center">
      <div
        className="w-full flex flex-col relative container pt-16"
        style={{
          borderBottomRightRadius: "7rem",
          borderBottomLeftRadius: "7rem",
          backgroundColor: "#0c0c0c",
          height: "85%",
          overflow: "hidden",
        }}
      >
        <div className="tag-line text-9xl">
          <h1 className="text-white font-medium  text-center">START SWIPING</h1>
          <h1 className="text-white font-medium  text-center">WITH STYLE</h1>
          <h1 className="text-white font-medium  text-center">TODAY</h1>
        </div>
        <div
          className="cards-wrapper"
          style={{
            marginTop: "-3.5rem",
          }}
        >
          <Image
            src={cards}
            alt="cards-hero-image"
            sizes="100vw"
            unoptimized={true}
          />
        </div>
      </div>
      <a
        className="call-to-action z-10 h-40 w-40 self-center flex flex-col justify-center items-center rounded-full border-8 border-background gap-3"
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
    </section>
  );
}

export default Hero;
