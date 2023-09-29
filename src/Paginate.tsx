import React, { FC } from "react";
import classNames from "classnames";

import { Pagination } from "react-headless-pagination";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

// import classNames from "classnames";

export interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  isMobile: boolean;
  className?: string;
}

export const Paginate: FC<PaginationProps> = ({
  page,
  setPage,
  totalPages,
  isMobile,
  className,
}) => {
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  if (isMobile) {
    return (
      <div className={classNames("flex items-center w-full", className)}>
        <FiArrowLeft
          data-testid="prevPage"
          size={20}
          className={classNames("mr-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          })}
          onClick={() => {
            if (page > 0) handlePageChange(page - 1);
          }}
        />
        <div className="flex justify-center flex-grow text-sm text-gray-700 select-none dark:text-white">
          Page {page + 1} out of {totalPages}
        </div>
        <FiArrowRight
          data-testid="nextPage"
          size={20}
          className={classNames("mr-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page !== totalPages - 1,
            "opacity-50": page === totalPages - 1,
          })}
          onClick={() => {
            if (page < totalPages - 1) handlePageChange(page + 1);
          }}
        />
      </div>
    );
  }

  return (
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      setCurrentPage={handlePageChange}
      className={classNames(
        "flex items-center w-full h-10 text-sm select-none",
        className,
      )}
      truncableText="..."
      truncableClassName="w-10 px-0.5 text-center dark:text-gray-500"
      edgePageCount={2}
      middlePagesSiblingCount={2}
    >
      <Pagination.PrevButton
        data-testid="prevPage"
        className={classNames(
          "h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none",
          {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          },
        )}
      >
        <FiArrowLeft size={20} className={classNames("mr-3")} />
        Previous
      </Pagination.PrevButton>
      <div className="flex items-center justify-center flex-grow">
        <Pagination.PageButton
          activeClassName="bg-primary-50 dark:bg-opacity-0 text-primary-600 dark:text-white"
          inactiveClassName="text-gray-500"
          className={
            "flex items-center justify-center h-10 w-10 rounded-full cursor-pointer font-medium"
          }
        />
      </div>
      <Pagination.NextButton
        data-testid="nextPage"
        className={classNames(
          "h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none",
          {
            "cursor-pointer": page !== totalPages - 1,
            "opacity-50": page === totalPages - 1,
          },
        )}
      >
        Next
        <FiArrowRight size={20} className={classNames("ml-3")} />
      </Pagination.NextButton>
    </Pagination>
  );
};
