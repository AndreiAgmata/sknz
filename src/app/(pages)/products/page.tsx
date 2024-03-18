import React from "react";
import ItemCard from "@/components/itemCard/ItemCard";
import prisma from "@/lib/prisma";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import Filters from "@/components/filters/Filters";
import SortBy from "@/components/sortBy/SortBy";

const getAllProducts = async ({
  page,
  perPage,
  filter,
}: {
  page: string;
  perPage: string;
  filter: string;
}) => {
  const skip = (parseInt(page, 10) - 1) * parseInt(perPage, 10);
  switch (filter) {
    case "sports":
      return await prisma.product.findMany({
        where: { categoryId: String(1) },
        skip,
        take: parseInt(perPage, 10),
      });
    case "streetwear":
      return await prisma.product.findMany({
        where: { categoryId: String(2) },
        skip,
        take: parseInt(perPage, 10),
      });
    case "automotive":
      return await prisma.product.findMany({
        where: { categoryId: String(3) },
        skip,
        take: parseInt(perPage, 10),
      });
    default:
      return await prisma.product.findMany({
        skip,
        take: parseInt(perPage, 10),
      });
  }
};

const getAllProductsCount = async (filter: string) => {
  switch (filter) {
    case "sports":
      return await prisma.product.count({
        where: {
          categoryId: "1",
        },
      });
    case "streetwear":
      return await prisma.product.count({
        where: {
          categoryId: "2",
        },
      });
    case "automotive":
      return await prisma.product.count({
        where: {
          categoryId: "3",
        },
      });
    default:
      return await prisma.product.count();
  }
};

async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "12";
  const filter = searchParams["filter"] ?? "all";
  const products = await getAllProducts({ page, perPage, filter });
  const productsCount = await getAllProductsCount(filter);
  return (
    <section className="container mx-auto pt-24">
      <h1 className="text-4xl font-bold text-center mt-8">All Designs</h1>
      <div className="header py-4 flex flex-row justify-between">
        <div className="filters flex flex-row items-center gap-4">
          <Filters />
        </div>
        <div className="sortBy flex flex-row gap-2 items-center">
          <p>
            Displaying {perPage} of {productsCount} Item(s)
          </p>
          <p>|</p>
          <p>Sort By</p>
          <SortBy />
        </div>
      </div>
      <div className="cards-wrapper grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <ItemCard key={index} product={product} />
        ))}
      </div>
      <PaginationComponent
        totalItems={productsCount}
        page={`${page}`}
        per_page={`${perPage}`}
        filter={filter}
      />
    </section>
  );
}

export default ProductsPage;
