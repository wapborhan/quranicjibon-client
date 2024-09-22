import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import Topbar from "./Topbar";

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="rspn-hdr">
      <div className="rspn-mdbr">
        <Topbar />
      </div>
      <div className="lg-mn">
        <div className="logo">
          <Link
            href="/"
            title="Home"
            className="cursor-pointer !flex justify-center items-center text-4xl h-full"
          >
            <Image
              src="/assets/images/logo-small.png"
              alt="logo"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <div className="rspn-cnt">
          <span>
            <i className="thm-clr far fa-envelope"></i>
            <a href="javascript:void(0);" title="">
              info@youremailid.com
            </a>
          </span>
          <span>
            <i className="thm-clr fas fa-phone-alt"></i>+96 125 554 24 5
          </span>
        </div>
        <span className="rspn-mnu-btn" onClick={() => setMenu(!menu)}>
          <i className="fa fa-list-ul"></i>
        </span>
      </div>
      <div className={`rsnp-mnu active-parent ps ${menu && "slidein"}`}>
        <span className="rspn-mnu-cls" onClick={() => setMenu(!menu)}>
          <i className="fa fa-times"></i>
        </span>

        <ul className="mb-0 list-unstyled w-100">
          <NavMenu />
        </ul>
        <div
          className="ps__rail-x"
          // style="left: 0px; bottom: 0px;"
        >
          <div
            className="ps__thumb-x"
            tabindex="0"
            // style="left: 0px; width: 0px;"
          ></div>
        </div>
        <div
          className="ps__rail-y"
          // style="top: 0px; right: 0px;"
        >
          <div
            className="ps__thumb-y"
            tabindex="0"
            // style="top: 0px; height: 0px;"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
