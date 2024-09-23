"use client";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SuraList from "./SuraList";

const Quran = ({ suras }) => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="mt-4 md:mt-0 p-4 flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 dark:bg-darks bg-white rounded-xl  dark:text-dark-text">
        <h2 className="text-2xl font-medium font-HindSiliguri">আল কোরআন</h2>
        <div className="w-full md:w-9/12 flex justify-between items-center space-x-2 px-4 border-2 rounded-lg dark:border-gray-500">
          <BiSearch className="text-gray-500 dark:text-dark-text" />
          <input
            type="text"
            // value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="খুজুন সুরার নাম বাংলাই, ইংরেজি ও সুরা নম্বর দিয়ে"
            className="w-full py-3 font-light text-sm focus:outline-none dark:bg-darks"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 py-5">
        {suras &&
          suras
            .filter(
              (sura) =>
                sura?.name_en.toLowerCase().includes(query.toLowerCase()) ||
                sura?.name_bn.toLowerCase().includes(query.toLowerCase()) ||
                sura?.index.toLowerCase().includes(query.toLowerCase())
            )
            .map((sura) => <SuraList sura={sura} key={sura._id} />)}
      </div>
    </>
  );
};

export default Quran;
