import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import CartBtn from "../cartBtn/CartBtn";

function Navbar() {
  return (
    <section className="d-flex justify-center bg-center fixed w-screen top-0 z-50">
      <nav
        className="container mx-auto w-full h-20 flex items-center justify-between rounded-b-xl"
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

        <div className="user-links flex gap-5 items-center">
          <CartBtn />
          <Button variant={"secondary"}>Sign In</Button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
