"use client";
import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

function PaginationComponent({
  totalItems,
  per_page,
  page,
  filter,
  sortBy,
}: {
  totalItems: number;
  page: string;
  per_page: string;
  filter: string;
  sortBy: string;
}) {
  const router = useRouter();
  return (
    <div className="pagination my-8">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {Number(page) !== 1 && (
              <PaginationPrevious
                onClick={() =>
                  router.push(
                    `/products?page=${
                      Number(page) - 1
                    }&per_page=${per_page}&filter=${filter}&sortBy=${sortBy}`
                  )
                }
              />
            )}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              isActive={Number(page) === Number(page)}
              onClick={() =>
                router.push(
                  `/products?page=${Number(
                    page
                  )}&per_page=${per_page}&filter=${filter}&sortBy=${sortBy}`
                )
              }
            >
              {page}
            </PaginationLink>
          </PaginationItem>
          {Number(page) < totalItems / Number(per_page) && (
            <PaginationItem>
              <PaginationLink
                isActive={Number(page) === Number(page) + 1}
                onClick={() =>
                  router.push(
                    `/products?page=${
                      Number(page) + 1
                    }&per_page=${per_page}&filter=${filter}&sortBy=${sortBy}`
                  )
                }
              >
                {Number(page) + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {Number(page) + 1 < totalItems / Number(per_page) && (
            <PaginationItem>
              <PaginationLink
                isActive={Number(page) === Number(page) + 2}
                onClick={() =>
                  router.push(
                    `/products?page=${
                      Number(page) + 2
                    }&per_page=${per_page}&filter=${filter}&sortBy=${sortBy}`
                  )
                }
              >
                {Number(page) + 2}
              </PaginationLink>
            </PaginationItem>
          )}
          {Number(page) + 2 < totalItems / Number(per_page) && (
            <PaginationItem>
              <PaginationEllipsis
                onClick={() =>
                  router.push(
                    `/products?page=${
                      Number(page) + 3
                    }&per_page=${per_page}&filter=${filter}&sortBy=${sortBy}`
                  )
                }
              />
            </PaginationItem>
          )}
          <PaginationItem>
            {Number(page) < totalItems / Number(per_page) && (
              <PaginationNext
                onClick={() =>
                  router.push(
                    `/products?page=${
                      Number(page) + 1
                    }&per_page=${per_page}&filter=${filter}&sortBy=${sortBy}`
                  )
                }
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PaginationComponent;
