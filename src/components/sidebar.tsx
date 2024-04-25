"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Sidebar = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="h-[91vh] -mt-2 fixed w-[19vw] hidden md:block  bg-[#00246B]">
      <div className="pt-20">
        <Link href="/contacts">
          <div
            className={`py-6 pl-8 mb-12 text-xl ${
              pathname == "/contacts" ? "bg-[#CADCFC] pl-8 text-[#00246B]" : "text-white "
            }`}>
            View Contact
          </div>
        </Link>
        <Link href="/contacts/create">
          <div
            className={`py-6 pl-8 mb-12 text-xl ${
              pathname == "/contacts/create" ? "bg-[#CADCFC] text-[#00246B] " : "text-white "
            }`}>
            Add Contact
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
