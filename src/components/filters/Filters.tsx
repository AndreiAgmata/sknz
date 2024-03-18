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

function Filters({ filter }: { filter: string }) {
  const router = useRouter();
  return (
    <div className="flex gap-4 items-center justify-center">
      <p>Filter: </p>
      <Select
        defaultValue={filter}
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
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Streetwear">Street Wear</SelectItem>
            <SelectItem value="Automotive">Automotive</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Filters;
