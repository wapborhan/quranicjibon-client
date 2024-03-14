import React from "react";
import { BiSearch } from "react-icons/bi";

const SideContentHeader = ({ content }) => {
  // console.log(content);
  return (
    <div className="md:min-h-[120px]">
      <div className="flex justify-between gap-1 border-b text-xl">
        {content?.length > 0 &&
          content?.map((item) => {
            return (
              <button
                key={item?.id}
                // onClick={() => setState("book")}
                className={`w-full py-3 ${
                  item?.status === "active"
                    ? "bg-[#2b9e76] text-white"
                    : "md:border-b dark:border-gray-500"
                } md:rounded-t-2xl`}
              >
                {item.name}
              </button>
            );
          })}
      </div>
      <div>
        <div className="flex justify-between items-center space-x-2 px-3 py-1 m-4 bg-body-grey-bg rounded-lg dark:bg-darkz">
          <BiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for filter"
            className="bg-body-grey-bg w-full py-2 font-light text-sm focus:outline-none dark:bg-darkz"
          />
        </div>
      </div>
    </div>
  );
};

export default SideContentHeader;
