import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link } from "lucide-react";

function Footer() {
  return (
    <footer
      className="footer container h-96 rounded-t-xl flex flex-col items-center justify-center py-4 relative"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="content w-full grid grid-cols-5 text-neutral-50">
        <div className="shop leading-10">
          <p className="title font-semibold text-3xl mb-4">Shop</p>
          <p className="font-medium">Design Your Own</p>
          <p className="font-medium">Collections</p>
          <p className="font-medium">Categories</p>
        </div>
        <div className="help leading-10">
          <p className="title font-semibold text-3xl mb-4">Help</p>
          <p className="font-medium">Account</p>
          <p className="font-medium">Shipping Policy</p>
          <p className="font-medium">Return Policy</p>
          <p className="font-medium">How it works</p>
          <p className="font-medium">Contact Us</p>
        </div>
        <div className="email-subscription col-span-2">
          <p className="title font-semibold text-3xl mb-4">Never miss a deal</p>
          <p>
            Subscribe to our emailing list to receive notifications <br /> about
            deals and new releases.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
            <Input
              type="email"
              placeholder="Email"
              style={{ backgroundColor: "#0C0C0C" }}
            />
            <Button type="submit" variant={"secondary"}>
              Subscribe
            </Button>
          </div>
        </div>
        <div className="logo flex flex-col items-center justify-start">
          <p className="text-9xl text-neutral-50 font-bold mb-0 lh">SK</p>
          <p
            className="text-9xl text-neutral-50 font-bold mb-0"
            style={{ marginTop: "-35px" }}
          >
            NZ
          </p>
        </div>
      </div>
      <p
        className="text-neutral-50 absolute bottom-4"
        style={{ fontSize: "0.75rem" }}
      >
        &copy; Designed and Developed by Andrei Agmata 2024
      </p>
    </footer>
  );
}

export default Footer;
