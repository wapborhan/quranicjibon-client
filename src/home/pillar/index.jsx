import React from "react";
import SecBG from "../../assets/images/sec-bg2.jpg";
import QuetSecBG from "../../assets/images/quote-sec-bg.jpg";
import PattBG from "../../assets/images/pattern-bg.jpg";

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
                    The saying fruitful were let for him all fruitful morning.
                    Second may waters set was were there upon his he winged
                    won’t itself there very first under seasons.
                  </p>
                  <h4 class="mb-0">Muhammad al-Bukhari</h4>
                  <span class="d-block">(d. 256 AH/870 AD)</span>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-7">
              <div class="pillars-wrap2 w-100">
                <div class="sec-title v2 left-icon w-100">
                  <div class="sec-title-inner d-inline-block">
                    <i class="flaticon-rub-el-hizb thm-clr"></i>
                    <h2 class="mb-0">The Pillars of Islam</h2>
                    <p class="mb-0">
                      Duis aute irure dolor in reprehenit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <ul class="pillars-list2 d-flex flex-wrap mb-0 list-unstyled">
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <i class="flaticon-quran-1"></i>
                      </span>
                      <h3 class="mb-0">Shahadah</h3>
                      <i class="d-block thm-clr">Faith</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <i class="flaticon-mosque-1"></i>
                      </span>
                      <h3 class="mb-0">Salah</h3>
                      <i class="d-block thm-clr">Prayer</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <i class="flaticon-star"></i>
                      </span>
                      <h3 class="mb-0">Sawm</h3>
                      <i class="d-block thm-clr">Fasting</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <i class="flaticon-gift-box"></i>
                      </span>
                      <h3 class="mb-0">Zakat</h3>
                      <i class="d-block thm-clr">Almsgiving</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-box2 position-relative w-100">
                      <span class="d-inline-block thm-clr">
                        <i class="flaticon-kaaba"></i>
                      </span>
                      <h3 class="mb-0">Hajj</h3>
                      <i class="d-block thm-clr">Pilgrimage</i>
                    </div>
                  </li>
                  <li>
                    <div class="pillar-btn">
                      <a class="thm-btn thm-bg" href="about.html" title="">
                        LEARN MORE<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </a>
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
