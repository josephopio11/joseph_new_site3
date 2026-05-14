"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ButtonGroup } from "./ui/button-group";

type PaginationProps = {
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  page?: string;
  perPage?: number;
  category?: string;
  q?: string;
};

const Pagination = (props: PaginationProps) => {
  const { page = 1, totalPages, hasNextPage, hasPreviousPage } = props;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const currentPage = Number(searchParams.get("page")) ?? Number(page) ?? 1;

  const currentPage =
    Number(searchParams.get("page")) > 0
      ? Number(searchParams.get("page"))
      : Number(page) > 0
        ? Number(page)
        : 1;

  const getPagesToShow = () => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 3;
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };
  const myPages = getPagesToShow();

  return (
    <div className="flex w-full max-w-full flex-row items-center justify-center border-b-2 border-dotted border-gray-100 px-3 pt-3 pb-3 transition-all duration-300 sm:border-b-0 sm:pt-0">
      {totalPages > 1 && (
        <>
          <ButtonGroup orientation="horizontal">
            <Button variant="outline" disabled={!hasPreviousPage} asChild>
              <Link
                href={{
                  pathname,
                  query: {
                    page: `${currentPage > 1 ? currentPage - 1 : 1}`,
                  },
                }}
              >
                Previous
              </Link>
            </Button>
            {currentPage > 3 && totalPages >= 5 && (
              <Button variant={"outline"} asChild key={"<<"}>
                <Link
                  href={{
                    pathname,
                    query: {
                      page: "1",
                    },
                  }}
                  className="text-gray-500"
                >
                  {totalPages > 5 ? "<<" : "1"}
                </Link>
              </Button>
            )}
            {myPages.slice(0, totalPages).map((p, i) => (
              <Button
                variant={p === currentPage ? "default" : "outline"}
                asChild
                key={i}
              >
                <Link
                  href={{
                    pathname,
                    query: {
                      page: p,
                      per_page: props.perPage,
                      category: props.category,
                      q: props.q,
                    },
                  }}
                  // className={cn(
                  //   "text-gray-500",
                  //   p === currentPage
                  //     ? "bg-blue-50 font-bold text-blue-600 dark:bg-gray-500 dark:text-white"
                  //     : "",
                  // )}
                >
                  {p}
                </Link>
              </Button>
            ))}

            {currentPage < totalPages - 2 && totalPages > 5 && (
              <Button variant="outline" asChild key={">>"}>
                <Link
                  href={{
                    pathname,
                    query: {
                      page: totalPages.toString(),
                    },
                  }}
                  className="text-gray-500"
                >
                  {">>"}
                </Link>
              </Button>
            )}
            <Button variant="outline" disabled={!hasNextPage} asChild>
              <Link
                href={{
                  pathname,
                  query: {
                    page: `${
                      currentPage < totalPages ? currentPage + 1 : currentPage
                    }`,
                  },
                }}
              >
                Next
              </Link>
            </Button>
          </ButtonGroup>
          {/* <nav aria-label="Bottom navigation">
            <ul className="inline-flex h-10 -space-x-px text-base">
              <li>
                <Button
                  variant="link"
                  className="m-0 p-0 no-underline hover:no-underline"
                  disabled={!hasPreviousPage}
                >
                  <Link
                    href={{
                      pathname,
                      query: {
                        page: `${currentPage > 1 ? currentPage - 1 : 1}`,
                      },
                    }}
                    className="ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </Link>
                </Button>
              </li>
              {currentPage > 3 && totalPages >= 5 && (
                <li>
                  <Link
                    href={{
                      pathname,
                      query: {
                        page: "1",
                      },
                    }}
                    className="flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    {totalPages > 5 ? "<<" : "1"}
                  </Link>
                </li>
              )}
              {myPages.slice(0, totalPages).map((p, i) => (
                <li key={i}>
                  <Link
                    // href={`?page=${p}`}
                    href={{
                      pathname,
                      query: { page: p },
                    }}
                    className={cn(
                      "flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                      p === currentPage
                        ? "bg-blue-50 font-bold text-blue-600 dark:bg-gray-500 dark:text-white"
                        : "",
                    )}
                  >
                    {p}
                  </Link>
                </li>
              ))}

              {currentPage < totalPages - 2 && totalPages > 5 && (
                <li>
                  <Link
                    href={{
                      pathname,
                      query: {
                        page: totalPages.toString(),
                      },
                    }}
                    className="flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    {">>"}
                  </Link>
                </li>
              )}
              <li>
                <Button
                  variant="link"
                  className="m-0 p-0 no-underline hover:no-underline"
                  disabled={!hasNextPage}
                >
                  <Link
                    href={{
                      pathname,
                      query: {
                        page: `${
                          currentPage < totalPages
                            ? currentPage + 1
                            : currentPage
                        }`,
                      },
                    }}
                    className="flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </Link>
                </Button>
              </li>
            </ul>
          </nav> */}
        </>
      )}
    </div>
  );
};

export default Pagination;
