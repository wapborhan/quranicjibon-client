import React from "react";
import { HiHome } from "react-icons/hi";

const SideBar = () => {
  return (
    <div class="md-max:py-3 fixed bottom-0 w-full bg-white dark:bg-hadith-dark-card py-8 lg-min:max-w-[96px] lg-min:h-full lg-min:static md-max:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
      <div class="grid xss:grid-cols-5 xs:grid-cols-5 sm:grid-cols-5 md:grid-rows-1 md:grid-cols-5 lg-min:grid-rows-[1fr,56px,56px,56px,56px,56px,56px,1fr] lg:grid-cols-1 place-content-center place-items-center my-auto h-full gap-[4.5%]">
        {/* <img
          class="p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-2 col-start-1 hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover"
          src="/vercel.svg"
          alt=""
        /> */}
        <HiHome />
        <div class="lg-min:row-start-6 cursor-pointer md-max:hidden lg-min:block">
          {/* <img class="" src="/vercel.svg" alt="" /> */}
        </div>

        <div class="lg-min:row-start-7 cursor-pointer">
          <img class=" md-max:p-2 md-max:w-9  p-4 " src="/vercel.svg" alt="" />
          <HiHome />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
