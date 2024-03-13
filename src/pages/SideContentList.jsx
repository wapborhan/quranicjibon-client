import Icon from "@/components/shared/Icon";
import { toBengaliNumber } from "bengali-number";
import Link from "next/link";
import React from "react";

const SideContentList = ({ suras }) => {
  return (
    <div className="space-y-1">
      {suras &&
        suras.map((sura) => (
          <Link
            href={`/${sura?.book_name}`}
            // onClick={() => handleChange(sura?.book_name)}
            key={sura._id}
            className="w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500 dark:bg-darkz dark:text-gray-300  dark:border-0 border-2 border-slate-100"
          >
            <div className="">
              <div className="flex justify-center items-center  w-12 h-12">
                <Icon title={sura?.index} />
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="frist">
                <p className="group-hover:text-[#2b9e76] font-medium">
                  {sura?.name_bn}
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-300">
                  {sura?.name_en}
                </p>
              </div>
              <div className="second">
                <p className="text-gray-500 text-sm dark:text-gray-300">
                  {sura?.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SideContentList;
