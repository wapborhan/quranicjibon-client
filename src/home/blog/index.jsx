import React from "react";
import BottomIMG from "../../assets/images/sec-botm-mckp2.png";

const index = () => {
  return (
    <section>
      <div className="w-100 pt-90 pb-235 position-relative">
        <img
          className="sec-btm-mckp img-fluid position-absolute"
          src={BottomIMG}
          alt="Sec Bottom Mockup"
        />
        <div className="container">
          {/* <div className="sec-title text-center w-100">
            <div className="sec-title-inner d-inline-block">
              <i className="flaticon-rub-el-hizb thm-clr"></i>
              <h2 className="mb-0">Recent News & Updates</h2>
              <p className="mb-0">
                Adipiscing elit duis volutpat ligula nulla dapibus.
              </p>
            </div>
          </div> */}
          {/* <div className="blog-wrap res-row w-100">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="post-box w-100">
                  <div className="post-img overflow-hidden position-relative w-100">
                    <a href="blog-detail.html" title="">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/resources/blog-img1-1.jpg"
                        alt="Blog Image 1"
                      />
                    </a>
                  </div>
                  <div className="post-info position-relative w-100">
                    <a className="thm-bg" href="blog-detail.html" title="">
                      <i className="fas fa-link"></i>
                    </a>
                    <span className="post-date thm-clr">July 30, 2020</span>
                    <h3 className="mb-0">
                      <a href="blog-detail.html" title="">
                        American Muslim: Choosing to Remain Still This Ramadan
                      </a>
                    </h3>
                    <ul className="post-meta d-flex flex-wrap mb-0 list-unstyled">
                      <li>
                        <i className="fas fa-user-alt"></i>By:{" "}
                        <a href="javascript:void(0);" title="">
                          James Smith
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-comment-alt"></i>1 Comments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="post-box w-100">
                  <div className="post-img overflow-hidden position-relative w-100">
                    <a href="blog-detail.html" title="">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/resources/blog-img1-2.jpg"
                        alt="Blog Image 2"
                      />
                    </a>
                  </div>
                  <div className="post-info position-relative w-100">
                    <a className="thm-bg" href="blog-detail.html" title="">
                      <i className="fas fa-link"></i>
                    </a>
                    <span className="post-date thm-clr">June 28, 2020</span>
                    <h3 className="mb-0">
                      <a href="blog-detail.html" title="">
                        How to Teach Kids Ramadan Isn't about Food
                      </a>
                    </h3>
                    <ul className="post-meta d-flex flex-wrap mb-0 list-unstyled">
                      <li>
                        <i className="fas fa-user-alt"></i>By:{" "}
                        <a href="javascript:void(0);" title="">
                          James Smith
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-comment-alt"></i>5 Comments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="post-box w-100">
                  <div className="post-img overflow-hidden position-relative w-100">
                    <a href="blog-detail.html" title="">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/resources/blog-img1-3.jpg"
                        alt="Blog Image 3"
                      />
                    </a>
                  </div>
                  <div className="post-info position-relative w-100">
                    <a className="thm-bg" href="blog-detail.html" title="">
                      <i className="fas fa-link"></i>
                    </a>
                    <span className="post-date thm-clr">April 25, 2020</span>
                    <h3 className="mb-0">
                      <a href="blog-detail.html" title="">
                        If Islam Teaches Peace, Why Are there Radical Muslims?
                      </a>
                    </h3>
                    <ul className="post-meta d-flex flex-wrap mb-0 list-unstyled">
                      <li>
                        <i className="fas fa-user-alt"></i>By:{" "}
                        <a href="javascript:void(0);" title="">
                          James Smith
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-comment-alt"></i>15 Comments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="view-more d-inline-block text-center w-100">
            <a className="thm-btn mini-btn thm-bg" href="blog.html" title="">
              More News & Updates<span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default index;
