import Link from "next/link";

const headLink = [
  {
    id: 0,
    title: "আল কুরআন",
    path: "/pages/quran",
  },
  {
    id: 1,
    title: "কালেমা",
    path: "/pages/kalema",
  },
  // {
  //   id: 2,
  //   title: "সালাত",
  //   path: "/pages/salat",
  // },
  {
    id: 3,
    title: "আল্লাহর নাম",
    path: "/pages/allah-names",
  },

  // {
  //   id: 3,
  //   title: "কুরবানি",
  //   path: "/pages/qurbani",
  // },
];

const NavMenu = () => {
  return (
    <>
      {headLink.map((link) => {
        return (
          <li className="group" key={link.id}>
            <Link href={link?.path} className="text-black">
              {link?.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavMenu;
