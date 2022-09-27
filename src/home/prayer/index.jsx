import React from "react";
import PatternBG from "../../assets/images/pattern-bg.jpg";

const index = () => {
  return (
    <section>
      <div class="w-100 position-relative">
        <div class="container">
          <div class="time-wrap3 overlap2589 overlap-60 position-relativ w-100">
            <ul class="time-list3 d-flex flex-wrap mb-0 list-unstyled">
              <li
                class="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>Fajr:</span> 04:06 AM<i>Iqamah: 4:00 AM</i>
              </li>
              <li
                class="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>Sunrise:</span> 05:30 AM<i>Iqamah: 4:00 AM</i>
              </li>
              <li
                class="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>Dhuhr:</span> 12:23 PM<i>Iqamah: 4:00 AM</i>
              </li>
              <li
                class="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>Asr:</span> 03:43 PM<i>Iqamah: 4:00 AM</i>
              </li>
              <li
                class="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>Maghrib:</span> 07:10 PM<i>Iqamah: 4:00 AM</i>
              </li>
              <li
                class="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>Isha'a:</span> 08:35 PM<i>Iqamah: 4:00 AM</i>
              </li>
            </ul>
            {/* <div class="sec-title text-center w-100 mt-3">
              <div class="sec-title-inner d-inline-block">
                <h2 class="mb-0 text-dark">Today's Prayer Times</h2>
                <p class="mb-0 thm-clr">
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

export default index;
