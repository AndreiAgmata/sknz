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

function SortBy() {
  return (
    <Select defaultValue="bestSellers">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Best Sellers" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="bestSellers">Best Sellers</SelectItem>
          <SelectItem value="lowToHigh">Price, low to high</SelectItem>
          <SelectItem value="highToLow">Price, high to Low</SelectItem>
          <SelectItem value="aToZ">Alphabetically, A to Z</SelectItem>
          <SelectItem value="zToA">Alphabetically, Z to A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SortBy;
