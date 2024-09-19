import Card from "@/components/shared/Card";
import React from "react";
import { BiSearch } from "react-icons/bi";

const Salat = () => {
  const salatCard = [
    {
      id: 1,
      name_bn: "আজান ও ইকামত",
      icon: "hy",
      link: "/pages/salat",
    },
    {
      id: 2,
      name_bn: "পাক পবিত্রতা",
      icon: "hy",
      link: "/pages/salat",
    },
    {
      id: 3,
      name_bn: "নামাজ শিক্ষা",
      icon: "hy",
      link: "/pages/salat",
    },
    {
      id: 4,
      name_bn: "নামাজ ভিজুয়াল (পুরুষ ও মহিলা)",
      icon: "hy",
      link: "/pages/salat",
    },
    {
      id: 5,
      name_bn: "বিভিন্ন নামাজের নিয়ম",
      icon: "hy",
      link: "/pages/salat",
    },
    {
      id: 6,
      name_bn: "নামাজের দোয়া",
      icon: "hy",
      link: "/pages/salat",
    },
    {
      id: 7,
      name_bn: "প্রয়োজনীয় সূরা",
      icon: "hy",
      link: "/pages/salat",
    },
    {
      id: 8,
      name_bn: "মোনাজাত",
      icon: "hy",
      link: "/pages/salat",
    },
    {
      id: 9,
      name_bn: "মাসাইল",
      icon: "hy",
      link: "/pages/salat",
    },
  ];
  return (
    <>
      <div className="mt-4 md:mt-0 p-4 flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 dark:bg-darks bg-white rounded-xl  dark:text-dark-text">
        <h2 className="text-2xl font-medium font-HindSiliguri">নামাজ</h2>
        <div className="w-full md:w-9/12 flex justify-between items-center space-x-2 px-4 border-2 rounded-lg dark:border-gray-500">
          <BiSearch className="text-gray-500 dark:text-dark-text" />
          <input
            type="text"
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for filter"
            className="w-full py-3 font-light text-sm focus:outline-none dark:bg-darks"
          />
        </div>
      </div>
      <h1>৫ ওয়াক্ত নামাজের রাকাত সমূহ</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 py-5">
        {salatCard &&
          salatCard.map((data) => <Card data={data} key={data._id} />)}
      </div>
      <h1>নামাজের ইতিহাস</h1>
    </>
  );
};

export default Salat;
