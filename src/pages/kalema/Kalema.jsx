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

  console.log(selectKalema);
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
      <KalemaDetails selectKalema={selectKalema} />
    </>
  );
};

export default Kalema;
