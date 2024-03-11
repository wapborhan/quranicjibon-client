import React from "react";

const SideContentHeader = () => {
  const state = "book";

  return (
    <div className="md:min-h-[120px]0">
      <div className="flex justify-between border md:border-none text-xl">
        <button
          // onClick={() => setState("book")}
          className={`w-1/2 py-3 ${
            state === "book"
              ? "bg-[#2b9e76] text-white"
              : "md:border-b dark:border-gray-500"
          } md:rounded-tl-2xl`}
        >
          বই
        </button>
        <button
          // onClick={() => setState("chapter")}
          className={`w-1/2 py-3 ${
            state === "chapter"
              ? "bg-[#2b9e76] text-white"
              : "md:border-b dark:border-gray-500"
          } md:rounded-tr-2xl`}
        >
          অধ্যায়
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center space-x-2 px-3 py-1 m-4 bg-gray-50 rounded-lg dark:bg-slate-700">
          {/* <BiSearch className="text-gray-500" /> */}
          <input
            type="text"
            placeholder="Search for filter"
            className="bg-gray-50 w-full py-2 font-light text-sm focus:outline-none dark:bg-slate-700"
          />
        </div>
      </div>
    </div>
  );
};

export default SideContentHeader;
