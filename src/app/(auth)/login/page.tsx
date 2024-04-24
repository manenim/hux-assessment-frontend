
"use client"

import LoginForm from '@/components/auth/login'
import { useSession } from 'next-auth/react'
    import { redirect } from "next/navigation";


import React from 'react'

type Props = {}

const Login = (props: Props) => {
  const { data: session } = useSession()
  
  if (session) {
    redirect("/contacts");
  }
  return (
      <div>
          <LoginForm />
    </div>
  )
}

export default Login