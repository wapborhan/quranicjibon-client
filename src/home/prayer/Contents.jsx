import { timingFormatter } from "@/components/shared/timingFormatter";
import React, { useContext } from "react";
// import moment from "moment";
import { DateTime } from "luxon";

// import "moment/min/locales.min";
// moment.locale("bn");

const Contents = ({ prayerTime }) => {
  // const { Fajr } = prayerTime;

  // console.log(prayerTime?.Fajr);

  return (
    <ul className="time-list3 flex flex-wrap mb-0 list-unstyled">
      <li
        className="pat-bg thm-layer opc7 back-blend-multiply thm-bg "
        style={{
          backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
        }}
      >
        <span>সূর্যোদয়:</span>

        {prayerTime && timingFormatter(prayerTime?.Sunrise)}
        {/* <i>ইকামাহ: ০০:০০ AM</i> */}
      </li>
      <li
        className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
        style={{
          backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
        }}
      >
        <span>ফজর:</span>
        {prayerTime && timingFormatter(prayerTime?.Fajr)}
        {/* AM */}
        {/* <i>
          ইকামাহ:{" "}
          {prayerTime && (
            <span>
              {DateTime.fromISO(prayerTime?.Fajr)
                .minus({ minutes: 15 })
                .toLocaleString(DateTime.TIME_SIMPLE)}
            </span>
          )}
        </i> */}
      </li>
      <li
        className="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
        style={{
          backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
        }}
      >
        <span>যোহর:</span>
        {prayerTime && timingFormatter(prayerTime?.Dhuhr)}
        {/* <i>ইকামাহ: ০০:০০ AM</i> */}
      </li>
      <li
        className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
        style={{
          backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
        }}
      >
        <span>আসর:</span>
        {prayerTime && timingFormatter(prayerTime?.Asr)}
        {/* <i>ইকামাহ: ০০:০০ AM</i> */}
      </li>
      <li
        className="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
        style={{
          backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
        }}
      >
        <span>মাগরিব:</span>
        {prayerTime && timingFormatter(prayerTime?.Maghrib)}
        {/* <i>ইকামাহ: ০০:০০ AM</i> */}
      </li>
      <li
        className="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
        style={{
          backgroundImage: `url("/assets/images/pattern-bg.jpg")`,
        }}
      >
        <span>এশা:</span>
        {prayerTime && timingFormatter(prayerTime?.Isha)}
        {/* <i>ইকামাহ: ০০:০০ AM</i> */}
      </li>
      {/* {item} */}
    </ul>
  );
};

export default Contents;
