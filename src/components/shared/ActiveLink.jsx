"use client"; // Mark this as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for client-side routing

const ActiveLink = ({ href, children, title }) => {
  const pathname = usePathname(); // Get current route

  const isActive = pathname === href; // Check if current route matches href

  return (
    <Link
      href={href}
      className={`p-4 hover:bg-gray-100 hover:text-black rounded-xl ${
        isActive ? "bg-[#2b9e76] text-white" : ""
      }`}
      title={title}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
