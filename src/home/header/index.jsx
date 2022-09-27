import React from "react";
import Logo from "../../assets/images/logo.png";
import RetinaLogo from "../../assets/images/retina-logo.png";

const index = () => {
  return (
    <header class="stick style3 position-absolute w-100">
      <div class="topbar-left position-absolute">
        <ul class="topbar-info-list mb-0 list-unstyled d-inline-flex">
          <li>
            <i class="thm-clr far fa-envelope"></i>
            <a href="#" title="">
              info@youremailid.com
            </a>
          </li>
          <li>
            <i class="thm-clr fas fa-phone-alt"></i>+96 125 554 24 5
          </li>
        </ul>
      </div>
      <div class="topbar w-100">
        <div class="container">
          <div class="topbar-inner d-flex flex-wrap justify-content-end">
            <div class="topbar-right d-inline-flex">
              <ul class="topbar-info-list mb-0 list-unstyled d-inline-flex">
                <li>
                  <i class="thm-clr flaticon-sun"></i>Sunrise At:{" "}
                  <span class="thm-clr">5:05am</span>
                </li>
                <li>
                  <i class="thm-clr flaticon-moon"></i>Sunset At:{" "}
                  <span class="thm-clr">7:14pm</span>
                </li>
              </ul>
              <div class="social-links d-inline-flex">
                <a href="https://twitter.com/" title="Twtiiter" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/"
                  title="Facebook"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.youtube.com/"
                  title="Youtube"
                  target="_blank"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  title="Linkedin"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  title="Instagram"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="logo-menu-wrap v3 d-flex flex-wrap align-items-center w-100">
        <div class="logo text-center thm-bg">
          <h1 class="mb-0">
            <a href="index-2.html" title="Home">
              <img
                class="img-fluid"
                src={Logo}
                alt="Logo"
                srcset={RetinaLogo}
              />
            </a>
          </h1>
        </div>
        <div class="container">
          <nav class="d-flex flex-wrap align-items-center justify-content-end">
            <div class="header-left">
              <ul class="mb-0 list-unstyled d-inline-flex">
                <li class="menu-item-has-children">
                  <a href="#" title="">
                    Home
                  </a>
                  <ul class="mb-0 list-unstyled">
                    <li>
                      <a href="index-2.html" title="">
                        Homepage 1
                      </a>
                    </li>
                    <li>
                      <a href="index2.html" title="">
                        Homepage 2
                      </a>
                    </li>
                    <li>
                      <a href="index3.html" title="">
                        Homepage 3
                      </a>
                    </li>
                    {/* <li style="background:#0a993c; color:#fff;">
                            <a
                              target="_blank"
                              href="https://nauthemes.net/html/maktab-rtl/index.html"
                              title=""
                            >
                              RTL Version
                            </a>
                          </li> */}
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="javascript:void(0);" title="">
                    Blog
                  </a>
                  <ul class="mb-0 list-unstyled">
                    <li>
                      <a href="blog.html" title="">
                        Blog Style 1
                      </a>
                    </li>
                    <li>
                      <a href="blog2.html" title="">
                        Blog Style 2
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail.html" title="">
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="javascript:void(0);" title="">
                    Pages
                  </a>
                  <ul class="mb-0 list-unstyled">
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Scholars
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="scholar-style1.html" title="">
                            Scholar Style 1
                          </a>
                        </li>
                        <li>
                          <a href="scholar-style2.html" title="">
                            Scholar Style 2
                          </a>
                        </li>
                        <li>
                          <a href="scholar-detail.html" title="">
                            Scholar Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Urgent Donation
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="urgent-donation.html" title="">
                            Urgent Donation
                          </a>
                        </li>
                        <li>
                          <a href="donation-detail.html" title="">
                            Donation Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Online Courses
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="online-courses.html" title="">
                            Online Courses
                          </a>
                        </li>
                        <li>
                          <a href="online-courses-detail.html" title="">
                            Online Courses Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Services
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="services.html" title="">
                            Services Style 1
                          </a>
                        </li>
                        <li>
                          <a href="services2.html" title="">
                            Services Style 2
                          </a>
                        </li>
                        <li>
                          <a href="services-detail.html" title="">
                            Services Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Gallery
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="gallery.html" title="">
                            Gallery Style 1
                          </a>
                        </li>
                        <li>
                          <a href="gallery2.html" title="">
                            Gallery Style 2
                          </a>
                        </li>
                        <li>
                          <a href="gallery3.html" title="">
                            Gallery Style 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Events
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="events.html" title="">
                            Events
                          </a>
                        </li>
                        <li>
                          <a href="event-detail.html" title="">
                            Event Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Sermons
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="sermons.html" title="">
                            Sermons
                          </a>
                        </li>
                        <li>
                          <a href="sermons-detail.html" title="">
                            Sermons Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="audio-listening.html" title="">
                        Audio Listening
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="javascript:void(0);" title="">
                    Products
                  </a>
                  <ul class="mb-0 list-unstyled">
                    <li>
                      <a href="products.html" title="">
                        Our Products
                      </a>
                    </li>
                    <li>
                      <a href="product-detail.html" title="">
                        Product Detail
                      </a>
                    </li>
                    <li>
                      <a href="cart.html" title="">
                        Product Cart
                      </a>
                    </li>
                    <li>
                      <a href="checkout.html" title="">
                        Product Checkout
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html" title="">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="contact.html" title="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="header-right">
              <a class="thm-btn thm-bg" href="donation-detail.html" title="">
                Make Donation<span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default index;
