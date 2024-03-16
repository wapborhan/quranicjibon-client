import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { SiNamecheap } from "react-icons/si";
import { FiBookOpen, FiBook } from "react-icons/fi";
import { PiBooksLight, PiDotsNineBold } from "react-icons/pi";
import { BsBookmark, BsSend, BsFillMoonStarsFill } from "react-icons/bs";
import { BiDonateBlood } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="relative hidden w-24 !mt-20 p-4 pb-32 md:flex flex-col justify-between items-center dark:text-dark-text">
      <Link
        href="/"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
        title="Home"
      >
        <AiOutlineHome size={28} />
      </Link>
      <Link
        href="/pages/quran"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
        title="Quran"
      >
        <FiBookOpen size={28} />
      </Link>
      <Link
        href="/pages/hadith"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
        title="Hadith"
      >
        <PiBooksLight size={28} />
      </Link>
      <Link
        href="/pages/siam"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
        title="Siam"
      >
        <BsFillMoonStarsFill size={28} />
      </Link>
      <Link
        href="/pages/allah-names"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
        title="Allah Names"
      >
        <SiNamecheap size={28} />
      </Link>
      <Link
        href="/pages/kalema"
        className="p-4 hover:bg-gray-100 hover:text-black rounded-xl"
        title="Allah Names"
      >
        <FiBook size={28} />
      </Link>

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
