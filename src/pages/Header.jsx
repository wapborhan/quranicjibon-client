"use client";
import { BsQuestionDiamondFill } from "react-icons/bs";
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
          <div className="icon text-[1.7rem] leading-7 style-Kalpurush-webKit text-[#1fa471] xss:hidden xs:text-xl">
            <BsQuestionDiamondFill />
          </div>
        </div>
        <div className="ml-6 block md-max:hidden">
          <h3 className="text-xl font-bold text-black dark:text-hadith-deepoffwhite ">
            Quranic Jibon
          </h3>
          {/* <h6 className="text-sm text-[#404040] dark:text-hadith-deepoffwhite">
            প্রশ্ন করুণ এবং জানুন
          </h6> */}
        </div>
        <div className="ml-4 hidden xss:ml-3 md-max:block">
          <h1 className="text-[1.7rem] leading-7 style-Kalpurush-webKit text-[#1fa471] xss:hidden xs:text-xl">
            IQN
          </h1>
        </div>
      </Link>
      <div className="flex items-center justify-end md-max:gap-4 lg-min:gap-20 2xl-min:gap-5">
        <div className="w-fit fixed bottom-1/2 2xl-min:ml-12 xss:hidden xs:hidden sm:hidden md:hidden lg:bottom-5 xl-max:left-4 xl-max:bottom-5 2xl-min:flex 2xl-min:relative 2xl-min:top-0 ">
          <div className="bg-hadith-button-background cursor-pointer px-5 py-3 text-white rounded-lg xs:p-4 sm:p-4 md-min:gap-2 lg-min:flex lg-min:items-center lg-min:justify-center lg-min:relative ">
            <p className="webkit text-[1.05rem] leading-[1] lg:hidden xl:hidden">
              সাপোর্ট করুন
            </p>
            {/* <img src="/assets/others/helping-hand.svg" alt="" /> */}
          </div>
        </div>
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
