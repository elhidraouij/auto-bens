"use client";

import { PaginationProps } from "@/types";

const Pagination = ({ page, setPage, totalPage }: PaginationProps) => {
  const length = 4;
  const previousPages = Array.from({ length: length }, (_, i) => page - length + i);
  const nextPages = Array.from({ length: length }, (_, i) => page + i + 1);
  
  const decrementPage = (page: number) => {
    if (page == 1) return
    let result;

    if (page < 1) {
      result = 1
    } else if (page > totalPage) {
      result = totalPage
    } else {
      result = page - 1
    }

    setPage(result)
  }

  const incrementPage = (page: number) => {
    if (page == totalPage) return
    let result;

    if (page < 1) {
      result = 1
    } else if (page > totalPage) {
      result = totalPage
    } else {
      result = page + 1
    }

    setPage(result)
  }

  return (
    page > 0 &&
    totalPage > 0 && (
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base">
          {page > 1 && (
            <li className="cursor-pointer" onClick={() => {decrementPage(page)}}>
              <span className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Précédent</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </span>
            </li>
          )}
          {previousPages.map((i) => {
            if (i < 1) return;
            return (
              <li key={i} onClick={() => {setPage(i)}}>
                <span className="cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                  {i}
                </span>
              </li>
            );
          })}
          <li>
            <span
              className={`cursor-pointer  z-10 flex items-center justify-center px-4 h-10 leading-tight text-yellow-600 border border-yellow-300 bg-yellow-50 hover:bg-yellow-100 hover:text-yellow-700   ${
                page == 1 && "rounded-l-lg"
              } ${page == totalPage && "rounded-r-lg"}`}
            >
              {page}
            </span>
          </li>
          {nextPages.map((i) => {
            if (i < 1 || i > totalPage) return;
            return (
              <li key={i} onClick={() => {setPage(i)}}>
                <span className="cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                  {i}
                </span>
              </li>
            );
          })}
          {page < totalPage && (
            <li className="cursor-pointer" onClick={() => {incrementPage(page)}}>
              <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Suivant</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </span>
            </li>
          )}
        </ul>
      </nav>
    )
  );
};

export default Pagination;
