import React from "react";
import ItemCard from "@/components/itemCard/ItemCard";
import prisma from "@/lib/prisma";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import Filters from "@/components/filters/Filters";
import SortBy from "@/components/sortBy/SortBy";
import { Product } from "@/lib/types";

interface Category {
  id: string;
  name: string;
  products: Product[];
}

const getAllProducts = async ({
  page,
  perPage,
  filter,
  sortBy,
}: {
  page: string;
  perPage: string;
  filter: string;
  sortBy: string;
}) => {
  const skip = (parseInt(page, 10) - 1) * parseInt(perPage, 10);
  if (filter && filter != "all") {
    let category: Category | null;

    switch (sortBy) {
      case "bestSellers":
        category = await prisma.category.findFirst({
          where: { name: filter },
          include: {
            products: {
              orderBy: { totalSales: "desc" },
              skip,
              take: parseInt(perPage, 10),
            },
          },
        });
        return category?.products;
        break;

      case "priceLowToHigh":
        category = await prisma.category.findFirst({
          where: { name: filter },
          include: {
            products: {
              orderBy: { price: "asc" },
              skip,
              take: parseInt(perPage, 10),
            },
          },
        });
        return category?.products;
        break;

      case "priceHighToLow":
        category = await prisma.category.findFirst({
          where: { name: filter },
          include: {
            products: {
              orderBy: { price: "desc" },
              skip,
              take: parseInt(perPage, 10),
            },
          },
        });
        return category?.products;
        break;

      case "aToZ":
        category = await prisma.category.findFirst({
          where: { name: filter },
          include: {
            products: {
              orderBy: { name: "asc" },
              skip,
              take: parseInt(perPage, 10),
            },
          },
        });
        return category?.products;
        break;

      case "zToA":
        category = await prisma.category.findFirst({
          where: { name: filter },
          include: {
            products: {
              orderBy: { name: "desc" },
              skip,
              take: parseInt(perPage, 10),
            },
          },
        });
        return category?.products;
        break;

      default:
        category = await prisma.category.findFirst({
          where: { name: filter },
          include: {
            products: {
              skip,
              take: parseInt(perPage, 10),
            },
          },
        });
        return category?.products;
        break;
    }
  } else {
    switch (sortBy) {
      case "bestSellers":
        return await prisma.product.findMany({
          orderBy: {
            totalSales: "desc",
          },
          skip,
          take: parseInt(perPage, 10),
        });
        break;

      case "priceLowToHigh":
        return await prisma.product.findMany({
          orderBy: {
            price: "asc",
          },
          skip,
          take: parseInt(perPage, 10),
        });
        break;

      case "priceHighToLow":
        return await prisma.product.findMany({
          orderBy: {
            price: "desc",
          },
          skip,
          take: parseInt(perPage, 10),
        });
        break;

      case "aToZ":
        return await prisma.product.findMany({
          orderBy: {
            name: "asc",
          },
          skip,
          take: parseInt(perPage, 10),
        });
        break;

      case "zToA":
        return await prisma.product.findMany({
          orderBy: {
            name: "desc",
          },
          skip,
          take: parseInt(perPage, 10),
        });
        break;

      default:
        return await prisma.product.findMany({
          skip,
          take: parseInt(perPage, 10),
        });
        break;
    }
  }
};

const getAllProductsCount = async (filter: string) => {
  switch (filter) {
    case "Sports":
      return await prisma.product.count({
        where: {
          categoryId: "1",
        },
      });
    case "Streetwear":
      return await prisma.product.count({
        where: {
          categoryId: "2",
        },
      });
    case "Automotive":
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
  const sortBy = searchParams["sortBy"] ?? "bestSellers";
  const products = await getAllProducts({ page, perPage, filter, sortBy });
  const productsCount = await getAllProductsCount(filter);

  return (
    <section className="container mx-auto pt-24">
      <h1 className="text-4xl font-bold text-center mt-8">All Designs</h1>
      <div className="header py-4 flex flex-row justify-between">
        <div className="filters flex flex-row items-center gap-4">
          <Filters filter={filter} />
        </div>
        <div className="sortBy flex flex-row gap-2 items-center">
          <p>
            Displaying {perPage} of {productsCount} Item(s)
          </p>
          <p>|</p>
          <p>Sort By</p>
          <SortBy filter={filter} sortBy={sortBy} />
        </div>
      </div>
      <div className="cards-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products ? (
          products.map((product, index) => (
            <ItemCard key={index} product={product} />
          ))
        ) : (
          <></>
        )}
      </div>
      <PaginationComponent
        totalItems={productsCount}
        page={`${page}`}
        per_page={`${perPage}`}
        filter={filter}
        sortBy={sortBy}
      />
    </section>
  );
}

export default ProductsPage;
