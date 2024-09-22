"use client";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";

import MobileMenu from "./MobileMenu";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <>
      <header className="stick style1 w-full relative z-50">
        <Topbar />
        <div className="logo-menu-wrap flex flex-wrap justify-between w-full">
          <div className="logo relative thm-layer opc7 back-blend-multiply thm-bg">
            <h1 className="mb-0 h-full">
              <Link
                href="/"
                title="Home"
                className="cursor-pointer !flex justify-center items-center text-4xl h-full"
              >
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  width={200}
                  height={100}
                />
              </Link>
            </h1>
          </div>
          <nav className="flex flex-wrap items-center justify-center">
            <div className="header-left">
              <ul className="mb-0 list-none flex gap-5">
                <NavMenu />
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};
export default Header;
