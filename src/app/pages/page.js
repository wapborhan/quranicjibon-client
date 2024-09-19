import CatList from "@/components/pages/categories/CatList";
import Answar from "@/components/pages/categories/answar/Answar";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-4 xl-min:gap-6 py-5 xss:pt-24 xss:pb-9 xs:pb-6 sm:col-start-1 sm-max:pt-[5rem] sm:pb-7 md:col-start-1 md:pb-6 md:pt-20 lg:grid-cols-1 xl:grid-cols-[350px,1fr] 2xl-min:grid-cols-[350px,1fr] ">
      <CatList />
      <Answar />
      {/* <AnsSide /> */}
    </div>
  );
};

export default page;
