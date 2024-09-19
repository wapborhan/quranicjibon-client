"use client";
import { FaQuran } from "react-icons/fa";
import useDarkSide from "../components/shared/DarkMode";
import Link from "next/link";
import { CiDark, CiLight } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [dark, setDark] = useState(true);

  const toggleDarkMode = () => {
    setDark(!dark);
    if (dark) {
      // const root = window.document.documentElement;
      // root.classList.remove("dark");
      // setDark(false);
      setTheme("dark");
    } else {
      // const root = window.document.documentElement;
      // root.classList.add("dark");
      // setDark(true);
      setTheme("light");
    }
  };

  return (
    <>
      <Link href="/" className="flex items-center cursor-pointer">
        <div className="w-11 lg-min:w-fit">
          <div className="icon text-[2.2rem] leading-7 style-Kalpurush-webKit text-[#1fa471] xss:hidden xs:text-xl">
            <FaQuran />
          </div>
        </div>
        <div className="ml-4 xss:ml-3 md-max:block">
          <h1 className="text-[1.7rem] leading-7 style-Kalpurush-webKit text-[#1fa471] xss:hidden xs:text-xl">
            Quranic Jibon
          </h1>
        </div>
      </Link>
      <div className="flex items-center justify-end md-max:gap-4 lg-min:gap-20 2xl-min:gap-5">
        <div
          className="rounded-lg  flex items-center justify-center cursor-pointer"
          onClick={toggleDarkMode}
        >
          {dark ? (
            <CiDark
              size={35}
              // onClick={darkHandler}
              className="bg-gray-200 p-1 rounded cursor-pointer dark:bg-slate-700 dark:text-gray-300"
            />
          ) : (
            <CiLight
              size={35}
              // onClick={darkHandler}
              className="bg-gray-200 p-1 rounded cursor-pointer dark:bg-slate-700 dark:text-gray-300"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
