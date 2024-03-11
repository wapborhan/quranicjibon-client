import Header from "@/components/pages/Header";
import MobileMenu from "@/components/pages/MobileMenu";
import SideBar from "@/components/pages/SideBar";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-screen flex bg-white dark:bg-slate-600">
      <div className="fixed top-0 left-0 w-full p-4 flex justify-between z-10 bg-white rorder-b shadow md:shadow-none dark:bg-slate-600 dark:text-white">
        <Header />
      </div>

      <SideBar />

      <MobileMenu />
      <div className="relative w-full bg-gray-100 md:rounded-tl-3xl pt-[65px] md:mt-[80px] md:p-4 dark:bg-slate-700">
        {children}
      </div>
    </div>
  );
};

export default layout;
