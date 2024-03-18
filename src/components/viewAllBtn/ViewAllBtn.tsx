"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function ViewAllBtn() {
  const router = useRouter();
  return (
    <Button
      type="button"
      size={"lg"}
      onClick={() => router.push("/products?page=1&per_page=12&filter=all")}
    >
      View All Products
    </Button>
  );
}

export default ViewAllBtn;
