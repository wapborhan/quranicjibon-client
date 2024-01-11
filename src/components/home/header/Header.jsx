import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";

export const Header = () => {
  return (
    <>
      <header className="stick style1 w-full">
        <div className="topbars bg-color1 flex flex-wrap justify-center w-full">
          <ul className="topbars-info-list mb-0 list-unstyled inline-flex">
            <li>
              <i className="thm-clr flaticon-sun"></i>
              সূর্যোদয়: <span className="thm-clr">০০:০০</span>
            </li>
            <li>
              <i className="thm-clr flaticon-moon"></i>
              সূর্যাস্ত: <span className="thm-clr">০০:০০</span>
            </li>
          </ul>
          <div className="social-links inline-flex text-light">
            <div className="dateshow">
              {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
                day: "numeric",
                month: "long",
                weekday: "long",
                year: "numeric",
              }).format(Date.now())}
            </div>
            <div className="datehide">
              {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
                day: "numeric",
                month: "long",
                weekday: "long",
              }).format(Date.now())}
            </div>
          </div>
        </div>
        <div className="logo-menu-wrap flex flex-wrap justify-between w-full">
          <div className="logo position-relative thm-layer opc0 back-blend-multiply thm-bg">
            <h1 className="mb-0">
              <Link href="/" title="Home">
                <span className="cursor-pointer"> কুরআনিক জীবন</span>
              </Link>
            </h1>
          </div>
          <NavMenu />
        </div>
      </header>
    </>
  );
};
