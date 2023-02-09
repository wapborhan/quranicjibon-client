import React, { useState } from "react";
import axios from "axios";
import Contents from "./Contents";

const Index = () => {
  const [prayerTime, setPrayerTime] = useState(null);
  const [lat, setLat] = useState("23.897144493916453");
  const [long, setLong] = useState("89.11046038653564");
  const [timestamp, setTimestamp] = useState(new Date().getTime());

  const time = Math.round(timestamp / 1000);
  axios
    .get(
      `//api.aladhan.com/v1/timings/${time}?latitude=${lat}&longitude=${long}`
    )
    .then((response) => {
      // console.log(response);
      const data = response.data.data.timings;
      // setPrayerTime(
      //   { sahri: data.Imsak },
      //   { fajar: data.Fajr },
      //   { sunrise: data.Sunrise },
      //   { Dhuhr: data.Dhuhr },
      //   { Asr: data.Asr },
      //   { Sunset: data.Sunset },
      //   { Maghrib: data.Maghrib },
      //   { Isha: data.Isha }
      // );
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <section>
      <div className="w-100 position-relative">
        <div className="container">
          <div className="time-wrap3 overlap2589 overlap-60 position-relativ w-100">
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

export default Index;
