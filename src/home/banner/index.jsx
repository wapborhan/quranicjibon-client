import React from "react";
import Slide1 from "../../assets/images/resources/slide1.jpg";
import { GiRubElHizb } from "react-icons/gi";

const index = () => {
  return (
    <section>
      <div class="w-100 position-relative">
        <div class="feat-wrap v1 text-center position-relative w-100">
          <div class="feat-caro">
            <div class="feat-item">
              <div
                class="feat-img position-absolute"
                style={{
                  backgroundImage: `url(${Slide1})`,
                }}
              ></div>
              <div class="feat-cap-wrap position-absolute d-inline-block">
                <div class="feat-cap d-inline-block">
                  <i class="d-inline-block flaticon-rub-el-hizb thm-clr">
                    <GiRubElHizb />
                  </i>
                  <h2 class="mb-0">Nothing Is Impossible With Allah</h2>
                  <p class="mb-0">
                    Consectetur adipiscing elit duis volutpat ligula nulla
                    dapibus.
                  </p>
                  <a class="thm-btn thm-bg rounded" href="about.html" title="">
                    Take A Tour
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            {/* <div class="feat-item">
              <div
                class="feat-img position-absolute"
                // style="background-image: url(assets/images/resources/slide2.jpg);"
              ></div>
              <div class="feat-cap-wrap position-absolute d-inline-block">
                <div class="feat-cap d-inline-block">
                  <i class="d-inline-block flaticon-rub-el-hizb thm-clr"></i>
                  <h2 class="mb-0">Allah Help Those Who Help Themselves</h2>
                  <p class="mb-0">
                    Consectetur adipiscing elit duis volutpat ligula nulla
                    dapibus.
                  </p>
                  <a class="thm-btn thm-bg" href="about.html" title="">
                    Take A Tour<span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="feat-item">
              <div
                class="feat-img position-absolute"
                // style="background-image: url(assets/images/resources/slide3.jpg);"
              ></div>
              <div class="feat-cap-wrap position-absolute d-inline-block">
                <div class="feat-cap d-inline-block">
                  <i class="d-inline-block flaticon-rub-el-hizb thm-clr"></i>
                  <h2 class="mb-0">
                    Islam is an Abrahamic Monotheistic Religion
                  </h2>
                  <p class="mb-0">
                    Consectetur adipiscing elit duis volutpat ligula nulla
                    dapibus.
                  </p>
                  <a class="thm-btn thm-bg" href="about.html" title="">
                    Take A Tour<span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
