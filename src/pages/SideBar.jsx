import Link from "next/link";
import { BiDonateBlood } from "react-icons/bi";
import NavBar from "./NavBar";

const SideBar = () => {
  return (
    <div className="relative hidden w-24 !mt-20 p-4 pb-32 md:flex flex-col justify-start gap-5 items-center dark:text-dark-text">
      <NavBar />
      <Link
        href="/donate"
        className="absolute left-0 bottom-3 translate-x-1/4 p-4 bg-[#2b9e76] text-white rounded-xl"
      >
        <BiDonateBlood size={28} />
      </Link>
    </div>
  );
};

export default SideBar;
