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
import { GiRubElHizb } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <section>
      <div className="w-100 pt-100 black-layer pb-100 opc1 position-relative">
        <div
          className="fixed-bg"
          style={{
            backgroundImage: `url("${SecBG}")`,
          }}
        ></div>
        <div
          className="hlf-bg thm-layer opc6 pat-bg back-blend-multiply thm-bg position-absolute"
          style={{
            backgroundImage: `url("${PattBG}")`,
          }}
        ></div>
        <div className="container">
          <div className="learn-wrap w-100">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-5">
                <div className="learn-img w-100">
                  <img
                    className="img-fluid w-100"
                    src={LearnIMG}
                    alt="Learn Image"
                  />
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-7">
                <div className="learn-inner w-100">
                  <div className="learn-top d-flex flex-wrap align-items-center justify-content-between w-100">
                    <div className="learn-top-inner">
                      <h3 className="mb-0">
                        <i className="flaticon-rub-el-hizb thm-clr">
                          <GiRubElHizb />
                        </i>
                        আল কুরআন (সুরা ক্রমে)
                      </h3>
                    </div>
                    <div className="learn-top-inner">
                      <NavLink
                        to="/pages/sura"
                        className="text-decoration-none"
                      >
                        সম্পূর্ণ কুরআন
                        <i className="fas fa-angle-double-right"></i>
                      </NavLink>
                    </div>
                  </div>
                  <div className="learn-post-wrap w-100">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="learn-post d-flex flex-wrap align-items-center">
                          <div className="learn-post-img">
                            <img
                              className="img-fluid w-100"
                              src={Learn1}
                              alt="Learn Post Image 1"
                            />
                          </div>
                          <div className="learn-post-info">
                            <h4 className="mb-0">
                              <a href="javascript:void(0);" title="">
                                Al-Fatihah
                              </a>
                            </h4>
                            <span className="d-block">The Opener</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i className="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                        <div className="learn-post d-flex flex-wrap align-items-center">
                          <div className="learn-post-img">
                            <img
                              className="img-fluid w-100"
                              src={Learn2}
                              alt="Learn Post Image 2"
                            />
                          </div>
                          <div className="learn-post-info">
                            <h4 className="mb-0">
                              <a href="javascript:void(0);" title="">
                                Al-Mursalat
                              </a>
                            </h4>
                            <span className="d-block">The Emissaries</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i className="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                        <div className="learn-post d-flex flex-wrap align-items-center">
                          <div className="learn-post-img">
                            <img
                              className="img-fluid w-100"
                              src={Learn3}
                              alt="Learn Post Image 3"
                            />
                          </div>
                          <div className="learn-post-info">
                            <h4 className="mb-0">
                              <a href="javascript:void(0);" title="">
                                An-Naba
                              </a>
                            </h4>
                            <span className="d-block">The Tidings</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i className="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="learn-post d-flex flex-wrap align-items-center">
                          <div className="learn-post-img">
                            <img
                              className="img-fluid w-100"
                              src={Learn4}
                              alt="Learn Post Image 4"
                            />
                          </div>
                          <div className="learn-post-info">
                            <h4 className="mb-0">
                              <a href="javascript:void(0);" title="">
                                Az-Zumar
                              </a>
                            </h4>
                            <span className="d-block">The Troops</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i className="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                        <div className="learn-post d-flex flex-wrap align-items-center">
                          <div className="learn-post-img">
                            <img
                              className="img-fluid w-100"
                              src={Learn5}
                              alt="Learn Post Image 5"
                            />
                          </div>
                          <div className="learn-post-info">
                            <h4 className="mb-0">
                              <a href="javascript:void(0);" title="">
                                Al-Baqarah
                              </a>
                            </h4>
                            <span className="d-block">The Cow</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i className="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                        <div className="learn-post d-flex flex-wrap align-items-center">
                          <div className="learn-post-img">
                            <img
                              className="img-fluid w-100"
                              src={Learn6}
                              alt="Learn Post Image 6"
                            />
                          </div>
                          <div className="learn-post-info">
                            <h4 className="mb-0">
                              <a href="javascript:void(0);" title="">
                                Ghafir
                              </a>
                            </h4>
                            <span className="d-block">The Forgiver</span>
                            <a href="assets/pdf/book.pdf" title="">
                              Download PDF
                              <i className="fas fa-angle-double-right"></i>
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
