"use client";
import React, { useState } from "react";
import SideContentHeader from "../SideContentHeader";
import KalemaList from "./KalemaList";
import KalemaDetails from "./KalemaDetails";

const Kalema = ({ kalemas }) => {
  const [selectKalema, setSelectKalema] = useState(kalemas[0]);

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
      <KalemaDetails selectKalema={selectKalema} />
    </>
  );
};

export default Kalema;
