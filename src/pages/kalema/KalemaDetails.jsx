"use client";
import Icon from "@/components/shared/Icon";
import React, { useState } from "react";

const KalemaDetails = ({ selectKalema }) => {
  return (
    <div className="w-full h-full pb-16 md:pb-0 flex flex-col md:bg-white md:rounded-2xl overflow-hidden dark:bg-darks dark:text-gray-300">
      <div className="flex h-[52px] px-4 py-5 md:flex items-center space-x-2 bg-white border-b-2 rounded-t-2xl dark:bg-darks dark:border-gray-500">
        {/* <FaBookOpen size={20} /> */}
        <span>&gt;</span>
        <div className="text-lg">{selectKalema?.name}</div>
      </div>
      <div className="h-[cal(100%-52px)] md:px-4 overflow-y-auto space-y-2  pt-6 md:pt-0 pb-2 md:mt-0 dark:px-2 mb-2 ">
        <div className="space-y-2 mt-3">
          <div
            key={selectKalema?.id}
            className="w-full text-slate-400 dark:text-dark-text p-5 group  bg-white  flex justify-between gap-5 space-x-4 md:space-x-2  border-gray-100 border-[0.3px] dark:border-0 rounded-xl md:hover:rounded-xl transition-all items-start duration-500 dark:bg-darkz shadow-sm"
          >
            <div className="w-11/12 flex gap-3 flex-col justify-between space-y-5">
              <h3 className="text-right leading-loose mb-4 text-2xl font-kfgq">
                {selectKalema?.kalemaAr}
              </h3>
              <p>
                <span>বাংলা উচ্চারণ -</span>
                <br />
                {selectKalema?.kalemaBnU}
              </p>

              <p>
                <span>বাংলা অর্থ -</span>
                <br />
                {selectKalema?.kalemaBnA}
              </p>

              <p>
                <span>English -</span>
                <br />
                {selectKalema?.kalemaEn}
              </p>
            </div>
            <div className="w-16">
              <Icon title={selectKalema?.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KalemaDetails;
