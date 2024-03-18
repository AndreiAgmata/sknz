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

function SortBy({ filter, sortBy }: { filter: string; sortBy: string }) {
  const router = useRouter();
  return (
    <Select
      defaultValue={sortBy}
      onValueChange={(value) =>
        router.push(
          `/products?page=1&per_page=12&filter=${filter}&sortBy=${value}`
        )
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Best Sellers" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="bestSellers">Best Sellers</SelectItem>
          <SelectItem value="priceLowToHigh">Price, low to high</SelectItem>
          <SelectItem value="priceHighToLow">Price, high to Low</SelectItem>
          <SelectItem value="aToZ">Alphabetically, A to Z</SelectItem>
          <SelectItem value="zToA">Alphabetically, Z to A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SortBy;
