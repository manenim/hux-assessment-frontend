"use client"
import { Button } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";

import Link from 'next/link';
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

type Props = {}

const SignButtons = (props: Props) => {
    const { data: session } = useSession();

  const handleSignOut = async () => {
    const data = await signOut({ callbackUrl: "/signup" })
    // useRouter().push(data.url)
  }

  
  console.log('first', session)
    if (session && session.user) {
        return (
            <Button onClick={handleSignOut}>
                sign out
            </Button>
        )
    }
    return (
      <div>
        <button onClick={() => signIn()}>Sign in</button>
        <Link href={"/signup"}>sign up</Link>
      </div>
    );
}

export default SignButtons