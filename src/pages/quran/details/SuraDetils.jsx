"use client";
import Icon from "@/components/shared/Icon";
import { toBengaliNumber } from "bengali-number";
import Link from "next/link";
import React, { useState } from "react";

const SuraDetils = ({ ayahs, sura }) => {
  return (
    <>
      <div className="hidden h-[52px] px-4 py-5 md:flex items-center space-x-2 bg-white border-b-2 rounded-t-2xl dark:bg-darks dark:border-gray-500">
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
                className="w-full text-slate-400 dark:text-dark-text p-5 group cursor-pointer bg-white  flex justify-between items-center gap-5 space-x-4 md:space-x-2  border-gray-100 border-[0.3px] dark:border-0 rounded-xl md:hover:rounded-xl transition-all duration-500 dark:bg-darkz shadow-sm"
              >
                <div className="w-11/12 flexs flex-col md:flex-row justify-between">
                  <p className="text-gray-500 text-sm dark:text-gray-300">
                    {ayah?.uthmani}
                  </p>
                  <p className="group-hover:text-[#2b9e76] font-medium">
                    {ayah?.text}
                  </p>
                  <br />
                </div>
                <div className="w-16">
                  <Icon title={ayah?.ayah_id} />
                </div>
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
