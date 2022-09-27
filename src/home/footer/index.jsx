import React from "react";
import PatterBG from "../../assets/images/pattern-bg.jpg";
import FootTopBG from "../../assets/images/sec-botm-mckp.png";
import FootLogo from "../../assets/images/logo2.png";
import FootRetina from "../../assets/images/retina-logo2.png";

const index = () => {
  return (
    <footer>
      <div class="w-100 pt-100 dark-layer pb-50 opc85 position-relative">
        <div
          class="fixed-bg patern-bg back-blend-multiply dark-bg"
          style={{
            backgroundImage: `url("${PatterBG}")`,
          }}
          // style="background-image: url(assets/images/pattern-bg.jpg);"
        ></div>
        <div class="container">
          <div class="footer-data w-100">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-lg-3">
                <div class="widget w-100">
                  <div class="logo">
                    <h1 class="mb-0 text-light">
                      <a href="index-2.html" title="Home">
                        {/* <img
                          class="img-fluid"
                          src={FootLogo}
                          alt="Logo"
                          srcset={FootRetina}
                        /> */}
                        IslamBD
                      </a>
                    </h1>
                  </div>
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet, coteudtu sicing elit, sed do
                    eiusmod tempor inc dntut labore et adipi.
                  </p>
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-9">
                <div class="row justify-content-between">
                  <div class="col-md-6 col-sm-6 col-lg-6">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="widget w-100">
                          <h4 class="widget-title">Information</h4>
                          <ul class="mb-0 list-unstyled w-100">
                            <li>
                              <a href="online-courses.html" title="">
                                Online Courses
                              </a>
                            </li>
                            <li>
                              <a href="audio-listening.html" title="">
                                Audio Listening
                              </a>
                            </li>
                            <li>
                              <a href="blog.html" title="">
                                Our Blog
                              </a>
                            </li>
                            <li>
                              <a href="events.html" title="">
                                Our Events
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="widget w-100">
                          <h4 class="widget-title">Contact Info</h4>
                          <ul class="cont-info-list2 mb-0 list-unstyled w-100">
                            <li>
                              <i class="thm-clr">P:</i>341 22 245 225
                            </li>
                            <li>
                              <i class="thm-clr">E:</i>
                              <a href="javascript:void(0);" title="">
                                username@domain.com
                              </a>
                            </li>
                            <li>
                              425 1st Street, San Francisco, California, USA
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 col-sm-6 col-lg-5">
                    <h4 class="widget-title">Let Us Help You</h4>
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="widget w-100">
                          <ul class="mb-0 list-unstyled w-100">
                            <li>
                              <a href="about.html" title="">
                                About Maktab
                              </a>
                            </li>
                            <li>
                              <a href="urgent-donation.html" title="">
                                Urgent Donation
                              </a>
                            </li>
                            <li>
                              <a href="services.html" title="">
                                Our Services
                              </a>
                            </li>
                            <li>
                              <a href="sermons.html" title="">
                                Our Sermons
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="widget w-100">
                          <ul class="mb-0 list-unstyled w-100">
                            <li>
                              <a href="products.html" title="">
                                Our Products
                              </a>
                            </li>
                            <li>
                              <a href="scholar-style1.html" title="">
                                Our Scholars
                              </a>
                            </li>
                            <li>
                              <a href="contact.html" title="">
                                Contact Us
                              </a>
                            </li>
                            <li>
                              <a href="gallery.html" title="">
                                Maktab Gallery
                              </a>
                            </li>
                          </ul>
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
    </footer>
  );
};

export default index;
