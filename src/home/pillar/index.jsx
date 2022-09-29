import React from "react";
import SecBG from "../../assets/images/sec-bg2.jpg";
import QuetSecBG from "../../assets/images/quote-sec-bg.jpg";
import PattBG from "../../assets/images/pattern-bg.jpg";
import { FaQuran, FaMosque, FaStarOfDavid, FaKaaba } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";

const index = () => {
  return (
    <section>
      <div class="w-100 black-layer opc1 position-relative">
        <div
          class="fixed-bg"
          style={{
            backgroundImage: `url("${SecBG}")`,
          }}
        ></div>
        <div class="quote-pillars-wrap w-100">
          <div class="row mrg">
            <div class="col-md-12 col-sm-12 col-lg-5">
              <div class="quote-wrap d-flex align-items-end justify-content-end position-relative w-100">
                <div
                  class="fixed-bg"
                  style={{
                    backgroundImage: `url("${QuetSecBG}")`,
                  }}
                ></div>
                <div class="quote-box position-relative thm-layer opc5 w-100">
                  <div
                    class="fixed-bg patern-bg back-blend-multiply thm-bg"
                    style={{
                      backgroundImage: `url("${PattBG}")`,
                    }}
                  ></div>
                  <p class="mb-0">
                    মুহাম্মদ ইবনু আবদুল্লাহ ইবনু নু’মায়র আল হামদানী (রহঃ) ...
                    ইবনু উমর (রাঃ) থেকে বর্ণনা করেন। নবী সাল্লাল্লাহু আলাইহি
                    ওয়াসাল্লাম বলেছেন, ইসলামের বুনিয়াদ পাঁচটি বিষয়ের উপর
                    প্রতিষ্ঠিত। আল্লাহকে এক বলে বিশ্বাস করা, সালাত (নামায/নামাজ)
                    কায়েম করা, যাকাত দেয়া, রামাযানের রোযা পালন করা এবং হাজ্জ
                    (হজ্জ) করা। এক ব্যাক্তি (এ ক্রম পরিবর্তন করে) বলল, হাজ্জ করা
                    ও রামাযানের রোযা পালন করা। রাবী বললেন, না রামাযানের রোযা
                    পালন করা ও হাজ্জ করা এভাবে রাসুলুল্লাহ সাল্লাল্লাহু আলাইহি
                    ওয়াসাল্লাম থেকে শুনেছি।
                  </p>
                  <h4 class="mb-0">কিতাবুল ঈমান (كتاب الإيمان) </h4>
                  <span class="d-block">সহীহ মুসলিম (ইসলামিক ফাউন্ডেশন)</span>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-7">
              <div class="pillars-wrap2 w-100">
                <div class="sec-title v2 left-icon w-100">
                  <div class="sec-title-inner d-inline-block">
                    <i class="flaticon-rub-el-hizb thm-clr"></i>
                    <h2 class="mb-0">
                      <span>ইসলামের স্তম্ভ</span>
                    </h2>
                    <p class="mb-0">
                      ইসলাম ধর্মে পাঁচটি স্তম্ভ আছে । এই পাঁচটি বিষয়ের উপর দৃঢ়
                      বিশ্বাস স্থাপন করা প্রত্যেক মুসলমানের জন্য ফরজ। একই সাথে
                      প্রথম তিনটির উপর আমল করা সকল মুসলমানের জন্য ফরজ এবং শেষ
                      দুটি সামর্থ্য অনুযায়ী আদায় করা ফরজ বা অবশ্য পালনীয় কাজ।
                    </p>
                  </div>
                </div>
                <ul class="pillars-list2 d-flex flex-wrap mb-0 list-unstyled">
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <FaQuran />
                      </span>
                      <h3 class="mb-0">বিশ্বাস</h3>
                      <i class="d-block thm-clr">Faith</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <FaMosque />
                      </span>
                      <h3 class="mb-0">সালাত</h3>
                      <i class="d-block thm-clr">Prayer</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <FaStarOfDavid />
                      </span>
                      <h3 class="mb-0">সাওম</h3>
                      <i class="d-block thm-clr">Fasting</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <GiPayMoney />
                      </span>
                      <h3 class="mb-0">যাকাত</h3>
                      <i class="d-block thm-clr">Almsgiving</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <FaKaaba />
                      </span>
                      <h3 class="mb-0">হজ্জ্ব</h3>
                      <i class="d-block thm-clr">Pilgrimage</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-btn">
                      {/* <a class="thm-btn thm-bg" href="about.html" title="">
                        আরও জানুন<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </a> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
