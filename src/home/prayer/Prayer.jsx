"use client";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import Contents from "./Contents";
import useTodayPrayerTime from "@/hooks/useTodayPrayerTime";

const Prayer = () => {
  const [prayerTime, setPrayerTime] = useState();
  const latitude = "23.908775911770977";
  const longitude = "89.12264749493718";
  const { getTodayTimings } = useTodayPrayerTime();

  useEffect(() => {
    getTodayTimings(latitude, longitude).then((res) => {
      setPrayerTime(res.timings);
    });
  }, [latitude, longitude, getTodayTimings]);

  return (
    <section>
      <div className="w-full relative">
        <div className="container mx-auto">
          <div className="time-wrap3 overlap25899 overlap-60 position-relativ w-100">
            <Contents prayerTime={prayerTime} />
            {/* <div className="sec-title text-center w-100 mt-3">
              <div className="sec-title-inner d-inline-block">
                <h2 className="mb-0 text-dark">Today's Prayer Times</h2>
                <p className="mb-0 thm-clr">
                  Islamic: , 9 Shawwal 1441 AH - Monday, June 1, 2020
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prayer;
