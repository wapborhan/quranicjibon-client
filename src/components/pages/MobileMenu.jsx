import Link from "next/link";
import React from "react";

const MobileMenu = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full px-4 py-2 flex justify-between bg-white shadow border-t z-10 dark:bg-slate-600 dark:text-gray-300 dark:border-t-0">
      <Link
        href="/"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
      >
        {/* <AiOutlineHome size={28} /> */}jj
      </Link>
      <Link
        href="/allhadiths"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
      >
        {/* <FiBookOpen size={28} /> */}kk
      </Link>
      <Link
        href="/hadith/subject/category"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
      >
        {/* <PiBooksLight size={28} /> */}jj
      </Link>
      <Link
        href="/bookmark"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
      >
        {/* <BsBookmark size={28} /> */}jjj
      </Link>
      <button
        // onClick={() => setMenu(!menu)}
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
      >
        {/* <PiDotsNineBold size={28} /> */}hh
      </button>
      <button
        // onClick={() => setOpen(!open)}
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
      >
        {/* <BsSend size={28} /> */}h
      </button>
      <Link
        href="/donate"
        className="absolute left-0 bottom-3 translate-x-1/4 p-4 bg-[#2b9e76] text-white rounded-xl"
      >
        {/* <BiDonateBlood size={28} /> */}h
      </Link>
    </div>
  );
};

export default MobileMenu;
