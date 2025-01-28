import React, { Dispatch, SetStateAction, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
type PaginationComponentProps = {
  maxPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  setCurrentPage,
  maxPage,
}) => {
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={() => goToPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-2 py-1 mx-1 text-sm border rounded hover:bg-primary hover:text-white disabled:opacity-50"
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      {Array.from({ length: maxPage }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-3 py-2 mx-1 text-sm border rounded ${
            currentPage === page
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => goToPage(Math.min(maxPage, currentPage + 1))}
        disabled={currentPage === maxPage}
        className="px-2 py-1 mx-1 text-sm border rounded hover:bg-primary hover:text-white disabled:opacity-50"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default PaginationComponent;
