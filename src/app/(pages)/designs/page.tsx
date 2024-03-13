"use client";
import React from "react";
import ProductsData from "../../../../public/data/data.json";
import ItemCard from "@/components/itemCard/ItemCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

function DesignsPage() {
  const router = useRouter();
  return (
    <section className="container mx-auto pt-16">
      <h1 className="text-4xl font-bold text-center mt-8">All Designs</h1>
      <div className="header py-4 flex flex-row justify-between">
        <div className="filters flex flex-row items-center gap-4">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger>Filters</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuItem>Sports</DropdownMenuItem>
              <DropdownMenuItem>Designers</DropdownMenuItem>
              <DropdownMenuItem>Automotive</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Colors</DropdownMenuLabel>
              <DropdownMenuItem>Black</DropdownMenuItem>
              <DropdownMenuItem>White</DropdownMenuItem>
              <DropdownMenuItem>Red</DropdownMenuItem>
              <DropdownMenuItem>Blue</DropdownMenuItem>
              <DropdownMenuItem>Multi Color</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="sortBy flex flex-row gap-2 items-center">
          <p>{ProductsData.length} Item(s)</p>
          <p>|</p>
          <p>Sort By</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Best Sellers" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="featured">Best Sellers</SelectItem>
                <SelectItem value="lowToHigh">Price, low to high</SelectItem>
                <SelectItem value="highToLow">Price, high to Low</SelectItem>
                <SelectItem value="aToZ">Alphabetically, A to Z</SelectItem>
                <SelectItem value="zToA">Alphabetically, Z to A</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="cards-wrapper flex flex-row flex-wrap items-center justify-center gap-10">
        {ProductsData.map((product, index) => (
          <ItemCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export default DesignsPage;
