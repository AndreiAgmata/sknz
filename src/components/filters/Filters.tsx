"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

function Filters() {
  const router = useRouter();
  return (
    <div className="flex gap-4 items-center justify-center">
      <p>Filter: </p>
      <Select
        onValueChange={(value) =>
          router.push(`/products?page=1&per_page=12&filter=${value}`)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="streetwear">Street Wear</SelectItem>
            <SelectItem value="automotive">Automotive</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Filters;
