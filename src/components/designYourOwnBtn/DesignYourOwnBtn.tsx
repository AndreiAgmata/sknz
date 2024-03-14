"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function DesignYourOwnBtn() {
  const router = useRouter();
  return (
    <Button
      type="button"
      variant={"outline"}
      size={"lg"}
      onClick={() => router.push("/products")}
    >
      Design Your Own
    </Button>
  );
}

export default DesignYourOwnBtn;
