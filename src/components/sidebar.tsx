"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Sidebar = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-[#00246B]">
      <div className="pt-20">
      <Link href="/contacts">
        <div
          className={`py-6 pl-4 mb-12 text-white text-xl ${
            pathname === "/contacts" ? "bg-[#CADCFC]  text-[#00246B]" : " "
          }`}>
          
          View Contact
        </div>
        </Link>
        <Link href="/contacts/create">
        <div
          className={`py-6 pl-4 mb-12 text-white text-xl ${
            pathname === "/contacts/create"
              ? "bg-[#CADCFC] text-[#00246B] "
              : " "
          }`}>
          
            Add Contact
        </div>
        </Link>
        <Link href="/contacts/edit">
        <div
          className={`py-6 pl-4 mb-12 text-white text-xl ${
            pathname === "/contacts/edit" ? "bg-[#CADCFC]  text-[#00246B]" : ""
          }`}>
            Edit Contact
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
