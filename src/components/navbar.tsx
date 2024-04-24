import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
 
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function NavbarComponent() {

  return (
    <Navbar className="bg-[#00246B] text-white h-20 ">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit text-xl">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-lg" href="login">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-lg"
            as={Link}
            color="primary"
            href="/signup"
            variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
