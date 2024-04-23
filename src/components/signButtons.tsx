"use client"
import { useSession, signIn, signOut } from "next-auth/react";

import Link from 'next/link';

type Props = {}

const SignButtons = (props: Props) => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <Link href={"/api/auth/signout"}>
                sign out
            </Link>
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