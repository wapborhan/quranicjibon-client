"use client";
import { toBengaliNumber } from "bengali-number";
import Link from "next/link";
import React, { useState } from "react";

const MainContent = () => {
  const [query, setQuery] = useState("");
  const chapters = [
    {
      chapter_id: 1,
      title: "",
    },
    {
      chapter_id: 2,
      title: "",
    },
    {
      chapter_id: 2,
      title: "",
    },
    {
      chapter_id: 2,
      title: "",
    },
    {
      chapter_id: 2,
      title: "",
    },
    {
      chapter_id: 2,
      title: "",
    },
  ];
  const book = [];
  return (
    <div className="w-full h-full pb-16 md:pb-0 flex flex-col md:bg-white md:rounded-2xl overflow-hidden dark:bg-slate-600 dark:text-gray-300">
      <div className="hidden h-[52px] px-4 py-5 md:flex items-center space-x-2 bg-gray-50 border-b-2 rounded-t-2xl dark:bg-slate-500 dark:border-gray-500">
        {/* <FaBookOpen
                    size={20}
                /> */}
        h<span>&gt;</span>
        <span className="text-sm">{book?.book_name}</span>
      </div>
      <div className="h-[cal(100%-52px)] md:px-4 overflow-y-auto space-y-2  pt-6 md:pt-0 pb-2 md:mt-0 dark:px-2 mb-2">
        <div
          // onClick={() => setMenu(!menu)}
          className="md:hidden p-4 flex items-center space-x-2 bg-white rounded-xl cursor-pointer dark:bg-slate-700"
        >
          {/* <AiOutlineMenu size={20} /> */}A
          <span className="text-xl">{book?.title}</span>
        </div>
        <div className="md:mt-0 p-4 md:p-2 flex flex-col md:flex-row justify-between items-center space-y-2 bg-white md:bg-none rounded-xl md:rounded-none dark:bg-slate-700 dark:rounded-xl dark:pb-3">
          <h2
            // onClick={() => setOpen(!open)}
            className="md:w-1/2 text-[#2b9e76] text-2xl cursor-pointer"
          >
            {book?.title}
          </h2>
          <div className="w-full flex justify-between items-center space-x-2 p-3 md:m-4 bg-gray-50 rounded-lg dark:bg-slate-600">
            {/* <BiSearch
                            className='text-gray-500 dark:text-gray-300'
                        /> */}
            <input
              type="text"
              // value={query}
              // onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for filter"
              className="bg-gray-50 w-full font-light text-sm focus:outline-none dark:bg-slate-600"
            />
          </div>
          {/* {open &&
                        <BookDetailsModal {...{
                            open,
                            setOpen,
                            description: book?.book_descr
                        }} />
                    } */}
        </div>
        <div className="space-y-2 md:space-y-0 dark:md:space-y-2">
          {chapters &&
            chapters
              .filter((chapter) =>
                chapter?.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((chapter) => (
                <Link
                  href={`/${name}/${chapter?.chapter_id}`}
                  key={chapter._id}
                  className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-4 md:space-x-2 md:border-b-[0.5px] border-gray-100 rounded-xl md:hover:rounded-xl transition-all duration-500 dark:bg-slate-700 dark:border-b-0"
                >
                  <div className="w-16">
                    <div className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full dark:bg-slate-600 dark:text-gray-300">
                      {toBengaliNumber(chapter?.chapter_id)}
                    </div>
                  </div>
                  <div className="w-11/12 flex flex-col md:flex-row justify-between">
                    <p className="group-hover:text-[#2b9e76] font-medium">
                      {chapter?.title}
                    </p>
                    <p className="text-gray-500 text-sm dark:text-gray-300">
                      <span className="md:hidden">হাদিসের রেঞ্জঃ </span>
                      {toBengaliNumber(chapter?.hadis_range)}
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
      {/* {menu &&
                <Menu {...{ name, menu, setMenu, state, setState, page, handleChange }} />
            } */}
    </div>
  );
};

export default MainContent;
