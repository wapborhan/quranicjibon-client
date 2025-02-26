"use client";
import ActiveLink from "@/components/shared/ActiveLink";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { SiNamecheap } from "react-icons/si";
import { FiBookOpen, FiBook } from "react-icons/fi";

const NavBar = () => {
  const currentPath = usePathname();
  const isActive = (path) => currentPath.includes(path);
  return (
    <>
      {" "}
      <ActiveLink href="/" title="Home" isActive={isActive("/")}>
        <AiOutlineHome size={28} />
      </ActiveLink>
      <ActiveLink href="/quran" title="Quran" isActive={isActive("/quran")}>
        <FiBookOpen size={28} />
      </ActiveLink>
      <ActiveLink href="/kalema" title="Kalema" isActive={isActive("/kalema")}>
        <FiBook size={28} />
      </ActiveLink>
      <ActiveLink
        href="/allah-names"
        title="Allah Names"
        isActive={isActive("/allah-names")}
      >
        <SiNamecheap size={28} />
      </ActiveLink>
    </>
  );
};

export default NavBar;
