"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function NotFound() {
  const router = useRouter();
  return (
    <main>
      <div className="h-dvh w-full container flex flex-col justify-center items-center relative">
        <Link href={"/"} className="flex flex-col gap-0 absolute top-4 left-4">
          <h1 className="text-2xl font-bold mb-0 lh">SK</h1>
          <h1
            className="text-2xl font-bold mb-0"
            style={{ marginTop: "-15px" }}
          >
            NZ
          </h1>
        </Link>
        <h1 className="font-bold text-9xl">Oops!</h1>
        <h3 className="font-medium text-2xl mt-4">404 - Page Not Found</h3>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or temporarily unavailable.
        </p>
        <Button
          type="button"
          className="mt-8 text-lg"
          size={"lg"}
          onClick={() => router.push("/")}
        >
          Go to Home
        </Button>
      </div>
    </main>
  );
}

export default NotFound;
