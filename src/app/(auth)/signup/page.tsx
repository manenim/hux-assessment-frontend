import SignupForm from '@/components/auth/signup'
import React from 'react'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {}

const Signup = (props: Props) => {
    const { data: session } = useSession();

    if (session) {
      redirect("/contacts");
    }
  return (
      <div>
          <SignupForm />
    </div>
  )
}

export default Signup