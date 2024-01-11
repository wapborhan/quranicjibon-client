import React from "react";

const NavMenu = () => {
  return (
    <nav className="flex flex-wrap items-center justify-center">
      <div className="header-left">
        <ul className="mb-0 list-none inline-flex">
          <li className="relative group">
            <a href="/pages/sura" className="text-black hover:text-gray-500">
              আল কুরআন
            </a>
          </li>
          <li className="relative group">
            <a
              href="/pages/allah-names"
              className="text-black hover:text-gray-500"
            >
              আল্লাহর নাম
            </a>
          </li>
          <li className="relative group">
            <a href="/pages/kalema" className="text-black hover:text-gray-500">
              কালেমা
            </a>
          </li>
          <li className="relative group">
            <a href="/pages/qurbani" className="text-black hover:text-gray-500">
              কুরবানি
            </a>
          </li>
          <li className="relative group">
            <a href="/pages/tasbih" className="text-black hover:text-gray-500">
              তাসবিহ
            </a>
          </li>
          <li className="relative group">
            <a
              href="/pages/prayer-time"
              className="text-black hover:text-gray-500"
            >
              নামাজের সময়
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
