import React from "react";
import PattBG from "../../assets/images/pattern-bg.jpg";

const index = () => {
  return (
    <section>
      <div class="w-100 pt-80 white-layer pb-50 opc9 position-relative">
        <div
          class="fixed-bg patern-bg back-blend-multiply white-bg"
          // style="background-image: url(assets/images/pattern-bg.jpg);"
          style={{
            backgroundImage: `url("${PattBG}")`,
          }}
        ></div>
        <div class="container">
          <div class="facts-wrap w-100">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-lg-4">
                <div class="fact-box d-flex flex-wrap align-items-center w-100">
                  <span class="rounded-circle">
                    <i class="flaticon-mosque-3"></i>
                  </span>
                  <div class="fact-inner">
                    <h3 class="mb-0 counter">74,300</h3>
                    <h5 class="mb-0">Community Members</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-lg-4">
                <div class="fact-box d-flex flex-wrap align-items-center w-100">
                  <span class="rounded-circle">
                    <i class="flaticon-mat-1"></i>
                  </span>
                  <div class="fact-inner">
                    <h3 class="mb-0 counter">410</h3>
                    <h5 class="mb-0">Inspirational Sermons</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-lg-4">
                <div class="fact-box d-flex flex-wrap align-items-center w-100">
                  <span class="rounded-circle">
                    <i class="flaticon-beads"></i>
                  </span>
                  <div class="fact-inner">
                    <h3 class="mb-0 counter">8,100</h3>
                    <h5 class="mb-0">Islamic Years Together</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
