"use client"

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LoginForm from '@/components/auth/login'
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react'
    import { redirect } from "next/navigation";



type Props = {}

const Login = (props: Props) => {
  const session = useSession()
  if (session.status == "loading") {
    return <h1>Please wait</h1>
  }
  if (session.status == "authenticated") {
    redirect("/contacts");
  }
  return (
      <div>
          <LoginForm />
    </div>
  )
}

export default Login