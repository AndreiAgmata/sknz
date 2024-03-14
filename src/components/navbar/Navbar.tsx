import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart, Search } from "lucide-react";

function Navbar() {
  return (
    <section className="d-flex justify-center align bg-center fixed w-screen top-0 z-50">
      <nav
        className="container mx-auto w-full h-16 flex items-center justify-between rounded-b-xl"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <Link href={"/"} className="flex flex-col gap-0">
          <h1 className="text-2xl text-neutral-50 font-bold mb-0 lh">SK</h1>
          <h1
            className="text-2xl text-neutral-50 font-bold mb-0"
            style={{ marginTop: "-15px" }}
          >
            NZ
          </h1>
        </Link>

        <div className="public-links flex gap-5">
          <Link href={"/products"} className="text-neutral-100">
            Shop
          </Link>
          <Link href={""} className="text-neutral-100">
            About
          </Link>
          <Link href={""} className="text-neutral-100">
            Contact
          </Link>
        </div>
        <div className="user-links flex gap-3 items-center">
          <Link href={""} className="text-neutral-100">
            <Search size={20} color="background" />
          </Link>
          <Link href={""} className="text-neutral-100">
            <ShoppingCart size={20} color="background" />
          </Link>
          <Button variant={"secondary"}>Sign In</Button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;