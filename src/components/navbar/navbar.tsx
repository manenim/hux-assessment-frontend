import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import NavButtons from "./navButtons";

export default async function NavbarComponent() {
  return (
    <Navbar className="bg-[#00246B] text-white h-20 ">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Link href="/">
          <p className="font-bold text-inherit text-xl">Contacts App</p>
        </Link>
      </NavbarBrand>
      
      <NavButtons />
    </Navbar>
  );
}
