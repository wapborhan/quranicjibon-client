import React from "react";
import PatternBG from "../../assets/images/pattern-bg.jpg";
import moment from "moment";

import "moment/min/locales.min";
moment.locale("bn");

const Contents = (props) => {
  console.log(props);
  // const perfectTime = moment()
  //   .hours(timeOr[0])
  //   .minutes(timeOr[1])
  //   .format("hh:mm A");

  return (
    <ul className="time-list3 d-flex flex-wrap mb-0 list-unstyled">
      <li
        className="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>ফজর:</span> ০০:০০ AM<i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>সূর্যোদয়:</span> ০০:০০ AM<i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>যোহর:</span> ০০:০০ PM<i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>আসর:</span> ০০:০০ PM<i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>মাগরিব:</span> ০০:০০ PM<i>ইকামাহ: ০০:০০ AM</i>
      </li>
      <li
        className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
        style={{
          backgroundImage: `url("${PatternBG}")`,
        }}
      >
        <span>এশা:</span> ০০:০০ PM<i>ইকামাহ: ০০:০০ AM</i>
      </li>
      {/* {item} */}
    </ul>
  );
};

export default Contents;
