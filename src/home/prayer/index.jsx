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
                <span>ফজর:</span> ০০:০০ AM<i>ইকামাহ: ০০:০০ AM</i>
              </li>
              <li
                class="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>সূর্যোদয়:</span> ০০:০০ AM<i>ইকামাহ: ০০:০০ AM</i>
              </li>
              <li
                class="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>যোহর:</span> ০০:০০ PM<i>ইকামাহ: ০০:০০ AM</i>
              </li>
              <li
                class="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>আসর:</span> ০০:০০ PM<i>ইকামাহ: ০০:০০ AM</i>
              </li>
              <li
                class="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>মাগরিব:</span> ০০:০০ PM<i>ইকামাহ: ০০:০০ AM</i>
              </li>
              <li
                class="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
                style={{
                  backgroundImage: `url("${PatternBG}")`,
                }}
              >
                <span>এশা:</span> ০০:০০ PM<i>ইকামাহ: ০০:০০ AM</i>
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
