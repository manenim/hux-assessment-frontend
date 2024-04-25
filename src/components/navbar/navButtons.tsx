"use client"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Button, NavbarContent, NavbarItem } from '@nextui-org/react'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { signOut } from "next-auth/react";


type Props = {}

const NavButtons = (props: Props) => {
  // const {data: session} = useSession()
  // console.log(session)

    const { status, data: sessionData } = useSession();
 if (status === "loading") {
   return null;
  }
   const handleSignOut = async () => {
     const data = await signOut({ callbackUrl: "/signup" });
  };
  

 if (status === "authenticated") {
   return (
     <>
       <NavbarContent className="hidden sm:flex gap-4" justify="center">
         <NavbarItem>
           <h3>Welcome {sessionData.user.firstname}</h3>
         </NavbarItem>
       </NavbarContent>
       <NavbarContent justify="end">
         <NavbarItem className="hidden lg:flex">
           <Link className="text-lg" href="/contacts">
             Dashboard
           </Link>
         </NavbarItem>
         <NavbarItem>
           <Button
             className="text-lg text-white"
             color="primary"
             onClick={handleSignOut}
             href="/contacts"
             variant="flat">
             Logout
           </Button>
         </NavbarItem>
       </NavbarContent>
     </>
   );
 }
    
  
  if (status === "unauthenticated") {
    return (
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-lg" href="/login">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-lg text-white"
            as={Link}
            color="primary"
            href="/signup"
            variant="flat">
            Signup
          </Button>
        </NavbarItem>
      </NavbarContent>
    );
  }

  return null
}

export default NavButtons