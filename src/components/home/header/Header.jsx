import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";

const Header = () => {
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
          <div className="social-links inline-flex text-white">
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
          <NavMenu />
        </div>
      </header>
    </>
  );
};
export default Header;
