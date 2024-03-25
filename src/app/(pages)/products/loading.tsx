import Filters from "@/components/filters/Filters";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import SortBy from "@/components/sortBy/SortBy";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  const loaderItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section className="container mx-auto pt-24">
      <h1 className="text-4xl font-bold text-center mt-8">All Designs</h1>
      <div className="header py-4 flex flex-col md:flex-row justify-between gap-4">
        <div className="filters flex flex-row items-center gap-4">
          <Filters filter={""} />
        </div>
        <div className="sortBy flex flex-col-reverse md:flex-row gap-4 md:items-center">
          <p>Loading Item(s)</p>
          <p className="hidden md:block">|</p>
          <div className="sort-by flex flex-row items-center gap-2">
            <p>Sort By: </p>
            <SortBy filter={""} sortBy={""} />
          </div>
        </div>
      </div>
      <div className="items-wrapper w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {loaderItems.map((index) => (
          <Card
            className="hover:bg-neutral-200 flex flex-col items-start py-4 px-4 cursor-pointer w-full"
            key={index}
          >
            <Skeleton className="w-full  h-auto image-wrapper relative aspect-[1.58/1]" />
            <Skeleton className="h-[28px] w-full mb-2 mt-6" />
            <Skeleton className="h-[28px] w-1/2 mb-2" />
          </Card>
        ))}
      </div>

      <PaginationComponent
        totalItems={48}
        page={"1"}
        per_page={"12"}
        filter={""}
        sortBy={""}
      />
    </section>
  );
}

export default loading;
