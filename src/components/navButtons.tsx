"use client"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Button, NavbarContent, NavbarItem } from '@nextui-org/react'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const NavButtons = (props: Props) => {
  const {data: session} = useSession()
  console.log(session)
    
    if (!session) {
        return (
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
                href="#"
                variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        );
    }

  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link className="text-lg" href="login">
          {session.user.firstname}
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button
          className="text-lg text-white"
          as={Link}
          color="primary"
          href="/contacts"
          variant="flat">
          Dashboard
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
}

export default NavButtons