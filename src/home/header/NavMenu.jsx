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
  // {
  //   id: 3,
  //   title: "কুরবানি",
  //   path: "/pages/qurbani",
  // },
];

const NavMenu = () => {
  return (
    <nav className="flex flex-wrap items-center justify-center">
      <div className="header-left">
        <ul className="mb-0 list-none flex gap-5">
          {headLink.map((link) => {
            return (
              <li className="group" key={link.id}>
                <Link href={link?.path} className="text-black ">
                  {link?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
