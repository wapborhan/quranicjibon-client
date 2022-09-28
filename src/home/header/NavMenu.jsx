import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav class="d-flex flex-wrap align-items-center justify-content-center">
      <div class="header-left">
        <ul class="mb-0 list-unstyled d-inline-flex">
          <li class="menu-item-has-children">
            <NavLink to="/pages/sura" title="আল কুরআন">
              আল কুরআন
            </NavLink>
          </li>
          <li class="menu-item-has-children">
            <NavLink to="/pages/allah-names" title="আল্লাহর নাম">
              আল্লাহর নাম
            </NavLink>
          </li>
          <li class="menu-item-has-children">
            <NavLink to="/pages/kalema" title="কালেমা">
              কালেমা
            </NavLink>
          </li>
          <li class="menu-item-has-children">
            <NavLink to="/pages/qurbani" title="কুরবানি">
              কুরবানি
            </NavLink>
            {/* <ul class="mb-0 list-unstyled">
              <li>
                <a to="products.html" title="">
                  Our Products
                </a>
              </li>
              <li>
                <a to="product-detail.html" title="">
                  Product Detail
                </a>
              </li>
              <li>
                <a to="cart.html" title="">
                  Product Cart
                </a>
              </li>
              <li>
                <a to="checkout.html" title="">
                  Product Checkout
                </a>
              </li>
            </ul> */}
          </li>
          <li>
            <NavLink to="/pages/tasbih" title="তাসবিহ">
              তাসবিহ
            </NavLink>
          </li>
          <li>
            <NavLink to="/pages/prayer-time" title="নামাজের সময়">
              নামাজের সময়
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div class="header-right">
            <a class="thm-btn thm-bg" to="donation-detail.html" title="">
              Make Donation<span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div> */}
    </nav>
  );
};

export default NavMenu;
