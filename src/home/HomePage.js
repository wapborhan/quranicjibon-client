import React, { Component, Fragment } from "react";
import "../assets/stylesheet/homepage/color.css";
import "../assets/stylesheet/homepage/perfect-scrollbar.css";
import "../assets/stylesheet/homepage/responsive.css";
import "../assets/stylesheet/homepage/style.css";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div id="preloader" style={{ display: "block" }}>
          <div class="preloader-inner">
            <i class="preloader-icon thm-clr flaticon-kaaba"></i>
            Wait a Time
          </div>
        </div>
        <main>
          <section>
            <div class="w-100 position-relative">
              <div class="container">
                <div class="time-wrap3 overlap245 overlap-60 position-relativ w-100">
                  <div class="sec-title text-center w-100">
                    <div class="sec-title-inner d-inline-block">
                      <h2 class="mb-0 text-white">Today's Prayer Times</h2>
                      <p class="mb-0 thm-clr">
                        Islamic: , 9 Shawwal 1441 AH - Monday, June 1, 2020
                      </p>
                    </div>
                  </div>
                  <ul class="time-list3 d-flex flex-wrap mb-0 list-unstyled">
                    <li
                      class="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
                      // style="background-image: url(assets/images/pattern-bg.jpg);"
                    >
                      <span>Fajr:</span> 04:06 AM<i>Iqamah: 4:00 AM</i>
                    </li>
                    <li
                      class="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
                      // style="background-image: url(assets/images/pattern-bg.jpg);"
                    >
                      <span>Sunrise:</span> 05:30 AM<i>Iqamah: 4:00 AM</i>
                    </li>
                    <li
                      class="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
                      // style="background-image: url(assets/images/pattern-bg.jpg);"
                    >
                      <span>Dhuhr:</span> 12:23 PM<i>Iqamah: 4:00 AM</i>
                    </li>
                    <li
                      class="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
                      // style="background-image: url(assets/images/pattern-bg.jpg);"
                    >
                      <span>Asr:</span> 03:43 PM<i>Iqamah: 4:00 AM</i>
                    </li>
                    <li
                      class="pat-bg thm-layer opc7 back-blend-multiply thm-bg"
                      // style="background-image: url(assets/images/pattern-bg.jpg);"
                    >
                      <span>Maghrib:</span> 07:10 PM<i>Iqamah: 4:00 AM</i>
                    </li>
                    <li
                      class="pat-bg grn-layer2 opc7 back-blend-multiply bg-color2"
                      // style="background-image: url(assets/images/pattern-bg.jpg);"
                    >
                      <span>Isha'a:</span> 08:35 PM<i>Iqamah: 4:00 AM</i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Fragment>
    );
  }
}
