import React from "react";

const MobileNav = () => {
  return (
    <ul className="mb-0 list-unstyled w-100">
      <li className="menu-item-has-children">
        <a href="javascript:void(0);" title="">
          Home
        </a>
        <ul className="mb-0 list-unstyled">
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
          <li className="text-white">
            <a
              target="_blank"
              href="https://nauthemes.net/html/maktab-rtl/index.html"
              title=""
            >
              RTL Version
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <a href="javascript:void(0);" title="">
          Blog
        </a>
        <ul className="mb-0 list-unstyled">
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
      <li className="menu-item-has-children">
        <a href="javascript:void(0);" title="">
          Pages
        </a>
        <ul className="mb-0 list-unstyled">
          <li className="menu-item-has-children">
            <a href="javascript:void(0);" title="">
              Our Scholars
            </a>
            <ul className="mb-0 list-unstyled">
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
          <li className="menu-item-has-children">
            <a href="javascript:void(0);" title="">
              Urgent Donation
            </a>
            <ul className="mb-0 list-unstyled">
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
          <li className="menu-item-has-children">
            <a href="javascript:void(0);" title="">
              Online Courses
            </a>
            <ul className="mb-0 list-unstyled">
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
          <li className="menu-item-has-children">
            <a href="javascript:void(0);" title="">
              Our Services
            </a>
            <ul className="mb-0 list-unstyled">
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
          <li className="menu-item-has-children">
            <a href="javascript:void(0);" title="">
              Our Gallery
            </a>
            <ul className="mb-0 list-unstyled">
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
          <li className="menu-item-has-children">
            <a href="javascript:void(0);" title="">
              Our Sermons
            </a>
            <ul className="mb-0 list-unstyled">
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
      <li className="menu-item-has-children">
        <a href="javascript:void(0);" title="">
          Our Events
        </a>
        <ul className="mb-0 list-unstyled">
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
      <li className="menu-item-has-children">
        <a href="javascript:void(0);" title="">
          Products
        </a>
        <ul className="mb-0 list-unstyled">
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
  );
};

export default MobileNav;
