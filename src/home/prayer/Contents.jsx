import React from "react";
import PatternBG from "../../assets/images/pattern-bg.jpg";
import moment from "moment";

import "moment/min/locales.min";
moment.locale("bn");

const Contents = (props) => {
  console.log(props.prayertime);
  // const item = props.prayertime.map((prayer, a, b) => {
  //   // console.log(prayer.time[1]);
  //   const timeOr = prayer.time[1].split(":");
  //   const perfectTime = moment()
  //     .hours(timeOr[0])
  //     .minutes(timeOr[1])
  //     .format("hh:mm A");
  //   return (
  //     <div key={prayer.time[0]} className="col-md-6">
  //       <div className="prayer-card">
  //         <h3>{prayer.time[0]}</h3>
  //         <p>{perfectTime}</p>
  //       </div>
  //     </div>
  //   );
  // });
  return (
    <ul className="time-list3 d-flex flex-wrap mb-0 list-unstyled">
      {/* <li
        className="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>ফজর:</span>
        {timest.Fajr} AM<i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>সূর্যোদয়:</span> {timest.Sunrise} AM
        <i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>যোহর:</span> {timest.Dhuhr} PM
        <i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>আসর:</span> {timest.Asr} PM
        <i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>মাগরিব:</span> {timest.Maghrib} PM
        <i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>এশা:</span>
     
        {timest.Isha}
        PM
        <i>ইকামাহ: ০০:০০ AM</i>
      </li> */}
      {/* {item} */}
    </ul>
  );
};

export default Contents;
