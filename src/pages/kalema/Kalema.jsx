"use client";
import React, { useState } from "react";
import SideContentHeader from "../SideContentHeader";
import KalemaList from "./KalemaList";
import KalemaDetails from "./KalemaDetails";

const Kalema = ({ kalemas }) => {
  const [selectKalema, setSelectKalema] = useState({
    _id: "65f574cc099e76e7af150dd1",
    id: "1",
    name: "কালেমা তাইয়্যিবাহ",
    kalemaAr: "لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ",
    kalemaBnU: "লা-ইলা-হা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ্।",
    kalemaBnA:
      "আল্লাহ ছাড়া কোন উপাস্য নাই, হযরত মুহাম্মাদ (সাঃ) তাঁহার প্রেরিত রাসুল।",
    kalemaEn:
      "There is no God but Allah, [and] Muhammad is the messenger of Allah.",
    audio:
      "https://al-quran.technobdapis.com/assets/media/kalima_audio/kalima_taiyaba.mp3",
  });

  const handleDataSubmit = (data) => {
    setSelectKalema(data);
  };

  return (
    <>
      <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-darks dark:text-gray-300">
        <SideContentHeader
          content={[{ id: 1, name: "Kalema", status: "active" }]}
        />

        <div className="p-2 h-[cal(100%-120px)] overflow-y-auto mb-2">
          <KalemaList kalemas={kalemas} onDataSubmit={handleDataSubmit} />
        </div>
      </div>
      <div className="content  px-2">
        <div className="block lg-max:w-full w-full lg-max:block lg-max:col-span-full xss:pt-0 dark:bg-darks my-2">
          <div className="flex flex-row justify-between p-4 bg-white dark:bg-darks dark:bg-hadith-dark-card rounded-md items-center cursor-pointer dark:bg-dark-bg xl-min:hidden ">
            <p className="flex gap-x-2 style-Kalpurush text-title font-medium leading-[25px] dark:text-dark-text text-mss ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
              সহিহ বুখারী
            </p>
          </div>
        </div>
        <KalemaDetails selectKalema={selectKalema} />
      </div>
    </>
  );
};

export default Kalema;
