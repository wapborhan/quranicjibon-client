import React from "react";
import SecBG from "../../assets/images/sec-bg2.jpg";
import PattBG from "../../assets/images/pattern-bg.jpg";
import LearnIMG from "../../assets/images/resources/learn-img.jpg";
import Learn1 from "../../assets/images/resources/learn-post-img1-1.jpg";
import Learn2 from "../../assets/images/resources/learn-post-img1-2.jpg";
import Learn3 from "../../assets/images/resources/learn-post-img1-3.jpg";
import Learn4 from "../../assets/images/resources/learn-post-img1-4.jpg";
import Learn5 from "../../assets/images/resources/learn-post-img1-5.jpg";
import Learn6 from "../../assets/images/resources/learn-post-img1-6.jpg";

const index = () => {
  return (
    <section>
      <div class="w-100 pt-100 black-layer pb-100 opc1 position-relative">
        <div
          class="fixed-bg"
          style={{
            backgroundImage: `url("${SecBG}")`,
          }}
        ></div>
        <div
          class="hlf-bg thm-layer opc6 pat-bg back-blend-multiply thm-bg position-absolute"
          style={{
            backgroundImage: `url("${PattBG}")`,
          }}
        ></div>
        <div class="container">
          <div class="learn-wrap w-100">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-lg-5">
                <div class="learn-img w-100">
                  <img
                    class="img-fluid w-100"
                    src={LearnIMG}
                    alt="Learn Image"
                  />
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-7">
                <div class="learn-inner w-100">
                  <div class="learn-top d-flex flex-wrap align-items-center justify-content-between w-100">
                    <div class="learn-top-inner">
                      <h3 class="mb-0">
                        <i class="flaticon-rub-el-hizb thm-clr"></i>Quran in
                        Arabic
                      </h3>
                    </div>
                    <div class="learn-top-inner">
                      <a href="about.html" title="">
                        Learn More<i class="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="learn-post-wrap w-100">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="learn-post d-flex flex-wrap align-items-center">
                          <div class="learn-post-img">
                            <img
                              class="img-fluid w-100"
                              src={Learn1}
                              alt="Learn Post Image 1"
                            />
                          </div>
                          <div class="learn-post-info">
                            <h4 class="mb-0">
                              <a href="javascript:void(0);" title="">
                                Al-Fatihah
                              </a>
                            </h4>
                            <span class="d-block">The Opener</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i class="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                        <div class="learn-post d-flex flex-wrap align-items-center">
                          <div class="learn-post-img">
                            <img
                              class="img-fluid w-100"
                              src={Learn2}
                              alt="Learn Post Image 2"
                            />
                          </div>
                          <div class="learn-post-info">
                            <h4 class="mb-0">
                              <a href="javascript:void(0);" title="">
                                Al-Mursalat
                              </a>
                            </h4>
                            <span class="d-block">The Emissaries</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i class="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                        <div class="learn-post d-flex flex-wrap align-items-center">
                          <div class="learn-post-img">
                            <img
                              class="img-fluid w-100"
                              src={Learn3}
                              alt="Learn Post Image 3"
                            />
                          </div>
                          <div class="learn-post-info">
                            <h4 class="mb-0">
                              <a href="javascript:void(0);" title="">
                                An-Naba
                              </a>
                            </h4>
                            <span class="d-block">The Tidings</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i class="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="learn-post d-flex flex-wrap align-items-center">
                          <div class="learn-post-img">
                            <img
                              class="img-fluid w-100"
                              src={Learn4}
                              alt="Learn Post Image 4"
                            />
                          </div>
                          <div class="learn-post-info">
                            <h4 class="mb-0">
                              <a href="javascript:void(0);" title="">
                                Az-Zumar
                              </a>
                            </h4>
                            <span class="d-block">The Troops</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i class="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                        <div class="learn-post d-flex flex-wrap align-items-center">
                          <div class="learn-post-img">
                            <img
                              class="img-fluid w-100"
                              src={Learn5}
                              alt="Learn Post Image 5"
                            />
                          </div>
                          <div class="learn-post-info">
                            <h4 class="mb-0">
                              <a href="javascript:void(0);" title="">
                                Al-Baqarah
                              </a>
                            </h4>
                            <span class="d-block">The Cow</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i class="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                        <div class="learn-post d-flex flex-wrap align-items-center">
                          <div class="learn-post-img">
                            <img
                              class="img-fluid w-100"
                              src={Learn6}
                              alt="Learn Post Image 6"
                            />
                          </div>
                          <div class="learn-post-info">
                            <h4 class="mb-0">
                              <a href="javascript:void(0);" title="">
                                Ghafir
                              </a>
                            </h4>
                            <span class="d-block">The Forgiver</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i class="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
