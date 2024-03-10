import Image from "next/image";
import Link from "next/link";
import React from "react";

const headLink = [
  {
    id: 0,
    title: "আল কুরআন",
    path: "/pages/quran",
  },
  {
    id: 1,
    title: "আল্লাহর নাম",
    path: "/pages/allah-names",
  },
  {
    id: 2,
    title: "কালেমা",
    path: "/pages/kalema",
  },
  {
    id: 3,
    title: "কুরবানি",
    path: "/pages/qurbani",
  },
];

const NavMenu = () => {
  return (
    <nav className="flex flex-wrap items-center justify-center">
      <div className="header-left">
        <ul className="mb-0 list-none inline-flex gap-5">
          {headLink.map((link) => {
            return (
              <li className="relative group" key={link.id}>
                <Link
                  href="/"
                  className="text-black relative hover:text-gray-500"
                >
                  {link?.title}
                </Link>
                <Image
                  src="https://freepngimg.com/save/11416-coming-soon-transparent/291x294"
                  height={20}
                  width={50}
                  alt="pic"
                  className="absolute -top-1 -right-5"
                ></Image>
              </li>
            );
          })}
          <li className="relative group">
            <Link href="/pages/siam" className="text-black hover:text-gray-500">
              রোযা
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
