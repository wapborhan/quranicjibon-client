import { toBengaliNumber } from "bengali-number";
import Link from "next/link";
import React from "react";

const SideContentList = () => {
  const books = [
    {
      book_name: "h",
    },
    {
      book_name: "h",
    },
    {
      book_name: "h",
    },
    {
      book_name: "h",
    },
    {
      book_name: "h",
    },
    {
      book_name: "h",
    },
    {
      book_name: "h",
    },
  ];
  return (
    <div className="space-y-1">
      {books &&
        books.map((book) => (
          <Link
            href={`/${book?.book_name}`}
            // onClick={() => handleChange(book?.book_name)}
            key={book._id}
            className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500 dark:bg-slate-700 dark:text-gray-300"
          >
            <div className="">
              <div className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full dark:bg-slate-600 dark:text-gray-300">
                {book?.abvr_code}
              </div>
            </div>
            <div className="w-full">
              <p className="group-hover:text-[#2b9e76] font-medium">
                {book?.title}
              </p>
              <p className="text-gray-500 text-sm dark:text-gray-300">
                সর্বমোট হাদিসঃ {toBengaliNumber(book?.number_of_hadis)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SideContentList;
