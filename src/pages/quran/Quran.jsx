"use client";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SuraList from "./SuraList";

const Quran = () => {
  const books = [
    { book_name: "", title: "Title", number_of_hadis: 1523, abvr_code: "T" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "", title: "" },
    { book_name: "w", title: "d" },
    { book_name: "", title: "" },
  ];
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="mt-4 md:mt-0 p-4 flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 bg-white rounded-xl dark:bg-slate-600 dark:text-gray-300">
        <h2 className="text-2xl font-medium">Quran Mazid</h2>
        <div className="w-full md:w-9/12 flex justify-between items-center space-x-2 px-4 border-2 rounded-lg dark:border-gray-500">
          <BiSearch className="text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for filter"
            className="w-full py-3 font-light text-sm focus:outline-none dark:bg-slate-600"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 py-5">
        {books &&
          books
            .filter(
              (book) =>
                book?.book_name.toLowerCase().includes(query.toLowerCase()) ||
                book?.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((book) => <SuraList book={book} key={book._id} />)}
      </div>
    </>
  );
};

export default Quran;
