import React, { useState, useEffect } from "react";
// import axios from "axios";
import Contents from "./Contents";

const Prayer = () => {
  // const [prayerTime, setPrayerTime] = useState(null);
  const lat = "23.897144493916453";
  const long = "89.11046038653564";
  const timestamp = new Date();

  // const time = Math.round(timestamp / 1000);
  const time = "18-02-2023";

  // useEffect(() => {
  //   axios
  //     .get(
  //       `//api.aladhan.com/v1/timings/${time}?latitude=${lat}&longitude=${long}`
  //     )
  //     .then((response) => {
  //       // console.log(response);
  //       const data = response.data.data.timings;
  //       setPrayerTime([
  //         { time: ["সেহরী শেষ", data.Imsak] },
  //         { time: ["ফজর", data.Fajr] },
  //         { time: ["সূর্যোদয়", data.Sunrise] },
  //         { time: ["জোহর", data.Dhuhr] },
  //         { time: ["আছর", data.Asr] },
  //         { time: ["সূর্যাস্ত", data.Sunset] },
  //         { time: ["মাগরিব", data.Maghrib] },
  //         { time: ["এশা", data.Isha] },
  //         { time: ["মধ্যরাত", data.Midnight] },
  //       ]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  let prayerTime;
  // console.log(prayerTime);
  return (
    <section>
      <div className="w-full relative">
        <div className="container mx-auto">
          <div className="time-wrap3 overlap2589 overlap-60 position-relativ w-100">
            <Contents prayertime={prayerTime} />
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
