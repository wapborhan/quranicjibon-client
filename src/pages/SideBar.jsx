"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import useRouter to get current path
import { AiOutlineHome } from "react-icons/ai";
import { SiNamecheap } from "react-icons/si";
import { FiBookOpen, FiBook } from "react-icons/fi";
import { BiDonateBlood } from "react-icons/bi";
import ActiveLink from "@/components/shared/ActiveLink";

const SideBar = () => {
  // Get the current route using useRouter
  const currentPath = usePathname();
  // const currentPath = router.asPath; // This gives the current URL path

  // Function to check if the current path matches
  const isActive = (path) => currentPath.includes(path);

  return (
    <div className="relative hidden w-24 !mt-20 p-4 pb-32 md:flex flex-col justify-between items-center dark:text-dark-text">
      <ActiveLink href="/" title="Home" isActive={isActive("/")}>
        <AiOutlineHome size={28} />
      </ActiveLink>
      <ActiveLink
        href="/pages/quran"
        title="Quran"
        isActive={isActive("/pages/quran")}
      >
        <FiBookOpen size={28} />
      </ActiveLink>
      <ActiveLink
        href="/pages/kalema"
        title="Kalema"
        isActive={isActive("/pages/kalema")}
      >
        <FiBook size={28} />
      </ActiveLink>
      <ActiveLink
        href="/pages/allah-names"
        title="Allah Names"
        isActive={isActive("/pages/allah-names")}
      >
        <SiNamecheap size={28} />
      </ActiveLink>
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
