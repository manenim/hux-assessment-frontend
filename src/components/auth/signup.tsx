"use client"

import React, { FormEvent, useRef } from "react";
import { Button, Input } from "@nextui-org/react";
import { useSignupMutation } from "@/services/usersdata";

type FormInput = {
    name: string;
    email: string;
    password: string;
}

export default function SignupForm() {

    const [signup, {data, isError, isLoading}] = useSignupMutation()
    

    const formdata = useRef<FormInput>({
        name: '',
        email: '',
        password: '',
    })

    console.log(formdata)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        
      e.preventDefault();
      signup(formdata.current);
    };

    console.log(data)

  return (
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <form onSubmit={handleSubmit}>
               <Input
        type="text"
        required
        onChange={(e) => (formdata.current.name = e.target.value)}
        label="name"
      />
      <Input
        type="email"
        required
        onChange={(e) => (formdata.current.email = e.target.value)}
        label="Email"
      />
      <Input
        type="password"
        label="Passwod"
        required
        onChange={(e) => (formdata.current.password = e.target.value)}
        placeholder="Enter your password"
      />
      <Button disabled={isLoading} type="submit">Sign Up</Button>
          </form>
    </div>
     
  );
}
