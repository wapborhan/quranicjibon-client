"use client";
import Icon from "@/components/shared/Icon";
import { toBengaliNumber } from "bengali-number";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SuraDetils = ({ ayahs, sura }) => {
  return (
    <>
      <div className="hidden px-4 h-[100px] md:flex items-center space-x-2 bg-white border-b-2 rounded-t-2xl text-black dark:text-dark-text dark:bg-darks dark:border-gray-500 border-gray-200">
        <Image
          src="/assets/images/quran/madinah.png"
          alt=""
          width={100}
          height={100}
        />
        <span>&gt;</span>
        <div className="text-sm">{sura?.name}</div>
        <div className="text-sm">{sura?.name_en}</div>
        <div className="text-sm">{sura?.name_bn}</div>
        <div className="text-sm">{sura?.meaning_bn}</div>
      </div>
      <div className="h-[cal(100%-52px)] md:px-4 overflow-y-auto space-y-2  pt-6 md:pt-0 pb-2 md:mt-0 dark:px-2 mb-2">
        <div
          // onClick={() => setMenu(!menu)}
          className="md:hidden p-4 flex items-center space-x-2 bg-white rounded-xl cursor-pointer dark:bg-darks"
        >
          {/* <AiOutlineMenu size={20} /> */}A
          <span className="text-xl">{sura?.title}</span>
        </div>
        <div className="space-y-2 ">
          {ayahs &&
            ayahs.map((ayah) => (
              <div
                key={ayah._id}
                className="w-full text-slate-400 dark:text-dark-text p-5 group  bg-white  flex justify-between  gap-5 space-x-4 md:space-x-2 items-start border-gray-100 dark:border-gray-0 border-[0.3px] dark:border-[0px] rounded-xl md:hover:rounded-xl transition-all duration-500 dark:bg-darkz shadow-sm"
              >
                <div className="w-11/12 space-y-5 items-center md:flex-row justify-between">
                  <p className="text-dark-text text-right text-2xl dark:text-gray-300 font-kfgq">
                    {ayah?.uthmani}
                    <span className="font-kfgq mr-3">
                      {parseInt(ayah.ayah_id).toLocaleString("ar-EG")}
                    </span>
                  </p>
                  <p className=" font-medium">{ayah?.text}</p>
                  <br />
                </div>
                {/* <div className="w-16">
                  <Icon title={ayah?.ayah_id} />
                </div> */}
              </div>
            ))}
        </div>
      </div>{" "}
      {/* {menu &&
            <Menu {...{ name, menu, setMenu, state, setState, page, handleChange }} />
        } */}
    </>
  );
};

export default SuraDetils;
