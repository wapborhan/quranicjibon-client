"use client";
import Icon from "@/components/shared/Icon";
import { toBengaliNumber } from "bengali-number";
import Link from "next/link";
import React, { useState } from "react";

const MainContent = () => {
  const [query, setQuery] = useState("");
  const chapters = [
    {
      chapter_id: 1,
      title: "we",
    },
    {
      chapter_id: 2,
      title: "ew",
    },
    {
      chapter_id: 2,
      title: "ewe",
    },
    {
      chapter_id: 2,
      title: "ewe",
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
    <div className="w-full h-full pb-16 md:pb-0 flex flex-col md:bg-white md:rounded-2xl overflow-hidden dark:bg-darks dark:text-gray-300">
      <div className="hidden h-[52px] px-4 py-5 md:flex items-center space-x-2 bg-white border-b-2 rounded-t-2xl dark:bg-darks dark:border-gray-500">
        {/* <FaBookOpen
                    size={20}
                /> */}
        h<span>&gt;</span>
        <span className="text-sm">{book?.book_name}</span>
      </div>
      <div className="h-[cal(100%-52px)] md:px-4 overflow-y-auto space-y-2  pt-6 md:pt-0 pb-2 md:mt-0 dark:px-2 mb-2">
        <div
          // onClick={() => setMenu(!menu)}
          className="md:hidden p-4 flex items-center space-x-2 bg-white rounded-xl cursor-pointer dark:bg-darks"
        >
          {/* <AiOutlineMenu size={20} /> */}A
          <span className="text-xl">{book?.title}</span>
        </div>
        <div className="md:mt-0 p-4 md:p-2 flex flex-col md:flex-row justify-between items-center space-y-2 bg-body-grey-bg md:bg-none rounded-lg  dark:bg-darkz  dark:pb-3">
          <h2
            // onClick={() => setOpen(!open)}
            className="md:w-1/2 text-[#2b9e76] text-2xl cursor-pointer"
          >
            {book?.title}
          </h2>
          <div className="w-full flex justify-between items-center space-x-2 p-3 md:m-4 bg-white rounded-lg dark:bg-darks">
            {/* <BiSearch
                            className='text-gray-500 dark:text-gray-300'
                        /> */}
            <input
              type="text"
              // value={query}
              // onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for filter"
              className="w-full font-light text-sm focus:outline-none dark:bg-darks"
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
        <div className="space-y-2 ">
          {chapters &&
            chapters
              .filter((chapter) =>
                chapter?.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((chapter) => (
                <Link
                  href={`/${name}/${chapter?.chapter_id}`}
                  key={chapter._id}
                  className="w-full text-slate-400 dark:text-dark-text p-5 group cursor-pointer bg-white  flex justify-between items-center gap-5 space-x-4 md:space-x-2  border-gray-100 border-[0.3px] dark:border-0 rounded-xl md:hover:rounded-xl transition-all duration-500 dark:bg-darkz shadow-sm"
                >
                  <div className="w-16">
                    <Icon title={chapter?.chapter_id} />
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
